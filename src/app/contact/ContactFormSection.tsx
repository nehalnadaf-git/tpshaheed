"use client";
import { useState } from "react";
function Field({ label, placeholder, select, textarea }: { label: string; placeholder: string; select?: boolean; textarea?: boolean; }) {
  const cls = "w-full rounded-xl border border-zinc-200 bg-white px-4 py-3.5 text-base outline-none transition focus:ring-2 focus:ring-[var(--navy)] sm:rounded-2xl sm:text-sm";
  return (
    <label className="grid gap-1.5 text-sm">
      <span className="font-medium text-zinc-700">{label}</span>
      {textarea ? <textarea className={`${cls} min-h-36`} placeholder={placeholder} /> : select ? (
        <select className={cls}>
          <option>{placeholder}</option>
          <option>Admissions Enquiry</option>
          <option>Programs &amp; Courses</option>
          <option>Admissions &amp; Scholarships</option>
          <option>Campus Visit</option>
          <option>Placement Cell</option>
          <option>General Enquiry</option>
        </select>
      ) : <input className={`${cls} placeholder:text-zinc-400`} placeholder={placeholder} />}
    </label>
  );
}
export default function ContactFormSection() {
  const [sent, setSent] = useState(false);
  return (
    <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.04)] sm:rounded-[2rem] sm:p-8 lg:p-10">
      <h3 className="text-2xl font-semibold tracking-[-0.05em]">Send Us a Message</h3>
      <p className="mt-1.5 text-sm text-zinc-500">We typically respond within 1-2 working days.</p>
      {sent ? (
        <div className="mt-8 flex flex-col items-center justify-center gap-4 py-12 text-center">
          <h4 className="text-xl font-semibold text-zinc-900">Message Sent!</h4>
          <p className="text-sm text-zinc-500 max-w-xs">Thank you. Our team will respond within 1-2 working days.</p>
          <button onClick={() => setSent(false)} className="mt-2 rounded-full border border-zinc-200 px-5 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 transition">
            Send Another Message
          </button>
        </div>
      ) : (
        <form className="mt-6 grid gap-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="First name" placeholder="Your first name" />
            <Field label="Last name" placeholder="Your last name" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Email address" placeholder="you@example.com" />
            <Field label="Phone number" placeholder="+91 XXXXX XXXXX" />
          </div>
          <Field label="Subject" placeholder="What is this regarding?" select />
          <Field label="Message" placeholder="Type your message here..." textarea />
          <button type="submit" style={{ color: "#ffffff" }} className="mt-1 inline-flex w-fit items-center gap-3 rounded-full bg-[var(--navy)] px-7 py-3.5 text-sm font-medium !text-white shadow-lg transition hover:scale-[1.02] hover:bg-[#111f4f]">
            <span style={{ color: "#ffffff" }} className="!text-white">Send Message</span>
            <span style={{ color: "#ffffff" }} className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 !text-white">↗</span>
          </button>
        </form>
      )}
    </div>
  );
}
