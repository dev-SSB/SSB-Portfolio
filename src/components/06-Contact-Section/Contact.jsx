import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000); // Reset after 3 sec
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section className="px-5 sm:px-8 lg:px-10 py-5 mt-3 sm:mt-7 lg:mt-5 font-mono ">
      <div className="flex flex-col  justify-center gap-4 sm:gap-8 lg:gap-5">
        <h1 className="text-center text-3xl sm:text-6xl font-semibold">GET IN TOUCH</h1>

        <p className="text-center sm:w-full lg:w-1/2 m-auto sm:text-2xl lg:text-xl text-gray-400">Have a question, project idea, or just want to say hello? Feel free to reach out—I’d love to hear from you! Fill out the form below, and I’ll get back to you as soon as possible.</p>

        <div className="flex flex-col justify-center items-center mt-10 w-full">
          <form onSubmit={handleSubmitForm} className="flex flex-col gap-8 lg:gap-6 sm:w-full lg:w-1/2 ">
            <div className="flex gap-10">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="border-b w-1/2 focus:outline-none sm:text-2xl lg:text-xl"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="border-b w-1/2 focus:outline-none sm:text-2xl lg:text-xl"
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Message"
              className="border-b w-full focus:outline-none sm:text-2xl lg:text-xl"
            ></textarea>

            <button
              type="submit"
              className="px-5 py-2 border border-amber-300 w-fit flex self-center text-2xl font-semibold hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-200 hover:text-black rounded-md"
            >
              Send Message
            </button>

            {/* Success Message */}
            {submitted && (
              <p className="text-green-600 text-xl text-center font-semibold">✅ Message sent successfully!</p>
            )}
          </form>
        </div>

        <div className='flex gap-5 justify-center mt-3 sm:mt-20 lg:mt-6'>
            <a href='https://www.linkedin.com/in/shivprasad-bodke/' className='px-4 py-1 sm:py-2 lg:py-1 border-none text-3xl sm:text-5xl lg:text-3xl text-amber-300 w-fit rounded transition delay-150 duration-300 ease-in-out hover:-translate-y-3 hover:scale-110'><i class="ri-linkedin-box-fill"></i></a>
            <a href='https://github.com/dev-SSB' className='px-4 py-1 sm:py-2 lg:py-1 border-none text-3xl sm:text-5xl lg:text-3xl text-amber-300 w-fit rounded transition delay-150 duration-300 ease-in-out hover:-translate-y-3 hover:scale-110'><i class="ri-github-fill"></i></a>
            <a href="mailto:shivbodke03@gmail.com" target="_blank" rel="noopener noreferrer" className='px-4 py-1 sm:py-2 lg:py-1 border-none text-3xl sm:text-5xl lg:text-3xl text-amber-300 w-fit rounded transition delay-150 duration-300 ease-in-out hover:-translate-y-3 hover:scale-110'>
              <i class="ri-mail-line"></i>
            </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
