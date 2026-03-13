import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight, BookOpen, MapPin, Clock, Shield, Target } from 'lucide-react';
import { SEO } from '../components/shared/SEO';
import { fetchLeadPrograms, fetchLeadSection, type EventItem } from '../utils/api';

type LeadHero = {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
  backgroundImage: string;
};

type LeadPillar = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

type LeadProgram = {
  id: string;
  title: string;
  description: string;
  batch?: string;
  status?: string;
  image?: string;
  registrationLink?: string;
};

type LeadEvent = {
  id: string;
  title: string;
  date: string;
  month: string;
  time?: string;
  location?: string;
  type?: string;
  registrationLink?: string;
};

const fallbackHero: LeadHero = {
  badge: 'Learning, Equipping, & Development',
  title: 'L.E.A.D. Center: Memperlengkapi Pelayan, Membangun Tubuh Kristus.',
  subtitle: 'Pusat Pendidikan & Pelatihan Non-Formal STTB',
  description: 'Kami hadir untuk membekali jemaat, profesional, dan pemimpin gereja melalui program yang aplikatif dan relevan.',
  primaryButtonText: 'Lihat Program & Kelas',
  primaryButtonLink: '#program-unggulan',
  secondaryButtonText: 'Tentang LEAD',
  secondaryButtonLink: '#tentang-lead',
  backgroundImage: 'https://images.unsplash.com/photo-1646579886135-068c73800308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
};

const fallbackPillars: LeadPillar[] = [
  { id: 'learning', title: 'Kelas Audit & Kuliah Umum', description: 'Kesempatan belajar langsung dari dosen STTB dengan format yang fleksibel.', icon: 'BookOpen' },
  { id: 'equipping', title: 'Sertifikasi & Pelatihan', description: 'Program khusus untuk memperlengkapi praktisi pelayanan secara terstruktur.', icon: 'Shield' },
  { id: 'development', title: 'Pengembangan Modul', description: 'Layanan konsultasi kurikulum dan materi bagi gereja serta organisasi Kristen.', icon: 'Target' },
];

const fallbackPrograms: LeadProgram[] = [
  {
    id: '1',
    title: 'Vocatio Marketplace Fellow',
    description: 'Program intensif untuk memperlengkapi profesional Kristen di dunia kerja.',
    batch: 'Batch 5 - Buka Pendaftaran',
    status: 'Pendaftaran Dibuka',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    registrationLink: '/admisi',
  },
  {
    id: '2',
    title: 'Perspectives Study Program',
    description: 'Kursus yang membuka wawasan tentang misi global Allah.',
    batch: 'Kelas Reguler 2026',
    status: 'Berjalan',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    registrationLink: '/admisi',
  },
];

const fallbackEvents: LeadEvent[] = [
  {
    id: '1',
    date: '23',
    month: 'FEB',
    title: 'Webinar: Kepemimpinan Kristen di Era AI',
    time: '19:00 - 21:00 WIB',
    location: 'Zoom Online',
    type: 'Webinar',
    registrationLink: '/kontak',
  },
  {
    id: '2',
    date: '05',
    month: 'MAR',
    title: 'Workshop: Modul Sekolah Minggu Interaktif',
    time: '09:00 - 15:00 WIB',
    location: 'Kampus STTB',
    type: 'Workshop',
    registrationLink: '/kontak',
  },
];

const iconMap = {
  BookOpen,
  Shield,
  Target,
};

function mapEventDate(eventDate: string) {
  const parsed = new Date(eventDate);
  if (Number.isNaN(parsed.getTime())) {
    return { date: '--', month: '---' };
  }

  return {
    date: parsed.toLocaleDateString('id-ID', { day: '2-digit' }),
    month: parsed.toLocaleDateString('id-ID', { month: 'short' }).toUpperCase(),
  };
}

