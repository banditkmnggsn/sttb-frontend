import { useState } from 'react';
import { Calendar, MapPin, Clock, ArrowRight, Download, Filter, Search } from 'lucide-react';
import { Link } from 'react-router';

export function KegiatanPage() {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const categories = ['Semua', 'Seminar', 'Admisi', 'Chapel', 'Kalender Akademik', 'Riset'];

  const featuredEvent = {
    id: 1,
    title: 'Dies Natalis STTB ke-40: Melangkah Maju dalam Transformasi',
    date: '28 Mar 2026',
    time: '08:00 - 15:00 WIB',
    location: 'Auditorium Utama STTB',
    category: 'Akademik',
    image: 'https://images.unsplash.com/photo-1639003150608-18eb58ccb9a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'Bergabunglah dalam perayaan ulang tahun ke-40 STTB dengan rangkaian ibadah syukur, orasi ilmiah, dan peluncuran program unggulan baru.'
  };

  const events = [
    {
      id: 2,
      title: 'Seminar Teologi Publik: Relevansi Gereja di Era Digital',
      date: '05 Apr 2026',
      time: '10:00 - 13:00 WIB',
      location: 'Ruang Seminar A',
      category: 'Seminar',
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    {
      id: 3,
      title: 'Ibadah Chapel Gabungan & Perjamuan Kudus',
      date: '10 Apr 2026',
      time: '09:00 - 11:00 WIB',
      location: 'Kapel STTB',
      category: 'Chapel',
      image: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    {
      id: 4,
      title: 'Presentasi Tesis Mahasiswa Magister',
      date: '15 Apr 2026',
      time: '08:00 - 16:00 WIB',
      location: 'Ruang Ujian',
      category: 'Riset',
      image: 'https://images.unsplash.com/photo-1646579886135-068c73800308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    {
      id: 5,
      title: 'Open House & Pendaftaran Mahasiswa Baru',
      date: '20 Apr 2026',
      time: '08:30 - 14:00 WIB',
      location: 'Lobby Utama',
      category: 'Admisi',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    }
  ];

  const highlights = [
    { title: 'Batas Akhir Pendaftaran Sidang Tesis', date: '25 Maret 2026' },
    { title: 'Pekan Ujian Tengah Semester (UTS)', date: '01 - 07 April 2026' },
    { title: 'Libur Nasional Paskah', date: '03 April 2026' }
  ];

  const filteredEvents = activeCategory === 'Semua' 
    ? events 
    : events.filter(e => e.category === activeCategory || (activeCategory === 'Kalender Akademik' && e.category === 'Akademik'));

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <section className="relative bg-[#0B1F3B] text-white pt-24 pb-32 overflow-hidden">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute left-0 top-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="rgba(255,255,255,0.1)" />
            <path d="M0 50 C 50 100 80 100 100 0 Z" fill="rgba(255,255,255,0.05)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">Kegiatan & Agenda Kampus</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Tetap terhubung dengan seminar terbaru, lokakarya, dan berbagai kegiatan rohani serta akademik di STTB.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 -mt-16 relative z-20 pb-20">
        
        {/* Filtering System */}
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-10 flex flex-col md:flex-row items-center justify-between gap-4 border border-gray-100">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
            <Filter size={20} className="text-gray-400 flex-shrink-0 mr-2" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-[#C1121F] text-white shadow-md' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-64 flex-shrink-0">
            <input 
              type="text" 
              placeholder="Cari kegiatan..." 
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:border-[#2E90FF] focus:ring-1 focus:ring-[#2E90FF] text-sm"
            />
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Event Grid (Bento Layout) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Featured Event Card */}
            {(activeCategory === 'Semua' || activeCategory === featuredEvent.category || (activeCategory === 'Kalender Akademik' && featuredEvent.category === 'Akademik')) && (
              <div className="bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img 
                    src={featuredEvent.image} 
                    alt={featuredEvent.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-[#D4AF37] text-[#0B1F3B] text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                      Unggulan
                    </span>
                    <span className="bg-white/90 backdrop-blur text-[#0B1F3B] text-xs font-bold px-3 py-1.5 rounded-full">
                      {featuredEvent.category}
                    </span>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 font-serif leading-tight">{featuredEvent.title}</h2>
                    <p className="text-gray-200 text-sm md:text-base line-clamp-2">{featuredEvent.description}</p>
                  </div>
                </div>
                
                <div className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex flex-wrap items-center gap-6 w-full md:w-auto text-gray-600">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#2E90FF]">
                        <Calendar size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-semibold uppercase">Tanggal</p>
                        <p className="font-semibold text-[#0B1F3B]">{featuredEvent.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-[#C1121F]">
                        <Clock size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-semibold uppercase">Waktu</p>
                        <p className="font-semibold text-[#0B1F3B]">{featuredEvent.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-semibold uppercase">Lokasi</p>
                        <p className="font-semibold text-[#0B1F3B]">{featuredEvent.location}</p>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full md:w-auto bg-[#0B1F3B] hover:bg-[#1a365d] text-white px-8 py-3 rounded-full font-bold transition-colors shadow-md flex items-center justify-center gap-2">
                    Daftar <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            )}

            {/* Standard Event Cards Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 overflow-hidden group flex flex-col h-full transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/90 backdrop-blur text-[#0B1F3B] text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                        {event.category}
                      </span>
                    </div>
                    {/* Date Badge */}
                    <div className="absolute bottom-0 right-4 translate-y-1/2 bg-[#C1121F] text-white px-4 py-2 rounded-xl shadow-lg text-center min-w-[64px]">
                      <p className="text-xl font-bold leading-none">{event.date.split(' ')[0]}</p>
                      <p className="text-[10px] font-semibold uppercase tracking-wider">{event.date.split(' ')[1]}</p>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col pt-8">
                    <h3 className="text-lg font-bold text-[#0B1F3B] mb-4 font-serif leading-snug group-hover:text-[#2E90FF] transition-colors">
                      {event.title}
                    </h3>
                    
                    <div className="space-y-2 mt-auto text-sm text-gray-600">
                      <div className="flex items-center gap-3">
                        <Clock size={16} className="text-[#C1121F]" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin size={16} className="text-[#0B1F3B]" />
                        <span className="truncate">{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <div className="bg-white rounded-2xl p-12 text-center border border-gray-100">
                <Calendar size={48} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-bold text-[#0B1F3B] mb-2">Tidak Ada Kegiatan</h3>
                <p className="text-gray-500">Belum ada kegiatan terjadwal untuk kategori ini.</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Monthly Highlights Widget */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-[#0B1F3B] mb-6 font-serif flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#C1121F] rounded-full inline-block"></span>
                Sorotan Bulan Ini
              </h3>
              
              <div className="space-y-5">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start pb-5 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className="bg-blue-50 text-[#2E90FF] p-2 rounded-lg flex-shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0B1F3B] text-sm leading-tight mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-500 font-medium">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Info/CTA */}
            <div className="bg-[#0B1F3B] rounded-2xl shadow-lg p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C1121F] opacity-20 rounded-bl-full"></div>
              <h3 className="text-xl font-bold mb-3 font-serif">Kalender Akademik</h3>
              <p className="text-sm text-gray-300 mb-6 relative z-10">Unduh kalender akademik lengkap tahun ajaran 2025/2026 dalam format PDF.</p>
              
              <button className="w-full bg-[#C1121F] hover:bg-[#9A0E19] text-white px-4 py-3 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2 shadow-md relative z-10">
                <Download size={18} />
                Unduh PDF
              </button>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h4 className="font-bold text-[#0B1F3B] mb-2 text-sm">Butuh Bantuan?</h4>
              <p className="text-xs text-gray-600 mb-4">Punya pertanyaan seputar jadwal pendaftaran atau kegiatan kampus?</p>
              <Link to="/kontak" className="text-sm font-bold text-[#2E90FF] hover:text-[#0B1F3B] flex items-center gap-1 transition-colors">
                Hubungi Kami <ArrowRight size={14} />
              </Link>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}