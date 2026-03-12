import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export function RootLayout() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 page-enter">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}