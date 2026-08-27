import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/lib/site";

/**
 * Contact form endpoint. Emails the studio through Resend when
 * RESEND_API_KEY / CONTACT_FROM_EMAIL are configured; otherwise replies 501
 * and the form falls back to a prefilled WhatsApp message.
 */

interface Payload {
  name?: unknown;
  phone?: unknown;
  projectType?: unknown;
  message?: unknown;
  company?: unknown;
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const asText = (value: unknown, limit: number) =>
  typeof value === "string" ? value.trim().slice(0, limit) : "";

const asLine = (value: unknown, limit: number) =>
  asText(value, limit).replace(/[\r\n\t]+/g, " ");

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let payload: Payload;
        try {
          payload = ((await request.json()) as Payload | null) ?? {};
        } catch {
          return json(
            { ok: false, reason: "validation", error: "That request could not be read." },
            400,
          );
        }

        // Honeypot: a bot filled a field no person can see. Accept and discard.
        if (asText(payload.company, 100).length > 0) return json({ ok: true });

        const name = asLine(payload.name, 120);
        const phone = asLine(payload.phone, 40);
        const projectType = asLine(payload.projectType, 40) || "Not specified";
        const message = asText(payload.message, 4000);

        if (name.length < 2) {
          return json(
            { ok: false, reason: "validation", error: "Please enter your name." },
            400,
          );
        }

        if (phone.replace(/\D/g, "").length < 10) {
          return json(
            {
              ok: false,
              reason: "validation",
              error: "Please enter a phone number we can call you back on.",
            },
            400,
          );
        }

        const apiKey = process.env["RESEND_API_KEY"];
        const from = process.env["CONTACT_FROM_EMAIL"];
        const to = process.env["CONTACT_TO_EMAIL"] ?? site.email;

        if (!apiKey || !from) {
          return json({ ok: false, reason: "not-configured" }, 501);
        }

        const rows: Array<[string, string]> = [
          ["Name", name],
          ["Phone", phone],
          ["Project type", projectType],
          ["Message", message || "—"],
        ];

        const html = `
    <div style="font-family:Helvetica,Arial,sans-serif;color:#322820;line-height:1.6">
      <p style="font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#a8813f;margin:0 0 16px">
        New enquiry · decodreams.in
      </p>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding:8px 24px 8px 0;vertical-align:top;font-size:12px;text-transform:uppercase;letter-spacing:.1em;color:#8a7c6b;white-space:nowrap">${label}</td>
            <td style="padding:8px 0;vertical-align:top;font-size:15px;white-space:pre-wrap">${escapeHtml(value)}</td>
          </tr>`,
          )
          .join("")}
      </table>
    </div>`;

        const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");

        try {
          const response = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: `Decodreams Website <${from}>`,
              to: [to],
              subject: `New enquiry — ${name} (${projectType})`,
              html,
              text,
            }),
          });

          if (!response.ok) return json({ ok: false, reason: "send-failed" }, 502);
          return json({ ok: true });
        } catch {
          return json({ ok: false, reason: "send-failed" }, 502);
        }
      },
    },
  },
});
