import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      console.log("✅ Message Sent:", result.text);
      alert("✅ Message sent successfully!");
      form.current.reset();
    } catch (error) {
      console.error("❌ Error:", error);
      alert("❌ Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="p-10 bg-gray-100"
      // ensure this element can span the page width
      style={{ width: "100%" }}
    >
      {/* Row that centers the inner constrained block */}
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        {/* Constrained block — width = Tailwind's max-w-md (28rem / 448px).
            Using inline style here guarantees it's the same width the form will have. */}
        <div style={{ width: "36rem" }}>
          {/* Center heading inside the constrained block */}
          <h2
            className="text-3xl font-bold mb-8"
            style={{ textAlign: "center", marginBottom:32}}
          >
            Send message
          </h2>

          {/* Keep your original form classes; add inline overrides to cancel floats */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form flex flex-col gap-4 bg-white shadow-lg p-6 rounded-xl"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: 25,
              float: "none", // neutralize any float:left rules from global CSS
            }}
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
              disabled={loading}
              className={`bg-blue-500 text-white py-2 rounded-lg transition-all ${
                loading ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-600"
              }`}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
