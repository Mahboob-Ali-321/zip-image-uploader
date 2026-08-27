"use client";

import { useState } from "react";
import { site, telHref, whatsappHref } from "@/lib/site";
import { Icon } from "./icons";

type Status = "idle" | "sending" | "sent" | "fallback";

const projectTypes = ["Residential", "Commercial", "Not sure yet"] as const;

/**
 * Enquiry form.
 *
 * Posts to /api/contact, which emails the studio when Resend is configured.
 * If it is not configured — or the network fails — the form does not swallow the
 * enquiry: it hands the person a WhatsApp message prefilled with everything
 * they just typed, so the lead still reaches Decodreams in one tap.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [values, setValues] = useState({
    name: "",
    phone: "",
    projectType: "Residential",
    message: "",
    company: "", // honeypot, never shown to a person
  });

  const set = (field: keyof typeof values) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setValues((current) => ({ ...current, [field]: event.target.value }));

  const enquiryText = [
    "Hello Decodreams, I'd like to discuss a project.",
    "",
    `Name: ${values.name || "—"}`,
    `Phone: ${values.phone || "—"}`,
    `Project type: ${values.projectType}`,
    values.message ? `\n${values.message}` : "",
  ].join("\n");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        reason?: string;
        error?: string;
      };

      if (response.ok && data.ok) {
        setStatus("sent");
        return;
      }

      if (data.reason === "validation") {
        setError(data.error ?? "Please check the details and try again.");
        setStatus("idle");
        return;
      }

      // Email is not set up, or the provider refused. Hand off to WhatsApp.
      setStatus("fallback");
    } catch {
      setStatus("fallback");
    }
  }

  if (status === "sent") {
    return (
      <div className="border-t-2 border-brass bg-limewash/60 p-8">
        <p className="eyebrow">Enquiry received</p>
        <h3 className="display-md mt-6 text-espresso">
          Thank you, {values.name.split(" ")[0] || "and welcome"}.
        </h3>
        <p className="mt-4 max-w-md text-espresso/75">
          We have your details and usually reply the same working day. If it is
          urgent, calling is the fastest way to reach the studio.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href={telHref} className="btn btn-solid">
            <Icon name="phone" className="h-4 w-4" />
            Call {site.phoneDisplay}
          </a>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <Icon name="whatsapp" className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>
    );
  }

  if (status === "fallback") {
    return (
      <div className="border-t-2 border-brass bg-limewash/60 p-8">
        <p className="eyebrow">One more tap</p>
        <h3 className="display-md mt-6 text-espresso">
          Send it straight to the studio.
        </h3>
        <p className="mt-4 max-w-md text-espresso/75">
          Email delivery is not switched on for this site yet, so nothing was
          sent. Your message is ready to go on WhatsApp instead — everything you
          typed is already in it.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappHref(enquiryText)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-solid"
          >
            <Icon name="whatsapp" className="h-4 w-4" />
            Send on WhatsApp
          </a>
          <a href={telHref} className="btn btn-outline">
            <Icon name="phone" className="h-4 w-4" />
            Call instead
          </a>
        </div>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-eyebrow font-medium uppercase text-stone underline decoration-brass/50 underline-offset-4 transition-colors duration-350 ease-soft hover:text-brass"
        >
          Back to the form
        </button>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form onSubmit={onSubmit} noValidate={false} className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="field-label">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            minLength={2}
            autoComplete="name"
            value={values.name}
            onChange={set("name")}
            placeholder="Hemant Ramdiya"
            className="field mt-3"
          />
        </div>

        <div>
          <label htmlFor="phone" className="field-label">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={set("phone")}
            placeholder="+91 91116 21411"
            className="field mt-3"
          />
        </div>
      </div>

      <div>
        <label htmlFor="projectType" className="field-label">
          Project type
        </label>
        <div className="relative">
          <select
            id="projectType"
            name="projectType"
            value={values.projectType}
            onChange={set("projectType")}
            className="field mt-3 appearance-none pr-10"
          >
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <Icon
            name="chevronRight"
            className="pointer-events-none absolute bottom-4 right-1 h-4 w-4 rotate-90 text-brass"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="field-label">
          About the space <span className="normal-case text-stone/70">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={set("message")}
          placeholder="Rooms involved, roughly how big, and when you would like to start."
          className="field mt-3 resize-none"
        />
      </div>

      {/* Spam trap. Hidden from people, tempting to bots. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={values.company}
        onChange={set("company")}
        className="hidden"
      />

      {error && (
        <p role="alert" className="border-l-2 border-brass pl-4 text-[0.9375rem] text-espresso">
          {error}
        </p>
      )}

      <div className="flex flex-col gap-5 pt-2 sm:flex-row sm:items-center">
        <button type="submit" disabled={sending} className="btn btn-solid disabled:opacity-60">
          {sending ? "Sending…" : "Send enquiry"}
          {!sending && <Icon name="arrowRight" className="h-4 w-4" />}
        </button>
        <p className="text-micro uppercase text-stone">
          Or WhatsApp us a photo of the space
        </p>
      </div>
    </form>
  );
}
