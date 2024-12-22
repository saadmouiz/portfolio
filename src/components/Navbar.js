import { Link } from 'react-scroll';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'HOME', offset: 0 },
    { name: 'ABOUT', offset: -80 },
    { name: 'PROJECTS', offset: -80 },
    { name: 'CONTACT', offset: -80 }
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-zinc-900/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link 
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
            className="text-2xl font-bold text-lime-400 glow cursor-pointer"
          >
            &lt;SAAD/&gt;
          </Link>
          
          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                to={item.name.toLowerCase()}
                spy={true}
                smooth={true}
                offset={item.offset}
                duration={800}
                activeClass="text-lime-400"
                className="text-zinc-400 hover:text-lime-400 transition-all duration-300 cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Bouton Menu Mobile */}
          <button 
            className="md:hidden text-lime-400 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {!isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>

        {/* Menu Mobile */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col items-center gap-4 mt-4 border-t border-zinc-800 pt-4">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                to={item.name.toLowerCase()}
                spy={true}
                smooth={true}
                offset={item.offset}
                duration={800}
                onClick={() => setIsMenuOpen(false)}
                activeClass="text-lime-400"
                className="text-zinc-400 hover:text-lime-400 transition-all duration-300 cursor-pointer py-2 w-full text-center"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay pour le menu mobile */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsMenuOpen(false)}
          style={{ zIndex: -1 }}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;