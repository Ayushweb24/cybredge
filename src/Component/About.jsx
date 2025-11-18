export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br  from-black to-cyan-900 text-white p-6 pt-60">
      
      <div className="max-w-5xl mx-auto backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-10 shadow-xl data" data-aos="fade-up">

        <h1 className="text-5xl font-bold mb-6">About Us</h1>

        <p className="opacity-90 text-lg mb-8">
          Cybredge Private Limited is a modern digital transformation and experience design company 
          shaping brands with clarity, creativity, and authority.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg" data-aos="fade-up" data-aos-delay="100" >
            <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
            <p className="opacity-80">To empower brands to communicate clearly and confidently.</p>
          </div>

          <div className="p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg" data-aos="fade-up" data-aos-delay="100" >
            <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
            <p className="opacity-80">To build intuitive, beautiful, strategic, and scalable digital systems.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
