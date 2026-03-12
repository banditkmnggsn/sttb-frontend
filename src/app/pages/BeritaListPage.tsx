import { useState } from 'react';
import { Search, ChevronLeft, ChevronRight, ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router';

export function BeritaListPage() {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const categories = ['Semua', 'Akademik', 'Institusi', 'Kemahasiswaan', 'Kegiatan'];

  const featuredNews = {
    id: 1,
    title: 'Kunjungan Scholar Leaders ke Kampus STTB: Membangun Kemitraan Strategis',
    excerpt: 'Perwakilan Scholar Leaders Internasional mengunjungi Sekolah Tinggi Teologi Bandung untuk membahas potensi kerjasama dalam pengembangan kapasitas dosen dan penelitian teologi di Asia Tenggara.',
    date: '24 Feb 2026',
    category: 'Institusi',
    image: 'https://images.unsplash.com/photo-1750629231282-5180e8d5201e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    slug: 'kunjungan-scholar-leaders-sttb'
  };

  const newsItems = [
    {
      id: 2,
      title: 'Peresmian Perpustakaan Digital Baru STTB',
      excerpt: 'Fasilitas perpustakaan digital resmi dibuka, memberikan akses ke lebih dari 50.000 jurnal teologi internasional bagi mahasiswa.',
      date: '18 Feb 2026',
      category: 'Akademik',
      image: 'https://images.unsplash.com/photo-1568667256531-7d5ac92eaa7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      slug: 'peresmian-perpustakaan-digital'
    },
    {
      id: 3,
      title: 'Pelantikan Badan Eksekutif Mahasiswa Periode 2026-2027',
      excerpt: 'Acara pelantikan pengurus BEM baru berlangsung khidmat di Kapel STTB, dipimpin langsung oleh Ketua STTB.',
      date: '12 Feb 2026',
      category: 'Kemahasiswaan',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      slug: 'pelantikan-bem-2026'
    },
    {
      id: 4,
      title: 'Seminar Nasional: Teologi Publik di Era Digital',
      excerpt: 'Lebih dari 300 peserta hadir dalam seminar nasional yang membahas peran gereja dan teolog dalam merespons tantangan era digital.',
      date: '05 Feb 2026',
      category: 'Kegiatan',
      image: 'https://images.unsplash.com/photo-1594750852829-7b6e81f42ba1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      slug: 'seminar-nasional-teologi-publik'
    },
    {
      id: 5,
      title: 'Prestasi Mahasiswa STTB di Simposium Teologi Asia',
      excerpt: 'Tiga mahasiswa program Magister STTB berhasil mempresentasikan paper terbaik mereka di Simposium Teologi Asia di Singapura.',
      date: '28 Jan 2026',
      category: 'Akademik',
      image: 'https://images.unsplash.com/photo-1532294220147-279399e4e00f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      slug: 'prestasi-mahasiswa-simposium-asia'
    },
    {
      id: 6,
      title: 'STTB Peroleh Akreditasi A dari BAN-PT',
      excerpt: 'Setelah proses asesmen lapangan, STTB resmi mempertahankan status Akreditasi A dari Badan Akreditasi Nasional Perguruan Tinggi.',
      date: '20 Jan 2026',
      category: 'Institusi',
      image: 'https://images.unsplash.com/photo-1750629231282-5180e8d5201e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      slug: 'akreditasi-a-ban-pt'
    },
    {
      id: 7,
      title: 'Retreat Awal Tahun Seluruh Staf dan Dosen',
      excerpt: 'Rangkaian kegiatan retreat awal tahun untuk mempererat persekutuan dan menyelaraskan visi pelayanan di tahun 2026.',
      date: '10 Jan 2026',
      category: 'Kegiatan',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      slug: 'retreat-staf-dosen-2026'
    }
  ];

  const filteredNews = activeCategory === 'Semua' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans">
      {/* Hero Header Component */}
      <section className="bg-[#0B1F3B] text-white pt-24 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 mt-8">Berita & Dokumentasi STTB</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Pusat informasi resmi, kabar terkini, dan dokumentasi kegiatan civitas akademika Sekolah Tinggi Teologi Bandung.
          </p>
        </div>
      </section>

      {/* Featured News Hero Card */}
      <section className="container mx-auto px-4 -mt-6 relative z-10 mb-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden group">
          <div className="grid lg:grid-cols-2">
            <div className="relative h-64 lg:h-[450px] overflow-hidden">
              <img 
                src={featuredNews.image} 
                alt={featuredNews.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center bg-white">
              <div className="mb-4 flex items-center gap-3 text-sm font-semibold text-gray-500">
                <span className="text-[#C1121F] bg-red-50 px-3 py-1 rounded-full">{featuredNews.category}</span>
                <span>•</span>
                <span>{featuredNews.date}</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold font-serif text-[#0B1F3B] mb-6 leading-tight group-hover:text-[#2E90FF] transition-colors">
                <Link to={`/berita/${featuredNews.slug}`}>{featuredNews.title}</Link>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {featuredNews.excerpt}
              </p>
              <div>
                <Link 
                  to={`/berita/${featuredNews.slug}`}
                  className="inline-flex items-center gap-2 bg-[#0B1F3B] hover:bg-[#2E90FF] text-white px-8 py-3.5 rounded-full font-bold transition-colors shadow-md"
                >
                  Baca Selengkapnya <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Filtering System */}
      <section className="container mx-auto px-4 mb-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          
          {/* Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-[#0B1F3B] text-white shadow-md' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-80">
            <input 
              type="text" 
              placeholder="Cari berita..." 
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-sm transition-all"
            />
            <Search size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

        </div>
      </section>

      {/* News Feed Grid */}
      <section className="container mx-auto px-4 mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item) => (
            <article key={item.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 overflow-hidden flex flex-col group transition-all duration-300">
              <Link to={`/berita/${item.slug}`} className="block relative h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-4 tracking-wide uppercase">
                  <span className="text-[#C1121F]">{item.category}</span>
                  <span>|</span>
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-bold font-serif text-[#0B1F3B] mb-3 leading-snug group-hover:text-[#2E90FF] transition-colors line-clamp-2">
                  <Link to={`/berita/${item.slug}`}>{item.title}</Link>
                </h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-2 flex-grow">
                  {item.excerpt}
                </p>
                <Link 
                  to={`/berita/${item.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#D4AF37] hover:text-[#0B1F3B] transition-colors mt-auto"
                >
                  Read more <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
            <p className="text-xl text-gray-500 font-serif">Tidak ada berita ditemukan di kategori ini.</p>
          </div>
        )}

        {/* Minimalist Pagination */}
        {filteredNews.length > 0 && (
          <div className="flex items-center justify-center gap-2 mt-16">
            <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center bg-[#0B1F3B] text-white font-semibold shadow-md">1</button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 font-semibold transition-colors">2</button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 font-semibold transition-colors">3</button>
            <span className="text-gray-400 px-1">...</span>
            <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </section>

      {/* Newsletter Subscription Banner */}
      <section className="bg-[#0B1F3B] py-20 border-t-4 border-[#C1121F]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 text-center">
            <Mail size={40} className="mx-auto text-[#D4AF37] mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-4">Berlangganan Newsletter STTB</h2>
            <p className="text-gray-300 mb-10 max-w-xl mx-auto">
              Dapatkan pembaruan terkini seputar berita kampus, artikel teologi, dan jadwal kegiatan langsung di kotak masuk email Anda.
            </p>
            
            <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="text" 
                placeholder="Nama Lengkap" 
                className="flex-1 px-5 py-4 rounded-xl bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                required
              />
              <input 
                type="email" 
                placeholder="Alamat Email" 
                className="flex-1 px-5 py-4 rounded-xl bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                required
              />
              <button 
                type="submit"
                className="bg-[#D4AF37] hover:bg-[#b5952f] text-[#0B1F3B] px-8 py-4 rounded-xl font-bold transition-colors whitespace-nowrap shadow-lg"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-6">
              Kami menjaga privasi Anda. Tidak ada spam.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}