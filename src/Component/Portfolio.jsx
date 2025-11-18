export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-cyan-900 text-white p-6 pt-60" >

      <div className="max-w-5xl mx-auto backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-10 shadow-xl" data-aos="fade-up" data-aos-delay="100">

        <h1 className="text-5xl font-bold mb-6">Our Portfolio</h1>

        <div className="grid md:grid-cols-2 gap-6" data-aos="fade-up" data-aos-delay="100">
          {[1,2,3,4].map((n) => (
            <div key={n} className="h-40 rounded-2xl bg-white/20 border border-white/30 backdrop-blur-lg shadow-xl flex items-center justify-center text-xl font-semibold">
              Project {n}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
