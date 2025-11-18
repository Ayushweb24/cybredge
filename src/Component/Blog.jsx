export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br  from-black to-cyan-900 text-white p-6 pt-60">

      <div className="max-w-5xl mx-auto backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-10 shadow-xl" data-aos="fade-up" data-aos-delay="100">

        <h1 className="text-5xl font-bold mb-6">Latest Insights</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {[1,2,3,4].map((n) => (
            <div key={n} className="p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-lg" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-2xl font-bold mb-3">Blog Post {1}</h3>
              <p className="opacity-80 text-sm">A modern take on design, branding, and digital strategy.</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