export function LeadPage() {
  const [hero, setHero] = useState(fallbackHero);
  const [pillars, setPillars] = useState(fallbackPillars);
  const [programs, setPrograms] = useState(fallbackPrograms);
  const [events, setEvents] = useState(fallbackEvents);

  useEffect(() => {
    let isMounted = true;

    async function loadLeadContent() {
      try {
        const [heroSection, pillarSection, programSection, eventSection] = await Promise.all([
          fetchLeadSection<Partial<LeadHero>>('hero').catch(() => null),
          fetchLeadSection<LeadPillar[]>('pillars').catch(() => null),
          fetchLeadPrograms<LeadProgram>().catch(() => null),
          fetchLeadSection<LeadEvent[] | EventItem[]>('events').catch(() => null),
        ]);

        if (!isMounted) {
          return;
        }

        if (heroSection?.data && typeof heroSection.data === 'object') {
          setHero((previous: LeadHero) => ({ ...previous, ...heroSection.data }));
        }

        if (Array.isArray(pillarSection?.data) && pillarSection.data.length > 0) {
          setPillars(
            pillarSection.data.map((item, index) => ({
              id: item.id || `pillar-${index}`,
              title: item.title,
              description: item.description,
              icon: item.icon || fallbackPillars[index % fallbackPillars.length].icon,
            }))
          );
        }

        if (Array.isArray(programSection) && programSection.length > 0) {
          setPrograms(programSection);
        }

        if (Array.isArray(eventSection?.data) && eventSection.data.length > 0) {
          setEvents(
            eventSection.data.map((item, index) => {
              if ('eventDate' in item) {
                const mappedDate = mapEventDate(String(item.eventDate));
                return {
                  id: item.id,
                  title: item.title,
                  date: mappedDate.date,
                  month: mappedDate.month,
                  time: item.eventTime || '',
                  location: item.location || '',
                  type: item.eventType || item.category || 'Event',
                  registrationLink: item.registrationLink || '/kontak',
                };
              }

              return {
                id: item.id || `event-${index}`,
                title: item.title,
                date: item.date,
                month: item.month,
                time: item.time,
                location: item.location,
                type: item.type,
                registrationLink: item.registrationLink || '/kontak',
              };
            })
          );
        }
      } catch {
        // Keep fallback content when backend records are not available yet.
      }
    }

    void loadLeadContent();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <SEO title="LEAD Center - STTB" description={hero.description} ogImage={hero.backgroundImage} path="/lead" />

      <section className="relative overflow-hidden bg-[#0B1F3B] pb-24 pt-32 lg:pb-32 lg:pt-48">
        <div className="absolute inset-0 z-0">
          <img src={hero.backgroundImage} alt="LEAD Center" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3B] via-[#0B1F3B]/90 to-transparent"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl">
            <div className="mb-6 inline-block rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/20 px-4 py-1.5 text-sm font-semibold text-[#F9D462] backdrop-blur-sm">{hero.badge}</div>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">{hero.title}</h1>
            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">{hero.description}</p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a href={hero.primaryButtonLink} className="group flex items-center justify-center gap-2 rounded-xl bg-[#D4AF37] px-8 py-4 text-center font-bold text-[#0B1F3B] shadow-lg shadow-[#D4AF37]/20 transition-all duration-300 hover:bg-[#B8962A]">
                {hero.primaryButtonText}
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href={hero.secondaryButtonLink} className="flex items-center justify-center rounded-xl border-2 border-white/30 bg-transparent px-8 py-4 text-center font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-white">
                {hero.secondaryButtonText}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="tentang-lead" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-2 font-bold uppercase tracking-wider text-[#C1121F]">Tiga Pilar Utama</h2>
            <h3 className="mb-4 font-serif text-3xl font-bold text-[#0B1F3B] md:text-4xl">Fokus Pelayanan LEAD</h3>
            <p className="text-gray-600">Konten pilar utama LEAD dapat diperbarui langsung dari CMS admin.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {pillars.map((pillar: LeadPillar) => {
              const Icon = iconMap[pillar.icon as keyof typeof iconMap] ?? BookOpen;

              return (
                <div key={pillar.id} className="group relative overflow-hidden rounded-2xl border-b-4 border-transparent bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#D4AF37] hover:shadow-xl">
                  <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F3F7FF] text-[#2E90FF] transition-colors duration-300 group-hover:bg-[#0B1F3B] group-hover:text-white">
                    <Icon size={32} />
                  </div>
                  <h4 className="relative z-10 mb-3 text-2xl font-bold text-[#0B1F3B]">{pillar.title}</h4>
                  <p className="relative z-10 text-gray-600">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="program-unggulan" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="mb-4 font-serif text-3xl font-bold text-[#0B1F3B] md:text-4xl">Program Unggulan Kami</h2>
              <p className="text-gray-600">Program LEAD yang tampil di sini mengikuti data terbaru dari backend.</p>
            </div>
            <Link to="/admisi" className="hidden items-center gap-2 font-semibold text-[#2E90FF] transition-colors hover:text-[#0B1F3B] md:flex">
              Lihat Semua Program <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program: LeadProgram) => (
              <div key={program.id} className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-transform duration-300 hover:-translate-y-1">
                <div className="relative h-56 overflow-hidden">
                  <img src={program.image || fallbackHero.backgroundImage} alt={program.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  {program.status && <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#0B1F3B] shadow-sm backdrop-blur-sm">{program.status}</div>}
                </div>
                <div className="flex flex-grow flex-col p-6">
                  {program.batch && <div className="mb-2 text-sm font-semibold text-[#C1121F]">{program.batch}</div>}
                  <h4 className="mb-3 text-xl font-bold text-[#0B1F3B] transition-colors group-hover:text-[#2E90FF]">{program.title}</h4>
                  <p className="mb-6 flex-grow text-sm text-gray-600">{program.description}</p>
                  <Link to={program.registrationLink || '/admisi'} className="block rounded-xl bg-gray-50 px-4 py-3 text-center font-bold text-[#0B1F3B] transition-colors duration-300 hover:bg-[#0B1F3B] hover:text-white">Daftar Sekarang</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 flex items-center justify-between">
              <h2 className="font-serif text-3xl font-bold text-[#0B1F3B]">Agenda & Kegiatan Mendatang</h2>
              <Link to="/kegiatan" className="flex items-center gap-2 font-semibold text-[#2E90FF] transition-colors hover:text-[#0B1F3B]">Kalender Penuh <ArrowRight size={20} /></Link>
            </div>

            <div className="space-y-4">
              {events.map((event: LeadEvent) => (
                <div key={event.id} className="group flex flex-col items-start gap-6 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:flex-row sm:items-center sm:p-6">
                  <div className="flex h-20 w-20 flex-shrink-0 flex-col items-center justify-center rounded-xl border border-blue-50 bg-[#F3F7FF] transition-colors group-hover:bg-[#0B1F3B]">
                    <span className="mb-1 text-2xl font-bold leading-none text-[#0B1F3B] group-hover:text-white">{event.date}</span>
                    <span className="text-sm font-semibold text-[#2E90FF] group-hover:text-gray-300">{event.month}</span>
                  </div>

                  <div className="flex-grow">
                    <div className="mb-2 flex items-center gap-2">
                      {event.type && <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-gray-600">{event.type}</span>}
                    </div>
                    <h4 className="mb-3 text-lg font-bold text-[#0B1F3B] transition-colors group-hover:text-[#C1121F] sm:text-xl">{event.title}</h4>
                    <div className="flex flex-col gap-3 text-sm text-gray-500 sm:flex-row sm:gap-6">
                      {event.time && <div className="flex items-center gap-2"><Clock size={16} className="text-gray-400" />{event.time}</div>}
                      {event.location && <div className="flex items-center gap-2"><MapPin size={16} className="text-gray-400" />{event.location}</div>}
                    </div>
                  </div>

                  <div className="mt-4 w-full sm:mt-0 sm:w-auto">
                    <Link to={event.registrationLink || '/kontak'} className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-[#0B1F3B] px-6 py-2.5 font-bold text-[#0B1F3B] transition-colors duration-300 hover:bg-[#0B1F3B] hover:text-white sm:w-auto">Ikuti</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
