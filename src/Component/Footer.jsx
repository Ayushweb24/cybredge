import React from 'react'
import { Facebook, Twitter, Linkedin, Instagram, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {

const handleNewsletterSubmit = (e) => {
    e.preventDefault();

    console.log('Newsletter form submitted with email:', e.target.email.value);
    e.target.reset();
  };

  return (
   <footer className="backdrop-blur-lg bg-white/10 border-t border-white/20 bg-gradient-to-br from-black to-cyan-900 text-white text-center">
      

      <div className="container mx-auto px-6 py-16" data-aos="fade-up" data-aos-delay="100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
             <img alt='LOGO'></img>
                Cybredge Pvt Ltd
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              To empower organizations to express their identity with clarity, confidence, and creativity in the digital space.
We want to build a world where brands communicate clearly, create emotional resonance, and deliver value that lasts.

            </p>
            <div className="flex space-x-4 pt-2 justify-center">
              <button type="button" aria-label="Facebook" className="hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </button>
              <button type="button" aria-label="Twitter" className="hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </button>
              <button type="button" aria-label="LinkedIn" className="hover:text-white transition-colors duration-300">
                <Linkedin size={20} />
              </button>
              <button type="button" aria-label="Instagram" className="hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </button>
            </div>
          </div>

          {/*Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="flex flex-col space-y-3 text-gray-400">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/services"  className="hover:text-white">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-white">Case Studies</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal & Support</h4>
<ul className="flex flex-col space-y-3 text-gray-400">

  <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
  <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
  <li><Link to="/support" className="hover:text-white">Support</Link></li>
  <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>

</ul>

          </div>

         
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <p className="mb-4 text-sm text-gray-700">
              Stay updated with our latest news and offers.
            </p>
           <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2.5 rounded-xl hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="backdrop-blur-md hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] text-white border border-white/20  rounded-xl shadow-lg hover:bg-white/20 px-5  py-2.5 flex items-center justify-center transition-colors duration-300"
                aria-label="Subscribe to newsletter"
              >
                <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
      
      
      <div className="bg-gray-950 border-t border-gray-800 py-6">
        <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Cybredge Pvt Ltd All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer