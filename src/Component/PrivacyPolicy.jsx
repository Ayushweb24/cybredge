export default function PrivacyPolicy() {
  return (
    <div className=" relative w-full min-h-screen flex items-center justify-center p-6 pt-60 bg-gradient-to-br  from-black to-cyan-900">
      <div className="
        w-full max-w-4xl 
        bg-white/10 backdrop-blur-lg 
        border border-white/20 
        rounded-2xl shadow-xl 
        p-8 text-white
      " data-aos="fade-up" data-aos-delay="100">
        
        <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>

        <p className="mb-6 text-center">
          Your privacy is extremely important to us. This Privacy Policy explains
          how we collect, use, store, and protect your information when you use
          our website or services.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">Information We Collect</h2>
        <p className="mb-3">We may collect the following types of data:</p>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Personal info (name, email, phone)</li>
          <li>Messages sent through forms</li>
          <li>Website usage statistics</li>
          <li>Cookies & browser-related data</li>
        </ul>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">How We Use Your Information</h2>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>To improve website performance</li>
          <li>To communicate with you</li>
          <li>To respond to support queries</li>
          <li>To personalize your experience</li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">Data Protection</h2>
        <p className="mb-4">
          We use advanced security measures to protect your personal data.
          Your information is never sold, rented, or shared with unauthorized parties.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">Cookies</h2>
        <p className="mb-4">
          Our website may use cookies to improve user experience.
          You may disable cookies in your browser settings if you prefer.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">Third-Party Services</h2>
        <p className="mb-4">
          We may use trusted third-party tools (analytics, hosting, etc.).
          These partners follow strict data protection standards.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">Your Rights</h2>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Right to access your data</li>
          <li>Right to correct inaccurate information</li>
          <li>Right to request deletion of your data</li>
        </ul>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">Changes to This Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy occasionally.
          Any changes will be updated on this page.
        </p>

        {/* Section 8 */}
        <h2 className="text-2xl font-semibold mt-8 mb-3 text-center">Contact Us</h2>
        <p className="text-center mb-2">
          For questions about our Privacy Policy, contact:
        </p>

        <p className="text-center">
          Email:{" "}
          <a
            href="mailto:cyber.edge@yandex.com"
            className="text-blue-300 underline"
          >
            cyber.edge@yandex.com
          </a>
        </p>

        <p className="text-center mt-1">
          Phone:{" "}
          <a href="tel:+919170802934" className="text-blue-300 underline">
            +919170802934
          </a>
        </p>
      </div>
    </div>
  );
}
