import { useEffect, useMemo, useState } from 'react';
import { Calendar, MapPin, Clock, ArrowRight, Filter, Search } from 'lucide-react';
import { Link } from 'react-router';
import { fetchEvents, type EventItem } from '../utils/api';

type UiEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  image: string;
  description: string;
  registrationLink: string;
};

const fallbackImage = 'https://images.unsplash.com/photo-1639003150608-18eb58ccb9a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080';

function mapEvent(item: EventItem): UiEvent {
  const eventDate = new Date(item.eventDate);
  const formattedDate = Number.isNaN(eventDate.getTime())
    ? 'Tanggal belum tersedia'
    : eventDate.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });

  return {
    id: item.id,
    title: item.title,
    date: formattedDate,
    time: item.eventTime || 'Waktu akan diumumkan',
    location: item.location || 'Lokasi akan diumumkan',
    category: item.category || item.eventType || 'Event',
    image: item.image || fallbackImage,
    description: item.description || 'Detail kegiatan akan segera diperbarui.',
    registrationLink: item.registrationLink || '/kontak',
  };
}

export function KegiatanPage() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [events, setEvents] = useState<UiEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadEvents() {
      try {
        const result = await fetchEvents({ page: 1, limit: 20, upcoming: true });
        if (isMounted) {
          setEvents((result.items ?? []).map(mapEvent));
        }
      } catch {
        if (isMounted) {
          setEvents([]);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    void loadEvents();

    return () => {
      isMounted = false;
    };
  }, []);

  const categories = useMemo(() => ['Semua', ...new Set(events.map((event) => event.category))], [events]);
  const featuredEvent = events[0] ?? null;
  const filteredEvents = (featuredEvent ? events.slice(1) : events).filter((event) => {
    if (activeCategory !== 'Semua' && event.category !== activeCategory) {
      return false;
    }

    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      return true;
    }

    return `${event.title} ${event.description} ${event.location}`.toLowerCase().includes(query);
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <section className="relative overflow-hidden bg-[#0B1F3B] pb-32 pt-24 text-white">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">Kegiatan & Agenda Kampus</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300 md:text-xl">Kalender kegiatan ini sekarang membaca data event dari backend STTB.</p>
        </div>
      </section>

      <section className="container relative z-20 mx-auto -mt-16 px-4 pb-20">
        <div className="mb-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-lg md:flex-row">
          <div className="flex w-full items-center gap-2 overflow-x-auto pb-2 scrollbar-hide md:w-auto md:pb-0">
            <Filter size={20} className="mr-2 flex-shrink-0 text-gray-400" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category ? 'bg-[#C1121F] text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative w-full flex-shrink-0 md:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Cari kegiatan..."
              className="w-full rounded-full border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-sm focus:border-[#2E90FF] focus:outline-none focus:ring-1 focus:ring-[#2E90FF]"
            />
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {isLoading && <div className="mb-8 rounded-2xl bg-white p-10 text-center text-gray-600 shadow-sm">Memuat kegiatan...</div>}

        {!isLoading && featuredEvent && (activeCategory === 'Semua' || activeCategory === featuredEvent.category) && (
          <div className="mb-8 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-shadow duration-300 hover:shadow-xl">
            <div className="relative h-64 overflow-hidden md:h-80">
              <img src={featuredEvent.image} alt={featuredEvent.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute left-4 top-4 flex gap-2">
                <span className="rounded-full bg-[#D4AF37] px-3 py-1.5 text-xs font-bold text-[#0B1F3B] shadow-lg">Unggulan</span>
                <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-[#0B1F3B]">{featuredEvent.category}</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h2 className="mb-2 font-serif text-2xl font-bold md:text-3xl">{featuredEvent.title}</h2>
                <p className="line-clamp-2 text-sm text-gray-200 md:text-base">{featuredEvent.description}</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-6 p-6 md:flex-row md:p-8">
              <div className="flex w-full flex-wrap items-center gap-6 text-gray-600 md:w-auto">
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-[#2E90FF]">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-gray-400">Tanggal</p>
                    <p className="font-semibold text-[#0B1F3B]">{featuredEvent.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-[#C1121F]">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-gray-400">Waktu</p>
                    <p className="font-semibold text-[#0B1F3B]">{featuredEvent.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-gray-400">Lokasi</p>
                    <p className="font-semibold text-[#0B1F3B]">{featuredEvent.location}</p>
                  </div>
                </div>
              </div>

              <Link to={featuredEvent.registrationLink} className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0B1F3B] px-8 py-3 font-bold text-white shadow-md transition-colors hover:bg-[#1a365d] md:w-auto">
                Daftar <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        )}

        {!isLoading && filteredEvents.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2">
            {filteredEvents.map((event) => (
              <div key={event.id} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="relative h-48 overflow-hidden">
                  <img src={event.image} alt={event.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute left-3 top-3">
                    <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-[#0B1F3B] shadow-sm">{event.category}</span>
                  </div>
                </div>

                <div className="flex flex-grow flex-col p-6">
                  <h3 className="mb-4 font-serif text-lg font-bold leading-snug text-[#0B1F3B] transition-colors group-hover:text-[#2E90FF]">{event.title}</h3>
                  <p className="mb-4 text-sm text-gray-600">{event.description}</p>
                  <div className="mt-auto space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-3"><Calendar size={16} className="text-[#2E90FF]" />{event.date}</div>
                    <div className="flex items-center gap-3"><Clock size={16} className="text-[#C1121F]" />{event.time}</div>
                    <div className="flex items-center gap-3"><MapPin size={16} className="text-gray-500" />{event.location}</div>
                  </div>
                  <Link to={event.registrationLink} className="mt-6 inline-flex items-center gap-2 font-semibold text-[#C1121F] transition-colors hover:text-[#0B1F3B]">
                    Lihat Detail <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {!isLoading && events.length === 0 && <div className="rounded-2xl bg-white p-10 text-center text-gray-600 shadow-sm">Belum ada kegiatan yang tersedia dari backend.</div>}

        {!isLoading && events.length > 0 && (
          <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-bold text-[#0B1F3B]">Status Integrasi</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <p>Halaman ini membaca data dari endpoint /api/events.</p>
              <p>Jika daftar masih kosong, tambahkan event dari admin atau seed backend.</p>
              <Link to="/admin/dashboard" className="inline-flex items-center gap-2 font-semibold text-[#C1121F] hover:text-[#0B1F3B]">
                Buka Admin CMS <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
