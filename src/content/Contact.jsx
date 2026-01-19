import { useState } from "react";
import ContactListComponent from "../components/ContactListComponent";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields!");
      return;
    }

    // Prepare payload for Web3Forms
    const payload = {
      access_key: "ed382907-0ae9-4bd3-874d-3976ba156381", // Your Web3Forms access key
      name: formData.name,
      email: formData.email,
      message: formData.message,
      subject: "New Contact Message", // Optional
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Try again!");
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Try again later.");
    }
  };

  return (
    <section className="contact-wrapper" id="contact">
      <div className="contact-header">
        <h1>Let's Work Together</h1>
        <p>
          Have a project in mind or just want to chat? I'd love to hear from you.
        </p>
      </div>

      <div className="contact-grid">
        {/* Left Contact Info */}
        <div className="contact-left">
          <h3>Get in Touch</h3>
          <p className="contact-desc">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <div className="contact-list">
            <ContactListComponent
              icon={<FiMail />}
              title="Email"
              value={<a href="mailto:sew007ak@gmail.com">sew007ak@gmail.com</a>}
            />
            <ContactListComponent
              icon={<FiPhone />}
              title="Phone"
              value={<a href="tel:9807902217">9807902217</a>}
            />
            <ContactListComponent
              icon={<FiMapPin />}
              title="Location"
              value="Available Worldwide"
            />
          </div>
        </div>

        {/* Right Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Send Message</button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </section>
  );
}
