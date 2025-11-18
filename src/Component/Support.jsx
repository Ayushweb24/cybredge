import React from "react";

const Support = () => {
  return (
    <div className=" relative min-h-screen w-full flex justify-center p-6 pt-60 bg-gradient-to-br  from-black to-cyan-900">
      <div className="max-w-4xl w-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl rounded-2xl p-10 text-white leading-relaxed" data-aos="fade-up" data-aos-delay="100">

        <h1 className="text-3xl font-bold mb-6">Support</h1>

        <p className="mb-4">
          Our team is always here to help you. Reach out using the details below:
        </p>

        <h2 className="text-xl font-semibold mt-6">📩 Email Support</h2>
        <p className="ml-2 mt-1 text-gray-300"><a href="mailto:cyber.edge@yandex.com" className="text-blue-300 ">cyber.edge@yandex.com</a></p>

        <h2 className="text-xl font-semibold mt-6">📞 Phone Support</h2>
        <p className="ml-2 mt-1 text-gray-300"><a href="tel:+919170802934" className="text-blue-300">+919170802934</a></p>

        <h2 className="text-xl font-semibold mt-6">⏱ Working Hours</h2>
        <p className="ml-2 mt-1 text-gray-300">
          Monday – Saturday, 10 AM – 6 PM
        </p>
      </div>
    </div>
  );
};

export default Support;
