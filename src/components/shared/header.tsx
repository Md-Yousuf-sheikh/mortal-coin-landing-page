import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "About",
    "Mortal Coin",
    "Tokenomics",
    "Mortal Game",
    "Community",
    "Connect Wallet",
  ];

  return (
    <header className="w-full px-4 py-3 flex  items-center justify-between bg-white fixed top-0 left-0 z-50">
      {/* Logo */}
      <div className="text-xl font-bold text-gray-800">Logo</div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 text-gray-700 text-sm font-medium">
        {navItems.map((item, index) => (
          <a key={index} href={`#${item.replace(" ", "-").toLowerCase()}`} className="hover:text-blue-600 transition">
            {item}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-800"
        onClick={() => setMenuOpen(true)}
      >
        <Menu size={28} />
      </button>

      {/* Mobile Fullscreen Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-800"
            onClick={() => setMenuOpen(false)}
          >
            <X size={32} />
          </button>

          {/* Mobile Nav Items */}
          <nav className="flex flex-col items-center gap-6 text-lg text-gray-700 font-semibold">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.replace(" ", "-").toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600 transition"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
