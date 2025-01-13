import React, { useState } from "react";
import useSendEmail from "../hooks/useSendEmail";

export default function Contact() {
  const sendEmail = useSendEmail();
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the page reload
    sendEmail({
      from_email: formData.email,
      message: formData.message,
    })
      .then((response) => {
        alert("Email sent successfully:", response);
      })
      .catch((error) => {
        alert.error("Error sending email:", error);
      });
  };

  return (
    <section className="contactForm" id="contact">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@example.com"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            required
          ></textarea>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-dark mb-3">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
