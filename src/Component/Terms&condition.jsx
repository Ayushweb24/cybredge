import React from "react";

const TermsConditions = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center  pt-40 bg-gradient-to-br  from-black to-cyan-900" >
      <div className="max-w-4xl w-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl rounded-2xl p-10 text-white leading-relaxed overflow-y-auto " data-aos="fade-up" data-aos-delay="100">

        <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

        <p className="mb-4">
          By accessing this website, you agree to the following terms.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Use of Website</h2>
        <p>
          You may browse our site for information. Misuse, unauthorized access,
          or harmful activity is strictly prohibited.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Intellectual Property</h2>
        <p>
          All content including text, media, and graphics belongs to Cybredge Pvt Ltd.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Limitation of Liability</h2>
        <p>
          We are not responsible for any loss or damage caused by your use of our website.
        </p>

        <p className="mt-6 text-gray-300 text-sm">
          Last updated: January 2025
        </p>
      </div>
    </div>
  );
};

export default TermsConditions;
