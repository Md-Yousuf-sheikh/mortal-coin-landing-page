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
  ];

  return (
    <header className="w-full container-max-width flex items-center justify-between fixed top-3 z-50   ">
      {/* Logo */}
      <div>
        <img src="/img/logo.png" className="nav-logo" />
      </div>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex gap-6 text-gray-700 text-sm font-medium">
        {navItems.map((item, index) => (
          <button key={index} className="nav-item-button cursor-pointer">
            {item}
          </button>
        ))}
        <button className="nav-item-button flex gap-2 items-center cursor-pointer bg-linear-to-r from-[#0339DE] from-60% to-[#5F01B8]">
          <img src="/svg/wallet-icon.svg" className="h-[15px]" />
          <p>Connect Wallet</p>
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-gray-800"
        onClick={() => setMenuOpen(true)}
      >
        <Menu size={28} color="#ffffff" />
      </button>

      {/* Mobile Fullscreen Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-800"
            onClick={() => setMenuOpen(false)}
          >
            <X size={32} color="#ffffff" />
          </button>

          {/* Mobile Nav Items */}
          <nav className="flex flex-col items-center gap-6 text-lg text-gray-700 font-semibold">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.replace(" ", "-").toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600 text-white transition"
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
