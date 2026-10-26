import { useState } from "react";
import ContactListComponent from "../components/ContactListComponent";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus("Please fill in all fields!");
      return;
    }

    const payload = {
      access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
      subject: "New Contact Message",
    };

    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch(import.meta.env.VITE_WEB3FORMS_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("Failed to send message. Please try again!");
      }
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-[15px] text-slate-900 outline-none transition-colors duration-200 placeholder:text-slate-400 focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/10";

  return (
    <section
      id="contact"
      className="bg-gray-50 px-[6%] py-20 sm:px-[8%] sm:py-24 lg:py-[140px]"
    >
      {/* Section Header */}
      <div className="mx-auto mb-10 max-w-[720px] px-2 text-center sm:mb-16 sm:px-0 lg:mb-24">
        <h1 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:mb-4 sm:text-4xl lg:mb-[18px] lg:text-5xl">
          Let's Work Together
        </h1>

        <p className="mx-auto max-w-xl text-sm leading-6 text-slate-500 sm:text-base sm:leading-7 lg:text-[17px]">
          Have a project in mind or just want to chat? I'd love to hear from
          you.
        </p>
      </div>

      {/* Contact Content */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 xl:gap-20">
        {/* Left: Contact Information */}

        <div className="min-w-0">
          <h3 className="mb-3 text-xl font-bold text-slate-900 sm:mb-4 sm:text-2xl lg:text-[28px]">
            Get in Touch
          </h3>

          <p className="mb-7 max-w-[420px] text-sm leading-6 text-slate-500 sm:mb-10 sm:text-base sm:leading-7 lg:mb-12">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <div className="flex flex-col gap-5 sm:gap-7">
            <ContactListComponent
              icon={<FiMail />}
              title="Email"
              value={
                <a
                  href="mailto:sew007ak@gmail.com"
                  className="break-all text-sm text-slate-900 no-underline transition-colors duration-200 hover:text-amber-500 sm:text-base"
                >
                  sew007ak@gmail.com
                </a>
              }
            />

            <ContactListComponent
              icon={<FiPhone />}
              title="Phone"
              value={
                <a
                  href="tel:9807902217"
                  className="text-sm text-slate-900 no-underline transition-colors duration-200 hover:text-amber-500 sm:text-base"
                >
                  9807902217
                </a>
              }
            />

            <ContactListComponent
              icon={<FiMapPin />}
              title="Location"
              value="Available Worldwide"
            />
          </div>
        </div>

        {/* Right: Contact Form */}
        <form
          className="flex min-w-0 flex-col gap-6 rounded-2xl bg-white p-6 shadow-[0_30px_60px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10"
          onSubmit={handleSubmit}
        >
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="contact-name"
              className="text-sm font-semibold text-slate-900"
            >
              Name
            </label>

            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              maxLength={100}
              required
              className={inputClasses}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="contact-email"
              className="text-sm font-semibold text-slate-900"
            >
              Email
            </label>

            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              maxLength={254}
              required
              className={inputClasses}
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="contact-message"
              className="text-sm font-semibold text-slate-900"
            >
              Message
            </label>

            <textarea
              id="contact-message"
              name="message"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              minLength={1}
              maxLength={5000}
              required
              rows={5}
              className={`${inputClasses} min-h-[140px] resize-y`}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-1 w-full rounded-xl bg-amber-500 px-5 py-3.5 text-base font-semibold text-white transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-[0_12px_24px_rgba(245,158,11,0.3)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
          >
            {isSubmitting ? "Sending Message..." : "Send Message"}
          </button>

          {/* Submission Status */}
          {status && (
            <p
              role="status"
              aria-live="polite"
              className={`text-center text-sm font-medium ${
                status === "Message sent successfully!"
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
