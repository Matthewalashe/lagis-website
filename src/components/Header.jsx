import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const units = [
  { name: 'All GIS Units', path: '/gis-units' },
  { name: 'MIST GIS Unit', path: '/gis-units/mist' },
  { name: 'NTDA GIS Unit', path: '/gis-units/ntda' },
  { name: 'LASBCA', path: '/gis-units/lasbca' },
  { name: 'LAMATA', path: '/gis-units/lamata' },
  { name: 'LASIEC', path: '/gis-units/lasiec' },
  { name: 'LASRERA', path: '/gis-units/lasrera' },
  { name: 'Tourism', path: '/gis-units/tourism' },
  { name: 'Lands Bureau', path: '/gis-units/lands-bureau' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopUnitsOpen, setDesktopUnitsOpen] = useState(false);
  const [mobileUnitsOpen, setMobileUnitsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileUnitsOpen(false);
    setDesktopUnitsOpen(false);
  }, [location.pathname]);

  const navLinkClasses = ({ isActive }) =>
    `text-base font-inter transition-colors duration-200 ${
      isActive
        ? 'text-primary font-medium'
        : 'text-dark-gray hover:text-primary'
    }`;

  const navItemHoverProps = {
    onMouseEnter: () => setDesktopUnitsOpen(true),
    onMouseLeave: () => setDesktopUnitsOpen(false),
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-baseline gap-2 z-50">
            <span className="font-epilogue font-bold text-2xl text-navy">
              LAGIS
            </span>
            <span className="font-inter font-medium text-sm text-primary">
              GIS Units
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLink to="/" className={navLinkClasses}>
              Home
            </NavLink>
            
            <div className="relative" {...navItemHoverProps}>
              <button
                className={`flex items-center gap-1 text-base font-inter transition-colors duration-200 ${
                  location.pathname.startsWith('/gis-units')
                    ? 'text-primary font-medium'
                    : 'text-dark-gray hover:text-primary'
                }`}
                onClick={() => setDesktopUnitsOpen(!desktopUnitsOpen)}
              >
                Units
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    desktopUnitsOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {desktopUnitsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md border border-light-gray overflow-hidden"
                  >
                    <div className="py-2 flex flex-col">
                      {units.map((unit) => (
                        <NavLink
                          key={unit.path}
                          to={unit.path}
                          className={({ isActive }) =>
                            `px-4 py-2 text-sm font-inter transition-colors hover:bg-light-gray ${
                              isActive ? 'text-primary font-medium bg-light-gray/50' : 'text-dark-gray'
                            }`
                          }
                        >
                          {unit.name}
                        </NavLink>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/maps" className={navLinkClasses}>
              Maps
            </NavLink>
            <NavLink to="/services" className={navLinkClasses}>
              Services
            </NavLink>
            <NavLink to="/about" className={navLinkClasses}>
              About
            </NavLink>
            <NavLink to="/shop" className={navLinkClasses}>
              Shop
            </NavLink>
            <NavLink to="/contact" className={navLinkClasses}>
              Contact
            </NavLink>
          </nav>

          {/* Contact Button Desktop */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-primary hover:bg-primary/90 text-white font-inter font-medium py-2.5 px-6 rounded-full transition-colors shadow-sm hover:shadow-md"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-navy z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white lg:hidden flex flex-col pt-24 px-6 overflow-y-auto"
          >
            <nav className="flex flex-col gap-6 text-lg font-inter">
              <NavLink to="/" className={navLinkClasses}>
                Home
              </NavLink>
              
              <div className="flex flex-col">
                <button
                  className={`flex items-center justify-between py-2 border-b border-light-gray ${
                    location.pathname.startsWith('/gis-units')
                      ? 'text-primary font-medium'
                      : 'text-dark-gray'
                  }`}
                  onClick={() => setMobileUnitsOpen(!mobileUnitsOpen)}
                >
                  Units
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-200 ${
                      mobileUnitsOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {mobileUnitsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden flex flex-col pl-4 pt-2 gap-3"
                    >
                      {units.map((unit) => (
                        <NavLink
                          key={unit.path}
                          to={unit.path}
                          className={({ isActive }) =>
                            `text-base py-1 ${
                              isActive ? 'text-primary' : 'text-dark-gray'
                            }`
                          }
                        >
                          {unit.name}
                        </NavLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink to="/maps" className={navLinkClasses}>
                Maps
              </NavLink>
              <NavLink to="/services" className={navLinkClasses}>
                Services
              </NavLink>
              <NavLink to="/about" className={navLinkClasses}>
                About
              </NavLink>
              <NavLink to="/shop" className={navLinkClasses}>
                Shop
              </NavLink>
              <NavLink to="/contact" className={navLinkClasses}>
                Contact
              </NavLink>

              <Link
                to="/contact"
                className="mt-6 bg-primary text-white text-center font-medium py-3 rounded-md shadow-sm"
              >
                Contact Us
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
