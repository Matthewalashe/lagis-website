import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

/* Lightweight inline SVG social icons (Lucide doesn't ship brand icons) */
const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const XIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);
const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
);
const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-16 pb-6">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          {/* Column 1 - Brand */}
          <div className="lg:col-span-4 flex flex-col">
            <Link to="/" className="flex items-baseline gap-2 mb-6">
              <span className="font-epilogue font-bold text-3xl text-white tracking-wide">
                LAGIS
              </span>
              <span className="font-inter font-medium text-sm text-primary">
                GIS Units
              </span>
            </Link>
            <p className="text-light-gray/80 font-inter text-sm leading-relaxed mb-6 max-w-sm">
              Lagos State Geographic Information System - Providing geospatial solutions for a smarter Lagos.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors text-white hover:text-white" aria-label="Facebook">
                <FacebookIcon size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors text-white hover:text-white" aria-label="X (Twitter)">
                <XIcon size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors text-white hover:text-white" aria-label="Instagram">
                <InstagramIcon size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors text-white hover:text-white" aria-label="LinkedIn">
                <LinkedinIcon size={18} />
              </a>

            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-epilogue font-semibold text-lg text-white mb-6">Explore</h3>
              <ul className="flex flex-col gap-3 font-inter text-sm text-light-gray/80">
                <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/gis-units" className="hover:text-primary transition-colors">GIS Units</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
                <li><Link to="/maps" className="hover:text-primary transition-colors">Maps & Imagery</Link></li>
                <li><Link to="/shop" className="hover:text-primary transition-colors">Products and Services</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-epilogue font-semibold text-lg text-white mb-6">Information</h3>
              <ul className="flex flex-col gap-3 font-inter text-sm text-light-gray/80">
                <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-of-use" className="hover:text-primary transition-colors">Terms of Use</Link></li>
                <li><Link to="/data-sharing-policy" className="hover:text-primary transition-colors">Data Sharing Policy</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 3 - Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="font-epilogue font-semibold text-lg text-white mb-6">Contact Us</h3>
            <ul className="flex flex-col gap-4 font-inter text-sm text-light-gray/80">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>Block 15, the Secretariat, Alausa</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+234 903 981 4222</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:info@lagisunit.com" className="hover:text-primary transition-colors">
                  info@lagisunit.com
                </a>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-light-gray/60 font-inter text-xs">
            Copyright &copy; {currentYear} LAGIS Units. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
