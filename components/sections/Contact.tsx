'use client'

import { useState, type FormEvent } from 'react'
import { contactChannels } from '@/data/content'

type House = 'zanetuno' | 'nusateraso' | 'both'

interface FormState {
  house: House
  name: string
  company: string
  email: string
  brief: string
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    house: 'nusateraso',
    name: '',
    company: '',
    email: '',
    brief: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="label-row">
          <span className="eyebrow">— Get in touch</span>
          <span className="num">CORRESPONDENCE</span>
        </div>

        <div className="contact-grid">
          <div>
            <h2 className="contact-h">
              Open a quiet<br /><em>conversation.</em>
            </h2>
            <p className="contact-lede">
              &ldquo;Tell us what you need, where it&apos;s going, and when. We&apos;ll write
              back with a path.&rdquo;
            </p>

            <div className="contact-channels">
              {contactChannels.map((ch) => (
                <div key={ch.key} className="channel">
                  <span className="k">{ch.key}</span>
                  <span className="v">{ch.value}</span>
                  <span className="a">{ch.action}</span>
                </div>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="contact-form-h">Send an enquiry.</div>
            <div className="contact-form-sub">
              For sampling, RFQ and partnership requests. Replies within one working day.
            </div>

            <div className="field">
              <label>Interested in</label>
              <div className="brand-choice">
                {(['zanetuno', 'nusateraso', 'both'] as House[]).map((h) => (
                  <span key={h}>
                    <input
                      type="radio"
                      id={`house-${h}`}
                      name="house"
                      checked={form.house === h}
                      onChange={() => setForm((f) => ({ ...f, house: h }))}
                    />
                    <label htmlFor={`house-${h}`}>
                      {h.charAt(0).toUpperCase() + h.slice(1)}
                    </label>
                  </span>
                ))}
              </div>
            </div>

            <div className="field">
              <label htmlFor="contact-name">Full name</label>
              <input
                id="contact-name"
                type="text"
                placeholder="e.g. Mei Tanaka"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="contact-company">Company &amp; country</label>
              <input
                id="contact-company"
                type="text"
                placeholder="e.g. Aoyama Trading, Tokyo"
                value={form.company}
                onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="contact-email">Business email</label>
              <input
                id="contact-email"
                type="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="contact-brief">Brief</label>
              <textarea
                id="contact-brief"
                rows={3}
                placeholder="Product, target grade, indicative volume, destination port…"
                value={form.brief}
                onChange={(e) => setForm((f) => ({ ...f, brief: e.target.value }))}
              />
            </div>

            {submitted ? (
              <div className="form-success">
                ✓&nbsp;&nbsp;Sent — we&apos;ll be in touch.
              </div>
            ) : (
              <button type="submit" className="form-submit">
                Send enquiry <span className="arrow">→</span>
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
