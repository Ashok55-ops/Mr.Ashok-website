import { useState } from "react";

interface FormData {
  name: string;
  whatsapp: string;
  message: string;
}

export default function CTA() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    whatsapp: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.whatsapp.trim() ||
      !formData.message.trim()
    ) {
      alert("Please fill all fields.");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          whatsapp: formData.whatsapp,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");

        setFormData({
          name: "",
          whatsapp: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-dark">
      <div className="container-site">
        <div className="max-w-3xl mx-auto text-center">

          <p className="section-label text-white/40 mb-6">
            Let's Talk
          </p>

          <h2 className="font-display font-bold text-4xl md:text-6xl text-white tracking-tighter leading-tight mb-6">
            Let's find the leaks
            <br />
            costing you <span className="italic text-orange">leads.</span>
          </h2>

          <p className="font-body text-white/50 text-base md:text-lg max-w-lg mx-auto mb-12 leading-relaxed">
            Sign up for a free 30-minute audit. I'll review your website,
            funnels and marketing strategy, then show you exactly where you're
            losing leads and how to improve conversions.
          </p>

          {/* Contact Buttons */}

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">

            <a
              href="mailto:ashokchaudharydm@gmail.com"
              className="btn-primary"
            >
              📧 ashokchaudharydm@gmail.com
            </a>

            <a
              href="https://wa.me/917081079214"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white"
            >
              💬 +91 70810 79214
            </a>

          </div>

          {/* Contact Form */}

          <form
            onSubmit={handleSubmit}
            className="bg-dark-card border border-white/10 rounded-2xl p-8 md:p-10 text-left"
          >

            <p className="font-body font-semibold text-white mb-6 text-sm">
              Or Ready to grow your business? Fill out the form below and I'll get back to you within 4 hours.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-4">

              <div>

                <label className="block text-xs text-white/40 mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ashok Chaudhary"
                  disabled={status === "sending"}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-orange/50"
                />

              </div>

              <div>

                <label className="block text-xs text-white/40 mb-2">
                  WhatsApp Number
                </label>

                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="+91 7081079214"
                  disabled={status === "sending"}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-orange/50"
                />

              </div>

            </div>

            <div className="mb-5">

              <label className="block text-xs text-white/40 mb-2">
                How can I help you?
              </label>

              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your business and marketing goals..."
                disabled={status === "sending"}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 resize-none focus:outline-none focus:border-orange/50"
              />

            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary w-full sm:w-auto"
            >
              {status === "sending"
                ? "Sending..."
                : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-400 mt-4">
                ✅ Thank you! Your message has been sent successfully.
              </p>
            )}

            {status === "error" && (
              <p className="text-red-400 mt-4">
                ❌ Something went wrong. Please try again.
              </p>
            )}

          </form>

        </div>
      </div>
    </section>
  );
}