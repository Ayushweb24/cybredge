import React from "react";

const FAQ = () => {
  return (
    <div className="  relative min-h-screen w-full flex justify-center p-6 pt-60 bg-gradient-to-br  from-black to-cyan-900">
      <div className="max-w-4xl w-full bg-white/10 backdrop-blur-xl border border-white/20 
      shadow-xl rounded-2xl p-10 text-white leading-relaxed" data-aos="fade-up" data-aos-delay="100">

        <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>

        <h2 className="text-xl font-semibold mt-6">1. What services do you offer?</h2>
        <p className="ml-2 text-gray-300">
          We provide branding, website development, digital strategy, and product design.
        </p>

        <h2 className="text-xl font-semibold mt-6">2. How can I contact support?</h2>
        <p className="ml-2 text-gray-300">
          Email us at <a href="mailto:cyber.edge@yandex.com" className="text-blue-300">cyber.edge@yandex.com</a> or call <a href="tel:+91 91708 02934" className="text-blue-300">
            +91 91708 02934
          </a>
        </p>

        <h2 className="text-xl font-semibold mt-6">3. Do you offer custom solutions?</h2>
        <p className="ml-2 text-gray-300">
          Yes, we develop tailored solutions based on client requirements.
        </p>

        <h2 className="text-xl font-semibold mt-6">4. How long does a project take?</h2>
        <p className="ml-2 text-gray-300">
          Duration depends on project size. Typically 2–8 weeks.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
