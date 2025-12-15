export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-md border-b border-gray-200">
      <nav className="section flex items-center justify-between h-14">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-purple-600" />
          <span className="font-semibold">MCR</span>
        </div>
        <ul className="hidden md:flex items-center gap-6 text-sm">
          <li><a href="#home" className="hover:text-purple-600">Home</a></li>
          <li><a href="#about" className="hover:text-purple-600">About Us</a></li>
          <li><a href="#faq" className="hover:text-purple-600">FAQ</a></li>
        </ul>
        <a href="#waitlist" className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition">
          Join the Waitlist
        </a>
      </nav>
    </header>
  );
}