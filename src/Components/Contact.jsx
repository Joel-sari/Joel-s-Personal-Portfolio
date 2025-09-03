import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  SendIcon,
  Youtube,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { cn } from "../lib/util";

const Contact = () => {
  const [banner, setBanner] = useState({
    show: false,
    type: "success",
    text: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auto-hide banner after 3.5s
  useEffect(() => {
    if (!banner.show) return;
    const id = setTimeout(
      () => setBanner((b) => ({ ...b, show: false })),
      3500
    );
    return () => clearTimeout(id);
  }, [banner.show]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.target);

    formData.append("access_key", "4f66cd3f-d58a-4f42-81c8-1bbf3dc8d32e");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setBanner({
          show: true,
          type: "success",
          text: "Thank you for your submission!",
        });
        event.target.reset();
      } else {
        setBanner({
          show: true,
          type: "error",
          text: data.message || "Submission failed. Please try again.",
        });
      }
      setIsSubmitting(false);
    } catch (error) {
      setBanner({
        show: true,
        type: "error",
        text: error.message || "Network error. Please try again.",
      });
    }
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      {/* Top-center inline banner (no toast), this is the notification to when a form is submitted. This TELLS the user the form has been submitted  */}
      <div
        aria-live="polite"
        className={`pointer-events-none fixed left-1/2 top-3 z-[2147483647] -translate-x-1/2 transition-all duration-300 ${
          banner.show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
      >
        {banner.show && (
          <div className="pointer-events-auto flex items-center gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-lg">
            {/* Icon */}
            {banner.type === "success" ? (
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
            ) : (
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-rose-100">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-rose-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </span>
            )}

            <span className="text-lg font-bold text-slate-900">
              {banner.text}
            </span>

            {/* Dismiss */}
            <button
              type="button"
              onClick={() => setBanner((b) => ({ ...b, show: false }))}
              className="ml-1 rounded-md p-1 text-slate-500 hover:bg-slate-100"
              aria-label="Dismiss"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
      </div>
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary " />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:joelsari19@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    joelsari19@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary " />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+18606725539"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (860)-672-5539
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary " />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Atlanta GA, United States
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/joel-sari/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a href="https://www.instagram.com/joelsariz/" target="_blank">
                  <Instagram />
                </a>
                <a href="https://www.youtube.com/@Joel-Sari" target="_blank">
                  <Youtube />
                </a>
                <a
                  href="https://www.facebook.com/helloitsmejoel/"
                  target="_blank"
                >
                  <Facebook />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs order-2 w-full">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={onSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Johnny Appleseed"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="yourname@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
