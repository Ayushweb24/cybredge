export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br  from-black to-cyan-900 text-white p-6 pt-60">

      <div className="max-w-4xl mx-auto backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-10 shadow-xl" data-aos="fade-up" data-aos-delay="100">

        <h1 className="text-5xl font-bold mb-6">Contact Us</h1>

        <form className="flex flex-col gap-6 max-w-xl" data-aos="fade-up" data-aos-delay="100">
          <input className="p-4 rounded-xl bg-white/20 backdrop-blur-xl border border-white/30 text-white placeholder-white/70" placeholder="Full Name"  data-aos="fade-up" data-aos-delay="100"/>
          <input className="p-4 rounded-xl bg-white/20 backdrop-blur-xl border border-white/30 text-white placeholder-white/70" placeholder="Email Address" data-aos="fade-up" data-aos-delay="100" />
          <textarea className="p-4 h-32 rounded-xl bg-white/20 backdrop-blur-xl border border-white/30 text-white placeholder-white/70" placeholder="Message" data-aos="fade-up" data-aos-delay="100"></textarea>

          <button className="px-8 py-3 bg-white text-cyan-700 font-bold rounded-xl shadow-lg hover:bg-white/90">
            Send Message
          </button>
        </form>

      </div>
    </div>
  );
}
