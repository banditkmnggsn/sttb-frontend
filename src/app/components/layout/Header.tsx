import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, ChevronDown, Search } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProgramOpen, setIsProgramOpen] = useState(false);
  const [isTentangOpen, setIsTentangOpen] = useState(false);
  const [isKeuanganOpen, setIsKeuanganOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Close menus on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }, [location.pathname]);

  const programs = [
    { name: 'Sarjana Teologi', path: '/program/sarjana-teologi' },
    { name: 'Sarjana Pendidikan Kristen', path: '/program/sarjana-pendidikan-kristen' },
    { name: 'Magister Teologi Pelayanan Pastoral', path: '/program/magister-teologi-pastoral' },
    { name: 'Magister Teologi Transformasi Budaya & Masyarakat', path: '/program/magister-teologi-transformasi' },
    { name: 'Magister Pendidikan Kristen', path: '/program/magister-pendidikan-kristen' },
    { name: 'Magister Ministri Marketplace', path: '/program/magister-ministri-marketplace' },
    { name: 'Magister Ministri Kepemimpinan Pastoral', path: '/program/magister-kepemimpinan-pastoral' },
    { name: 'Magister Ministri Teologi Pelayanan Gerejawi', path: '/program/magister-teologi-pelayanan' },
  ];

  const tentangKami = [
    { name: 'Sejarah', path: '/tentang/sejarah' },
    { name: 'Visi & Misi', path: '/tentang/visi-misi' },
    { name: 'Mars STTB', path: '/tentang/mars' },
    { name: 'Pengakuan Iman', path: '/tentang/pengakuan-iman' },
    { name: 'Dewan Dosen', path: '/tentang/dewan-dosen' },
    { name: 'Yayasan', path: '/tentang/yayasan' },
  ];

  const keuangan = [
    { name: 'Biaya Studi', path: '/keuangan/biaya-studi' },
    { name: 'Beasiswa', path: '/keuangan/beasiswa' },
    { name: 'Dukung STTB', path: '/keuangan/dukung-sttb' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top bar */}
      <div className="hidden lg:block bg-[#0B1F3B] text-white py-2">
        <div className="container mx-auto px-4 flex justify-end items-center gap-6 text-sm">
          <Link to="/kegiatan" className="hover:text-[#2E90FF] transition">Kegiatan</Link>
          <Link to="/perpustakaan" className="hover:text-[#2E90FF] transition">Perpustakaan</Link>
          <Link to="/lead" className="hover:text-[#2E90FF] transition">LEAD</Link>
          <Link to="/media" className="hover:text-[#2E90FF] transition">Media</Link>
          <Link to="/admisi" className="hover:text-[#2E90FF] transition">Pendaftaran Online</Link>
          <Link to="/admin/login" className="hover:text-[#2E90FF] transition">Login</Link>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 lg:gap-4 group">
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-[#C1121F] rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg lg:text-xl">STTB</span>
              </div>
              <div className="text-[#0B1F3B]">
                <h1 className="font-bold text-[13px] lg:text-lg leading-tight tracking-wide">SEKOLAH TINGGI</h1>
                <h1 className="font-bold text-[13px] lg:text-lg leading-tight tracking-wide">TEOLOGI BANDUNG</h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
              {/* Program Studi Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsProgramOpen(true)}
                onMouseLeave={() => setIsProgramOpen(false)}
              >
                <button className="nav-link text-[#0B1F3B] flex items-center gap-1.5 font-semibold text-sm xl:text-[15px] hover:text-[#C1121F] transition-colors">
                  <div className="flex flex-col items-start leading-[1.2] text-left">
                    <span>Program</span>
                    <span>Studi</span>
                  </div>
                  <ChevronDown size={16} className="text-[#0B1F3B]" />
                </button>
                {isProgramOpen && (
                  <div className="dropdown-menu absolute top-full left-0 mt-2 w-80 bg-white shadow-xl rounded-lg py-2 border border-gray-200">
                    {programs.map((program) => (
                      <Link
                        key={program.path}
                        to={program.path}
                        className="block px-4 py-3 text-[#0B1F3B] hover:bg-[#F3F7FF] hover:text-[#C1121F] transition-colors duration-200 text-sm"
                      >
                        {program.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Tentang Kami Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsTentangOpen(true)}
                onMouseLeave={() => setIsTentangOpen(false)}
              >
                <button className="nav-link text-[#0B1F3B] flex items-center gap-1.5 font-semibold text-sm xl:text-[15px] hover:text-[#C1121F] transition-colors">
                  <div className="flex flex-col items-start leading-[1.2] text-left">
                    <span>Tentang</span>
                    <span>Kami</span>
                  </div>
                  <ChevronDown size={16} className="text-[#0B1F3B]" />
                </button>
                {isTentangOpen && (
                  <div className="dropdown-menu absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg py-2 border border-gray-200">
                    {tentangKami.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-3 text-[#0B1F3B] hover:bg-[#F3F7FF] hover:text-[#C1121F] transition-colors duration-200 text-sm"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                to="/admisi" 
                className={`nav-link font-semibold text-sm xl:text-[15px] hover:text-[#C1121F] transition-colors ${isActive('/admisi') ? 'text-[#C1121F]' : 'text-[#0B1F3B]'}`}
              >
                Admisi
              </Link>

              {/* Keuangan Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsKeuanganOpen(true)}
                onMouseLeave={() => setIsKeuanganOpen(false)}
              >
                <button className="nav-link text-[#0B1F3B] flex items-center gap-1.5 font-semibold text-sm xl:text-[15px] hover:text-[#C1121F] transition-colors">
                  <div className="flex flex-col items-start leading-[1.2] text-left">
                    <span>Keuangan</span>
                  </div>
                  <ChevronDown size={16} className="text-[#0B1F3B]" />
                </button>
                {isKeuanganOpen && (
                  <div className="dropdown-menu absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-lg py-2 border border-gray-200">
                    {keuangan.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-3 text-[#0B1F3B] hover:bg-[#F3F7FF] hover:text-[#C1121F] transition-colors duration-200 text-sm"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                to="/kehidupan-kampus" 
                className={`nav-link font-semibold text-sm xl:text-[15px] hover:text-[#C1121F] transition-colors flex flex-col items-start leading-[1.2] text-left ${isActive('/kehidupan-kampus') ? 'text-[#C1121F]' : 'text-[#0B1F3B]'}`}
              >
                <span>Kehidupan</span>
                <span>Kampus</span>
              </Link>
              <Link 
                to="/berita" 
                className={`nav-link font-semibold text-sm xl:text-[15px] hover:text-[#C1121F] transition-colors flex flex-col items-start leading-[1.2] text-left ${isActive('/berita') ? 'text-[#C1121F]' : 'text-[#0B1F3B]'}`}
              >
                Berita
              </Link>
              <Link 
                to="/kontak" 
                className={`nav-link font-semibold text-sm xl:text-[15px] hover:text-[#C1121F] transition-colors flex flex-col items-start leading-[1.2] text-left ${isActive('/kontak') ? 'text-[#C1121F]' : 'text-[#0B1F3B]'}`}
              >
                Kontak
              </Link>

              <div className="relative ml-2">
                <button 
                  className="icon-button text-[#0B1F3B] hover:text-[#C1121F] transition-colors"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                >
                  <Search size={22} />
                </button>
                {isSearchOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsSearchOpen(false)}></div>
                    <div className="absolute right-0 top-full mt-4 w-72 bg-white p-3 rounded-xl shadow-2xl z-50 border border-gray-100">
                      <div className="relative">
                        <input 
                          type="text" 
                          placeholder="Cari..." 
                          className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#C1121F] focus:ring-1 focus:ring-[#C1121F] text-sm" 
                          autoFocus 
                        />
                        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>
                  </>
                )}
              </div>

              <Link
                to="/admisi"
                className="btn-primary bg-[#C1121F] hover:bg-[#9A0E19] text-white font-bold px-6 py-2.5 rounded-lg shadow-md flex flex-col items-center leading-[1.2] ml-2 transition-colors text-[13px] xl:text-[15px]"
              >
                <span>Daftar</span>
                <span>Sekarang</span>
              </Link>
            </nav>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center gap-4">
              <button 
                className="text-[#2E90FF]"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search size={24} />
              </button>
              {isSearchOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setIsSearchOpen(false)}></div>
                  <div className="absolute right-4 top-[88px] w-[calc(100%-2rem)] max-w-sm bg-white p-4 rounded-xl shadow-2xl z-50 border border-gray-100">
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Cari..." 
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#C1121F] focus:ring-1 focus:ring-[#C1121F]" 
                        autoFocus 
                      />
                      <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                </>
              )}
              <button 
                className="text-[#2E90FF]"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Full Screen Overlay */}
      <div
        className={`fixed inset-0 top-[88px] lg:hidden bg-white z-40 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          height: 'calc(100vh - 88px)',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        <nav className="container mx-auto px-4 py-6 space-y-1">
          <div className="pt-2">
            <p className="text-sm font-bold text-[#0B1F3B] mb-2 px-4">Program Studi</p>
            <div className="space-y-1">
              {programs.map((program) => (
                <Link
                  key={program.path}
                  to={program.path}
                  onClick={handleLinkClick}
                  className="block text-[#0B1F3B] hover:text-[#C1121F] hover:bg-[#F3F7FF] py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  {program.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4 mt-4">
            <p className="text-sm font-bold text-[#0B1F3B] mb-2 px-4">Tentang Kami</p>
            <div className="space-y-1">
              {tentangKami.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleLinkClick}
                  className="block text-[#0B1F3B] hover:text-[#C1121F] hover:bg-[#F3F7FF] py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <Link 
            to="/admisi" 
            onClick={handleLinkClick}
            className="block text-[#0B1F3B] hover:text-[#C1121F] hover:bg-[#F3F7FF] py-3 px-4 rounded-lg transition-colors duration-200 font-medium"
          >
            Admisi
          </Link>

          <div className="border-t border-gray-200 pt-4 mt-4">
            <p className="text-sm font-bold text-[#0B1F3B] mb-2 px-4">Keuangan</p>
            <div className="space-y-1">
              {keuangan.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleLinkClick}
                  className="block text-[#0B1F3B] hover:text-[#C1121F] hover:bg-[#F3F7FF] py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <Link 
            to="/kehidupan-kampus" 
            onClick={handleLinkClick}
            className="block text-[#0B1F3B] hover:text-[#C1121F] hover:bg-[#F3F7FF] py-3 px-4 rounded-lg transition-colors duration-200 font-medium"
          >
            Kehidupan Kampus
          </Link>
          
          <Link 
            to="/berita" 
            onClick={handleLinkClick}
            className="block text-[#0B1F3B] hover:text-[#C1121F] hover:bg-[#F3F7FF] py-3 px-4 rounded-lg transition-colors duration-200 font-medium"
          >
            Berita
          </Link>
          
          <Link 
            to="/kontak" 
            onClick={handleLinkClick}
            className="block text-[#0B1F3B] hover:text-[#C1121F] hover:bg-[#F3F7FF] py-3 px-4 rounded-lg transition-colors duration-200 font-medium"
          >
            Kontak
          </Link>

          <div className="border-t border-gray-200 pt-4 mt-4">
            <Link 
              to="/kegiatan" 
              onClick={handleLinkClick}
              className="block text-[#0B1F3B] hover:text-[#C1121F] hover:bg-[#F3F7FF] py-3 px-4 rounded-lg transition-colors duration-200 font-medium"
            >
              Kegiatan
            </Link>
            <Link 
              to="/perpustakaan" 
              onClick={handleLinkClick}
              className="block text-[#0B1F3B] hover:text-[#C1121F] hover:bg-[#F3F7FF] py-3 px-4 rounded-lg transition-colors duration-200 font-medium"
            >
              Perpustakaan
            </Link>
            <Link 
              to="/lead" 
              onClick={handleLinkClick}
              className="block text-[#0B1F3B] hover:text-[#C1121F] hover:bg-[#F3F7FF] py-3 px-4 rounded-lg transition-colors duration-200 font-medium"
            >
              LEAD
            </Link>
            <Link 
              to="/media" 
              onClick={handleLinkClick}
              className="block text-[#0B1F3B] hover:text-[#C1121F] hover:bg-[#F3F7FF] py-3 px-4 rounded-lg transition-colors duration-200 font-medium"
            >
              Media
            </Link>
          </div>
          
          <div className="pt-6 pb-8 space-y-3">
            <Link
              to="/admisi"
              onClick={handleLinkClick}
              className="block bg-[#C1121F] hover:bg-[#9A0E19] text-white font-bold px-6 py-4 rounded-lg transition-colors duration-200 text-center shadow-md"
            >
              Daftar Sekarang
            </Link>
            <a
              href="#"
              onClick={handleLinkClick}
              className="block border-2 border-[#0B1F3B] text-[#0B1F3B] hover:bg-gray-50 font-bold px-6 py-3 rounded-lg transition-colors duration-200 text-center"
            >
              Login
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}