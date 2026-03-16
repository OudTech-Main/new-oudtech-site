"use client";

import { useState } from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const PhoneIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M17.45 22.75C16.32 22.75 15.13 22.48 13.9 21.96C12.7 21.45 11.49 20.75 10.31 19.9C9.14 19.04 8.01 18.08 6.94 17.03C5.88 15.96 4.92 14.83 4.07 13.67C3.21 12.47 2.52 11.27 2.03 10.11C1.51 8.87 1.25 7.67 1.25 6.54C1.25 5.76 1.39 5.02 1.66 4.33C1.94 3.62 2.39 2.96 3 2.39C3.77 1.63 4.65 1.25 5.59 1.25C5.98 1.25 6.38 1.34 6.72 1.5C7.11 1.68 7.44 1.95 7.68 2.31L10 5.58C10.21 5.87 10.37 6.15 10.48 6.43C10.61 6.73 10.68 7.03 10.68 7.32C10.68 7.7 10.57 8.07 10.36 8.42C10.21 8.69 9.98 8.98 9.69 9.27L9.01 9.98C9.02 10.01 9.03 10.03 9.04 10.05C9.16 10.26 9.4 10.62 9.86 11.16C10.35 11.72 10.81 12.23 11.27 12.7C11.86 13.28 12.35 13.74 12.81 14.12C13.38 14.6 13.75 14.84 13.97 14.95L13.95 15L14.68 14.28C14.99 13.97 15.29 13.74 15.58 13.59C16.13 13.25 16.83 13.19 17.53 13.48C17.79 13.59 18.07 13.74 18.37 13.95L21.69 16.31C22.06 16.56 22.33 16.88 22.49 17.26C22.64 17.64 22.71 17.99 22.71 18.34C22.71 18.82 22.6 19.3 22.39 19.75C22.18 20.2 21.92 20.59 21.59 20.95C21.02 21.58 20.4 22.03 19.68 22.32C18.99 22.6 18.24 22.75 17.45 22.75ZM5.59 2.75C5.04 2.75 4.53 2.99 4.04 3.47C3.58 3.9 3.26 4.37 3.06 4.88C2.85 5.4 2.75 5.95 2.75 6.54C2.75 7.47 2.97 8.48 3.41 9.52C3.86 10.58 4.49 11.68 5.29 12.78C6.09 13.88 7 14.95 8 15.96C9 16.95 10.08 17.87 11.19 18.68C12.27 19.47 13.38 20.11 14.48 20.57C16.19 21.3 17.79 21.47 19.11 20.92C19.62 20.71 20.07 20.39 20.48 19.93C20.71 19.68 20.89 19.41 21.04 19.09C21.16 18.84 21.22 18.58 21.22 18.32C21.22 18.16 21.19 18 21.11 17.82C21.08 17.76 21.02 17.65 20.83 17.52L17.51 15.16C17.31 15.02 17.13 14.92 16.96 14.85C16.74 14.76 16.65 14.67 16.31 14.88C16.11 14.98 15.93 15.13 15.73 15.33L14.97 16.08C14.58 16.46 13.98 16.55 13.52 16.38L13.25 16.26C12.84 16.04 12.36 15.7 11.83 15.25C11.35 14.84 10.83 14.36 10.2 13.74C9.71 13.24 9.22 12.71 8.71 12.12C8.24 11.57 7.9 11.1 7.69 10.71L7.57 10.41C7.51 10.18 7.49 10.05 7.49 9.91C7.49 9.55 7.62 9.23 7.87 8.98L8.62 8.2C8.82 8 8.97 7.81 9.07 7.64C9.15 7.51 9.18 7.4 9.18 7.3C9.18 7.22 9.15 7.1 9.1 6.98C9.03 6.82 8.92 6.64 8.78 6.45L6.46 3.17C6.36 3.03 6.24 2.93 6.09 2.86C5.93 2.79 5.76 2.75 5.59 2.75ZM13.95 15.01L13.79 15.69L14.06 14.99C14.01 14.98 13.97 14.99 13.95 15.01Z"
      fill="#292D32"
    />
  </svg>
);

const MailIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M17 21.25H7C3.35 21.25 1.25 19.15 1.25 15.5V8.5C1.25 4.85 3.35 2.75 7 2.75H17C20.65 2.75 22.75 4.85 22.75 8.5V15.5C22.75 19.15 20.65 21.25 17 21.25ZM7 4.25C4.14 4.25 2.75 5.64 2.75 8.5V15.5C2.75 18.36 4.14 19.75 7 19.75H17C19.86 19.75 21.25 18.36 21.25 15.5V8.5C21.25 5.64 19.86 4.25 17 4.25H7Z"
      fill="#292D32"
    />
    <path
      d="M11.9988 12.87C11.1588 12.87 10.3088 12.61 9.6588 12.08L6.5288 9.57997C6.2088 9.31997 6.14881 8.84997 6.4088 8.52997C6.66881 8.20997 7.13881 8.14997 7.45881 8.40997L10.5888 10.91C11.3488 11.52 12.6388 11.52 13.3988 10.91L16.5288 8.40997C16.8488 8.14997 17.3288 8.19997 17.5788 8.52997C17.8388 8.84997 17.7888 9.32997 17.4588 9.57997L14.3288 12.08C13.6888 12.61 12.8388 12.87 11.9988 12.87Z"
      fill="#292D32"
    />
  </svg>
);

const LocationIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M11.9989 14.1695C9.86891 14.1695 8.12891 12.4395 8.12891 10.2995C8.12891 8.15945 9.86891 6.43945 11.9989 6.43945C14.1289 6.43945 15.8689 8.16945 15.8689 10.3095C15.8689 12.4495 14.1289 14.1695 11.9989 14.1695ZM11.9989 7.93945C10.6989 7.93945 9.62891 8.99945 9.62891 10.3095C9.62891 11.6195 10.6889 12.6795 11.9989 12.6795C13.3089 12.6795 14.3689 11.6195 14.3689 10.3095C14.3689 8.99945 13.2989 7.93945 11.9989 7.93945Z"
      fill="#292D32"
    />
    <path
      d="M12.0016 22.76C10.5216 22.76 9.03164 22.2 7.87164 21.09C4.92164 18.25 1.66164 13.72 2.89164 8.33C4.00164 3.44 8.27164 1.25 12.0016 1.25C12.0016 1.25 12.0016 1.25 12.0116 1.25C15.7416 1.25 20.0116 3.44 21.1216 8.34C22.3416 13.73 19.0816 18.25 16.1316 21.09C14.9716 22.2 13.4816 22.76 12.0016 22.76ZM12.0016 2.75C9.09164 2.75 5.35164 4.3 4.36164 8.66C3.28164 13.37 6.24164 17.43 8.92164 20C10.6516 21.67 13.3616 21.67 15.0916 20C17.7616 17.43 20.7216 13.37 19.6616 8.66C18.6616 4.3 14.9116 2.75 12.0016 2.75Z"
      fill="#292D32"
    />
  </svg>
);

const contactDetails = [
  {
    icon: <PhoneIcon />,
    label: "Call",
    value: " +234 805 295 2194",
    href: "tel:+2348052952194",
  },
  {
    icon: <MailIcon />,
    label: "Send a mail",
    value: "info@oudtechnologies.com",
    href: "mailto:info@oudtechnologies.com",
  },
  {
    icon: <LocationIcon />,
    label: "Location",
    value: "Port Harcourt, Nigeria",
    href: null,
  },
];

const inputClass =
  "w-full rounded-xl border border-[#E5E7EB] bg-[#F9F9F9] px-4 py-3.5 text-sm text-[#0F1010] placeholder:text-[#03030F59] outline-none transition focus:border-[#2563EB] focus:bg-white";

type Status = "idle" | "loading" | "success" | "error";

const emptyForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  country: "",
  message: "",
};

export default function ContactFormSection() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Something went wrong.");
      }
      setStatus("success");
      setForm(emptyForm);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section
      className="bg-white mt-10 lg:mt-20 py-20 lg:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <RevealOnScroll direction="up" delay={0.1} threshold={0}>
          <h1
            id="contact-heading"
            className="text-4xl font-medium tracking-tight text-[#03030F] md:text-5xl lg:text-[52px]"
          >
            Send us a message
          </h1>
          <p className="mt-4 max-w-xl leading-6 text-[#03030F99] text-base">
            Have questions or want to collaborate? Reach out to us—we&apos;re
            here to help! Whether it&apos;s partnerships, events, or general
            inquiries, let&apos;s connect and create magic.
          </p>
        </RevealOnScroll>

        {/* Two-column: form + info card */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-12">
          {/* Form */}
          <RevealOnScroll direction="up" delay={0.2} threshold={0}>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
              noValidate
            >
              {/* Row 1: First + Last name */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-base text-[#0F1010]">
                    First name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    value={form.firstName}
                    onChange={set("firstName")}
                    className={inputClass}
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-base text-[#0F1010]">Last name</label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    value={form.lastName}
                    onChange={set("lastName")}
                    className={inputClass}
                    required
                  />
                </div>
              </div>

              {/* Row 2: Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-base text-[#0F1010]">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={set("email")}
                  className={inputClass}
                  required
                />
              </div>

              {/* Row 3: Phone + Country */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-base text-[#0F1010]">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    value={form.phone}
                    onChange={set("phone")}
                    className={inputClass}
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-base text-[#0F1010]">Country</label>
                  <input
                    type="text"
                    placeholder="Enter country"
                    value={form.country}
                    onChange={set("country")}
                    className={inputClass}
                    required
                  />
                </div>
              </div>

              {/* Row 4: Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-base text-[#0F1010]">
                  Message<span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={5}
                  placeholder="Type message here"
                  value={form.message}
                  onChange={set("message")}
                  className={`${inputClass} resize-none`}
                  required
                />
              </div>

              {/* Status messages */}
              {status === "success" && (
                <p className="rounded-xl bg-green-50 px-4 py-3 text-sm text-green-700">
                  Message sent! Check your inbox for a confirmation email.
                </p>
              )}
              {status === "error" && (
                <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                  {errorMsg}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-full bg-[#064ADF] py-4 text-sm md:text-[23px] font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {status === "loading" ? "Sending…" : "Submit"}
              </button>
            </form>
          </RevealOnScroll>

          {/* Info card */}
          <RevealOnScroll direction="up" delay={0.3} threshold={0}>
            <div className="rounded-2xl border border-[#E5E7EB] p-8 lg:p-10">
              <h2 className="text-2xl font-medium text-[#0F1010] lg:text-3xl">
                Reach out directly
              </h2>

              <div className="mt-8 flex flex-col gap-7">
                {contactDetails.map((item) => (
                  <div key={item.label} className="flex items-start gap-3.5">
                    <span className="mt-0.5 shrink-0 text-[#0F1010]">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-sm text-[#0F1010]">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 block text-sm text-[#03030FB2] transition-colors hover:text-[#2563EB]"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm text-[#03030FB2]">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
