import React from "react";

const Form = () => {
  return (
    <form
      action="/api/contact" // Replace with your actual backend endpoint
      method="POST"
      className="max-w-3xl mx-auto bg-white p-6 space-y-4"
    >
      <h2 className="text-2xl font-bold text-center text-gray-700">
        Contact Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 bg-gray-300"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 bg-gray-300"
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 bg-gray-300"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 bg-gray-300"
          required
        />
      </div>

      <textarea
        name="message"
        placeholder="Your Message"
        rows={4}
        className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 bg-gray-300"
        required
      />

      <div className="text-center">
        <button
          type="submit"
          className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-600 transition "
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default Form;
