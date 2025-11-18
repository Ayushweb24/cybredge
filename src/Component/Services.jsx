export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br  from-black to-cyan-900 text-white p-6 pt-60">

      <div className="max-w-5xl mx-auto backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-10 shadow-xl" data-aos="fade-up" data-aos-delay="100">

        <h1 className="text-5xl font-bold mb-6">Web Design & UI/UX Excellence</h1>

        <p className="opacity-90 mb-10 text-lg">
          We design premium digital experiences that communicate identity, inspire trust, and drive growth.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            "Website UI & Identity",
            "Mobile App UI/UX",
            "Dashboard Interface Design",
            "User Flow & Journey Mapping",
            "Motion & Interaction Design",
            "Conversion-Focused Layouts"
          ].map((service, i) => (
            <div key={i} className="p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl" data-aos="fade-up" data-aos-delay={i * 100}>
              <h3 className="text-xl font-semibold">{service}</h3>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
