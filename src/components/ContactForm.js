import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rnpjrzs",   // Your EmailJS service ID
        "template_udggsur",  // Your EmailJS template ID
        form.current,
        "IgFCYdsX1GHYTOlHX"  // Your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Message Sent:", result.text);
          alert("✅ Message sent successfully!");
          form.current.reset(); // clear form after success
        },
        (error) => {
          console.log("Error:", error.text);
          alert("❌ Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="p-10 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Send message</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact-form flex flex-col gap-4 max-w-md mx-auto bg-white shadow-lg p-6 rounded-xl"
      >
        <input
          className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <textarea
          className="p-3 border rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          name="message"
          placeholder="Write your message..."
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all"
        >
          Send
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
