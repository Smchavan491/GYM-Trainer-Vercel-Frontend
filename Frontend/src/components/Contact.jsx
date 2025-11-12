import React, { useState } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha"; // 👈 Add this

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null); // 👈 New state

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value); // 👈 Store token
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    if (!captchaValue) {
      alert("⚠️ Please verify CAPTCHA before submitting.");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/contact", {
        ...formData,
        captcha: captchaValue, // 👈 Send captcha token to backend
      });

      if (res.status === 200) {
        setSuccess(true);
        alert(`✅ Thanks, ${formData.name}! Your message has been sent successfully.`);
        setFormData({ name: "", email: "", message: "" });
        setCaptchaValue(null);
      }
    } catch (err) {
      console.error("❌ Error sending message:", err);
      alert("⚠️ Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-center">
      <h2 className="text-4xl font-bold text-red-500 mb-10">Get in touch with us</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-gray-800 p-8 rounded-xl shadow-md"
      >
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full mb-4 p-3 rounded bg-gray-900 border border-gray-700 text-white"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full mb-4 p-3 rounded bg-gray-900 border border-gray-700 text-white"
          required
        />
        <textarea
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full mb-4 p-3 rounded bg-gray-900 border border-gray-700 text-white"
          rows="4"
          required
        ></textarea>

        {/* 👇 CAPTCHA widget */}
        <div className="flex justify-center mb-4">
          <ReCAPTCHA
            sitekey="6LcR-gksAAAAAAuyLupMdesKvZPGLm_1h3zYkSo-" // 👈 Replace with your site key from Google
            onChange={handleCaptchaChange}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded font-semibold transition ${
            loading
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-red-600 hover:bg-red-700"
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {success && (
        <p className="text-green-400 mt-4">Your message was sent successfully!</p>
      )}
    </section>
  );
};

export default Contact;
