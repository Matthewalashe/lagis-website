import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-inter text-dark-gray bg-light-gray/30">
      <ScrollToTop />
      <Header />
      <main className="flex-1 pt-[76px] lg:pt-[84px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
