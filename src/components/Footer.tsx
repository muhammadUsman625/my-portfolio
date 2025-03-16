export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Muhammad Usman</h3>
            <p className="text-gray-300">Full Stack Developer</p>
            <p className="text-gray-300">MEAN | MERN</p>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white transition">About</a></li>
              <li><a href="#skills" className="text-gray-300 hover:text-white transition">Skills</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300">Karachi, Pakistan</p>
            <p className="text-gray-300">m.usman21058@gmail.com</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Muhammad Usman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
