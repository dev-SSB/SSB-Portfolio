import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm(
        "service_qxce62o",     // Your EmailJS Service ID
        "template_fq6mhpb",    // Your EmailJS Template ID
        form.current,
        "MMP4ii2TNDHPG5iU4"    // Your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          setSubmitted(true);
          setError(false);
          setTimeout(() => setSubmitted(false), 4000); // Hide message after 4 sec
          form.current.reset();
        },
        (error) => {
          console.error("Error:", error);
          setError(true);
        }
      );
  };

  return (
    <section className="px-5 sm:px-8 lg:px-10 py-5 mt-3 sm:mt-7 lg:mt-5 font-mono">
      <div className="flex flex-col justify-center gap-4 sm:gap-8 lg:gap-5">
        <h1 className="text-center text-3xl sm:text-6xl font-semibold">GET IN TOUCH</h1>

        <p className="text-center sm:w-full lg:w-1/2 m-auto sm:text-2xl lg:text-xl text-gray-400">
          Have a question, project idea, or just want to say hello? Feel free to reach out—I’d love to hear from you!
        </p>

        <div className="flex flex-col justify-center items-center mt-10 w-full">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-8 lg:gap-6 sm:w-full lg:w-1/2">
            <div className="flex gap-10">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="border-b w-1/2 focus:outline-none sm:text-2xl lg:text-xl"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="border-b w-1/2 focus:outline-none sm:text-2xl lg:text-xl"
              />
            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="border-b w-full focus:outline-none sm:text-2xl lg:text-xl"
            ></textarea>

            <button
              type="submit"
              className="px-5 py-2 border border-amber-300 w-fit flex self-center text-2xl font-semibold hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-200 hover:text-black rounded-md"
            >
              Send Message
            </button>

            {/* Success & Error Messages */}
            {submitted && <p className="text-green-500 text-xl text-center font-semibold">✅ Message sent successfully!</p>}
            {error && <p className="text-red-500 text-xl text-center font-semibold">❌ Error sending message. Try again!</p>}
          </form>
        </div>

        {/* Social Links */}
        <div className="flex gap-5 justify-center mt-3 sm:mt-20 lg:mt-6">
          <a href="https://www.linkedin.com/in/shivprasad-bodke/" className="text-3xl text-amber-300 hover:scale-110">
            <i className="ri-linkedin-box-fill"></i>
          </a>
          <a href="https://github.com/dev-SSB" className="text-3xl text-amber-300 hover:scale-110">
            <i className="ri-github-fill"></i>
          </a>
          <a href="mailto:shivbodke03@gmail.com" className="text-3xl text-amber-300 hover:scale-110">
            <i className="ri-mail-line"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
