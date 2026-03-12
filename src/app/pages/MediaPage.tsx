import { useState } from 'react';
import { Play, Clock, User, Calendar, Search, ChevronRight, Tag } from 'lucide-react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function MediaPage() {
  const [activeTab, setActiveTab] = useState('Semua');

  const tabs = ['Semua', 'Video', 'Artikel', 'Podcast', 'Buletin'];
  
  const topics = [
    'Apologetika', 'Spiritualitas', 'Kepemimpinan', 'Pemuridan', 'Pendidikan Teologi', 'Misi Global', 'Etika Kristen'
  ];

  const videos = [
    {
      id: 1,
      title: 'City TransForMission: Mengubah Kota Lewat Injil',
      duration: '45:20',
      date: '10 Mar 2026',
      image: 'https://images.unsplash.com/photo-1748904013387-3b34401359a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    {
      id: 2,
      title: 'Mendalami Kristologi di Era Modern',
      duration: '58:15',
      date: '28 Feb 2026',
      image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    {
      id: 3,
      title: 'Workshop: Teologi Praktis untuk Awam',
      duration: '1:12:00',
      date: '15 Feb 2026',
      image: 'https://images.unsplash.com/photo-1757390111521-35bf9f936185?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    {
      id: 4,
      title: 'Kuliah Umum Apologetika',
      duration: '40:10',
      date: '02 Feb 2026',
      image: 'https://images.unsplash.com/photo-1553729784-e91953dec042?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    }
  ];

  const articles = [
    {
      id: 1,
      title: 'Pentingnya Formasi Spiritual dalam Kepemimpinan',
      author: 'Pdt. Dr. John Doe',
      date: '05 Mar 2026',
      tags: ['Spiritualitas', 'Kepemimpinan'],
      type: 'Artikel',
      image: 'https://images.unsplash.com/photo-1553729784-e91953dec042?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    {
      id: 2,
      title: 'STTB Podcast: Episode 24 - Pemuridan di Kampus',
      author: 'Tim Media STTB',
      date: '01 Mar 2026',
      tags: ['Pemuridan', 'Podcast'],
      type: 'Podcast',
      image: 'https://images.unsplash.com/photo-1619792597637-2604bf70ee00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    {
      id: 3,
      title: 'Buletin Berita Teologi Edisi Maret 2026',
      author: 'Redaksi STTB',
      date: '01 Mar 2026',
      tags: ['Pendidikan Teologi', 'Buletin'],
      type: 'Buletin',
      image: 'https://images.unsplash.com/photo-1757390111521-35bf9f936185?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    {
      id: 4,
      title: 'Merespon Tantangan Etika Bio-Teknologi',
      author: 'Dr. Jane Smith',
      date: '20 Feb 2026',
      tags: ['Etika Kristen', 'Artikel'],
      type: 'Artikel',
      image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    {
      id: 5,
      title: 'Misi Lintas Budaya di Abad 21',
      author: 'Pdt. Michael Chen',
      date: '12 Feb 2026',
      tags: ['Misi Global', 'Artikel'],
      type: 'Artikel',
      image: 'https://images.unsplash.com/photo-1748904013387-3b34401359a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    }
  ];

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2.5 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1.2 }
      }
    ]
  };

  return (
    <div className="bg-white min-h-screen font-sans flex flex-col pt-0">
      {/* 1. Header Search Bar Overlay / Hero (since real Header is in RootLayout) */}
      
      {/* 2. Hero Section (Featured Media) */}
      <section className="relative w-full h-[60vh] md:h-[70vh] bg-[#002147] overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1748904013387-3b34401359a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920" 
            alt="Featured Media" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#002147] via-[#002147]/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#002147]/90 via-[#002147]/40 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24">
          <div className="max-w-3xl">
            <span className="inline-block bg-[#D4AF37] text-[#002147] text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
              Sorotan
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              City TransForMission
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl line-clamp-3">
              Sebuah dokumenter tentang bagaimana gereja-gereja lokal bekerja sama untuk membawa dampak transformasi yang nyata di tengah hiruk pikuk kehidupan kota metropolitan.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-[#D4AF37] hover:bg-[#C19B2E] text-[#002147] font-bold py-3 px-8 rounded-lg flex items-center gap-2 transition-colors text-lg">
                <Play fill="currentColor" size={20} />
                Tonton Sekarang
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold py-3 px-8 rounded-lg backdrop-blur-sm transition-colors text-lg">
                Simpan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Media Format Tabs (Sticky Filter Bar) & Search */}
      <div className="sticky top-[72px] lg:top-[124px] z-30 bg-[#002147] border-b border-white/10 shadow-lg shadow-[#002147]/20">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-full whitespace-nowrap text-sm font-semibold transition-all ${
                    activeTab === tab 
                      ? 'bg-white text-[#002147]' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-64 lg:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Cari media..." 
                className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-400 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 4. Trending / Latest Videos */}
      {(activeTab === 'Semua' || activeTab === 'Video') && (
        <section className="bg-[#00152D] py-16 text-white">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#D4AF37] rounded-full inline-block"></span>
              Video Terbaru
            </h2>
            
            <div className="relative -mx-4 px-4">
              <Slider {...sliderSettings}>
                {videos.map(video => (
                  <div key={video.id} className="px-2 outline-none">
                    <div className="group cursor-pointer">
                      <div className="relative aspect-video rounded-xl overflow-hidden mb-3 bg-gray-800">
                        <img 
                          src={video.image} 
                          alt={video.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-[#D4AF37] transition-all duration-300">
                            <Play fill="currentColor" size={24} className="text-white group-hover:text-[#002147] ml-1" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-medium px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <h3 className="font-semibold text-white group-hover:text-[#D4AF37] transition-colors line-clamp-2 leading-tight mb-1">
                        {video.title}
                      </h3>
                      <div className="flex items-center text-gray-400 text-xs gap-1">
                        <Clock size={12} />
                        <span>{video.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>
      )}

      {/* 5. Resource Library (Grid View) */}
      <section className="bg-[#F8F9FA] py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Main Content Area */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-[#002147] mb-8 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#C1121F] rounded-full inline-block"></span>
                Artikel & Publikasi
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {articles.filter(a => activeTab === 'Semua' || a.type === activeTab).map(article => (
                  <div key={article.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex gap-4 hover:shadow-md transition-shadow cursor-pointer group">
                    <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-gray-100">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-center min-w-0">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {article.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-[#C1121F] bg-[#C1121F]/10 px-2 py-0.5 rounded whitespace-nowrap">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="font-bold text-[#002147] group-hover:text-[#2E90FF] transition-colors mb-2 line-clamp-2 leading-snug">
                        {article.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1"><User size={12} /> {article.author}</span>
                        <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex justify-center">
                <button className="text-[#0B1F3B] font-semibold hover:text-[#C1121F] flex items-center gap-1 border-b border-transparent hover:border-[#C1121F] transition-all">
                  Lihat Semua Artikel <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* 6. Topic Exploration (Sidebar/Cloud) */}
            <div className="w-full lg:w-80 shrink-0">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-[200px]">
                <h3 className="text-lg font-bold text-[#002147] mb-4 flex items-center gap-2">
                  <Tag size={18} className="text-[#D4AF37]" />
                  Jelajahi Topik
                </h3>
                <div className="flex flex-wrap gap-2">
                  {topics.map(topic => (
                    <button 
                      key={topic}
                      className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-gray-600 rounded-full text-sm font-medium hover:bg-[#002147] hover:text-white hover:border-[#002147] transition-colors"
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
