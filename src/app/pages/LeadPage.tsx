import { Link } from 'react-router';
import { BookOpen, Shield, Target, PlayCircle, MapPin, Clock, ArrowRight, Calendar as CalendarIcon, Users } from 'lucide-react';

export function LeadPage() {
  const programs = [
    {
      id: 1,
      title: "Vocatio Marketplace Fellow",
      description: "Program intensif 6 bulan untuk memperlengkapi profesional dan pengusaha Kristen dalam mengintegrasikan iman di dunia kerja.",
      batch: "Batch 5 - Buka Pendaftaran",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      status: "Pendaftaran Dibuka",
    },
    {
      id: 2,
      title: "Perspectives Study Program",
      description: "Kursus 15 minggu yang membuka wawasan tentang misi global Allah dan bagaimana gereja/individu dapat mengambil peran di dalamnya.",
      batch: "Kelas Reguler 2026",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      status: "Berjalan",
    },
    {
      id: 3,
      title: "Little STEP",
      description: "Sertifikasi Teologi Dasar untuk Jemaat Awam. Memperlengkapi jemaat dengan pemahaman teologi alkitabiah dan aplikatif.",
      batch: "Batch 12 - Kuota Terbatas",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      status: "Pendaftaran Dibuka",
    }
  ];

  const events = [
    {
      id: 1,
      date: "23",
      month: "FEB",
      title: "Webinar: Kepemimpinan Kristen di Era AI",
      time: "19:00 - 21:00 WIB",
      location: "Zoom Online",
      type: "Webinar"
    },
    {
      id: 2,
      date: "05",
      month: "MAR",
      title: "Workshop: Modul Sekolah Minggu Interaktif",
      time: "09:00 - 15:00 WIB",
      location: "Kampus STTB (On-site)",
      type: "Workshop"
    },
    {
      id: 3,
      date: "12",
      month: "MAR",
      title: "Kuliah Umum: Etika Bisnis dalam Perspektif Teologi Reformed",
      time: "18:30 - 20:30 WIB",
      location: "Hybrid (Zoom & Kampus)",
      type: "Kuliah Umum"
    },
    {
      id: 4,
      date: "28",
      month: "APR",
      title: "Pembukaan Kelas Little STEP Batch 13",
      time: "18:00 - 20:00 WIB",
      location: "Kampus STTB",
      type: "Sertifikasi"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0B1F3B]">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1646579886135-068c73800308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920" 
            alt="Professionals Workshop" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3B] via-[#0B1F3B]/90 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#D4AF37]/20 border border-[#D4AF37]/30 backdrop-blur-sm px-4 py-1.5 rounded-full text-[#F9D462] font-semibold text-sm mb-6">
              Learning, Equipping, & Development
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-6 leading-tight">
              L.E.A.D. Center:<br />
              <span className="text-[#D4AF37]">Memperlengkapi Pelayan,</span><br />
              Membangun Tubuh Kristus.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Pusat Pendidikan & Pelatihan Non-Formal STT Bandung. Kami hadir untuk membekali jemaat, profesional, dan pemimpin gereja melalui program yang aplikatif dan relevan.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#program-unggulan" 
                className="bg-[#D4AF37] hover:bg-[#B8962A] text-[#0B1F3B] font-bold px-8 py-4 rounded-xl shadow-lg shadow-[#D4AF37]/20 transition-all duration-300 text-center flex items-center justify-center gap-2 group"
              >
                Lihat Program & Kelas
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#tentang-lead" 
                className="bg-transparent border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 text-center flex items-center justify-center backdrop-blur-sm"
              >
                Tentang LEAD
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Pillars Section */}
      <section id="tentang-lead" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-[#C1121F] font-bold tracking-wider uppercase mb-2">Tiga Pilar Utama</h2>
            <h3 className="text-3xl md:text-4xl font-bold font-serif text-[#0B1F3B] mb-4">Fokus Pelayanan LEAD</h3>
            <p className="text-gray-600">
              LEAD Center bergerak melalui tiga pilar utama untuk menjawab kebutuhan pembinaan dan pengembangan kompetensi pelayanan di gereja dan marketplace.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Learning */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-[#D4AF37] group relative overflow-hidden">
              <div className="w-16 h-16 bg-[#F3F7FF] text-[#2E90FF] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#2E90FF] group-hover:text-white transition-colors duration-300 relative z-10">
                <BookOpen size={32} />
              </div>
              <h4 className="text-2xl font-bold text-[#0B1F3B] mb-3 relative z-10">Kelas Audit & Kuliah Umum</h4>
              <p className="text-gray-600 mb-6 relative z-10">
                Ikuti kelas teologi formal secara sit-in sesuai kebutuhan Anda tanpa perlu mengambil program gelar penuh. Kesempatan belajar langsung dari dosen STTB.
              </p>
              <div className="absolute right-0 bottom-0 opacity-5 w-48 h-48 -mr-10 -mb-10 transform rotate-12 transition-transform duration-500 group-hover:scale-110">
                <BookOpen size={200} />
              </div>
            </div>

            {/* Card 2: Equipping */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-[#D4AF37] group relative overflow-hidden">
              <div className="w-16 h-16 bg-red-50 text-[#C1121F] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#C1121F] group-hover:text-white transition-colors duration-300 relative z-10">
                <Shield size={32} />
              </div>
              <h4 className="text-2xl font-bold text-[#0B1F3B] mb-3 relative z-10">Sertifikasi & Pelatihan</h4>
              <p className="text-gray-600 mb-6 relative z-10">
                Program khusus dan sertifikasi yang dirancang untuk memperlengkapi praktisi pelayanan. Termasuk Perspectives Study Program dan Little STEP.
              </p>
              <div className="absolute right-0 bottom-0 opacity-5 w-48 h-48 -mr-10 -mb-10 transform rotate-12 transition-transform duration-500 group-hover:scale-110">
                <Shield size={200} />
              </div>
            </div>

            {/* Card 3: Development */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-[#D4AF37] group relative overflow-hidden">
              <div className="w-16 h-16 bg-amber-50 text-[#D4AF37] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] group-hover:text-white transition-colors duration-300 relative z-10">
                <Target size={32} />
              </div>
              <h4 className="text-2xl font-bold text-[#0B1F3B] mb-3 relative z-10">Pengembangan Modul</h4>
              <p className="text-gray-600 mb-6 relative z-10">
                Layanan konsultasi dan pembuatan bahan ajar, kurikulum, serta modul untuk kebutuhan spesifik pelayanan gerejawi dan organisasi Kristen.
              </p>
              <div className="absolute right-0 bottom-0 opacity-5 w-48 h-48 -mr-10 -mb-10 transform rotate-12 transition-transform duration-500 group-hover:scale-110">
                <Target size={200} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs Carousel (Simulated Grid for React Router simplicity) */}
      <section id="program-unggulan" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0B1F3B] mb-4">Program Unggulan Kami</h2>
              <p className="text-gray-600">
                Pilih program yang paling sesuai dengan panggilan dan area pelayanan Anda. Didesain secara spesifik, terstruktur, dan aplikatif.
              </p>
            </div>
            <Link to="/admisi" className="hidden md:flex items-center gap-2 text-[#2E90FF] font-semibold hover:text-[#0B1F3B] transition-colors">
              Lihat Semua Program <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div key={program.id} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col group hover:-translate-y-1 transition-transform duration-300">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#0B1F3B] shadow-sm">
                    {program.status}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-sm font-semibold text-[#C1121F] mb-2">{program.batch}</div>
                  <h4 className="text-xl font-bold text-[#0B1F3B] mb-3 leading-tight group-hover:text-[#2E90FF] transition-colors">{program.title}</h4>
                  <p className="text-gray-600 text-sm mb-6 flex-grow">{program.description}</p>
                  
                  <Link 
                    to="/admisi" 
                    className="block w-full py-3 px-4 bg-gray-50 hover:bg-[#0B1F3B] text-[#0B1F3B] hover:text-white text-center font-bold rounded-xl transition-colors duration-300"
                  >
                    Daftar Sekarang
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 md:hidden text-center">
            <Link to="/admisi" className="inline-flex items-center gap-2 text-[#2E90FF] font-semibold hover:text-[#0B1F3B] transition-colors">
              Lihat Semua Program <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Event Calendar - Modern UI Upgrade */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-bold font-serif text-[#0B1F3B]">Agenda & Kegiatan Mendatang</h2>
              <Link to="/kegiatan" className="flex items-center gap-2 text-[#2E90FF] font-semibold hover:text-[#0B1F3B] transition-colors">
                Kalender Penuh <ArrowRight size={20} />
              </Link>
            </div>

            <div className="space-y-4">
              {events.map((event) => (
                <div key={event.id} className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-6 items-start sm:items-center group">
                  {/* Date Square */}
                  <div className="flex-shrink-0 bg-[#F3F7FF] group-hover:bg-[#0B1F3B] transition-colors w-20 h-20 rounded-xl flex flex-col items-center justify-center border border-blue-50">
                    <span className="text-2xl font-bold text-[#0B1F3B] group-hover:text-white leading-none mb-1">{event.date}</span>
                    <span className="text-sm font-semibold text-[#2E90FF] group-hover:text-gray-300">{event.month}</span>
                  </div>
                  
                  {/* Event Details */}
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold px-2.5 py-1 bg-gray-100 text-gray-600 rounded-md uppercase tracking-wider">
                        {event.type}
                      </span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-[#0B1F3B] mb-3 group-hover:text-[#C1121F] transition-colors">
                      {event.title}
                    </h4>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-gray-400" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-gray-400" />
                        {event.location}
                      </div>
                    </div>
                  </div>
                  
                  {/* Action */}
                  <div className="w-full sm:w-auto mt-4 sm:mt-0">
                    <Link 
                      to="/kontak" 
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border-2 border-[#0B1F3B] hover:bg-[#0B1F3B] hover:text-white text-[#0B1F3B] font-bold px-6 py-2.5 rounded-xl transition-colors duration-300"
                    >
                      Ikuti
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media & Resources Section */}
      <section className="py-24 bg-[#0B1F3B] relative overflow-hidden text-white">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2E90FF]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#C1121F]/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Video Player UI Container */}
            <div className="w-full lg:w-3/5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer aspect-video border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1557734864-c78b6dfef1b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
                  alt="City TransForMission Video Highlight" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-[#D4AF37]/90 transition-all duration-300">
                    <PlayCircle size={40} className="text-white ml-2" />
                  </div>
                </div>
                
                {/* Duration/Label */}
                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded text-sm font-medium">
                  12:45
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="w-full lg:w-2/5">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-[#D4AF37] font-semibold text-sm mb-6 border border-white/5">
                <PlayCircle size={16} /> Galeri & Media
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 leading-tight">
                Sumber Daya & Inspirasi <br/>dari LEAD Center
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Akses berbagai dokumentasi, cuplikan materi, dan seri pengajaran singkat dari program-program unggulan kami. Saksikan bagaimana "City TransForMission" memberikan dampak bagi para profesional.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
                  Seri Video Pembinaan Singkat
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
                  Podcast Teologi Marketplace
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
                  Dokumentasi Pelatihan & Sertifikasi
                </li>
              </ul>

              <Link to="/berita" className="inline-flex items-center gap-2 text-white font-bold bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-xl transition-colors backdrop-blur-sm">
                Lihat Lebih Banyak <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-[#C1121F]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-6">Siap Melangkah Bersama Kami?</h2>
          <p className="text-red-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Daftarkan diri Anda atau gereja Anda dalam program pelatihan LEAD Center dan jadilah agen perubahan yang berdampak nyata.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/admisi" className="bg-white text-[#C1121F] font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
              Mulai Pendaftaran
            </Link>
            <Link to="/kontak" className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              Hubungi Tim Kami
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
