import { useEffect, useState } from 'react';
import { Mail } from 'lucide-react';
import { PageHero } from '../components/shared/PageHero';
import { SEO } from '../components/shared/SEO';
import { fetchLecturers, type LecturerItem } from '../utils/api';

const fallbackImage = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080';

export function LecturersPage() {
  const [lecturers, setLecturers] = useState<LecturerItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadLecturers() {
      try {
        const result = await fetchLecturers();
        if (isMounted) {
          setLecturers(result);
        }
      } catch {
        if (isMounted) {
          setLecturers([]);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    void loadLecturers();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <SEO
        title="Dewan Dosen - STTB"
        description="Profil dewan dosen STTB Bandung."
        path="/tentang/dewan-dosen"
      />

      <PageHero title="Dewan Dosen" subtitle="Pengajar dan pembina akademik STTB" />

      <section className="bg-white py-16">
        <div className="container mx-auto max-w-6xl px-4">
          {isLoading && <div className="text-center text-lg text-gray-600">Memuat data dosen...</div>}

          {!isLoading && lecturers.length === 0 && (
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-10 text-center text-gray-600">
              Data dosen belum tersedia dari backend.
            </div>
          )}

          {!isLoading && lecturers.length > 0 && (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {lecturers.map((lecturer) => (
                <article key={lecturer.id} className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
                  <img
                    src={lecturer.imageUrl || fallbackImage}
                    alt={lecturer.name}
                    className="h-72 w-full object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <h2 className="mb-2 text-2xl font-bold text-[#0B1F3B]">{lecturer.name}</h2>
                    {lecturer.position && <p className="mb-3 font-semibold text-[#C1121F]">{lecturer.position}</p>}
                    {lecturer.specialization && <p className="mb-3 text-gray-700">{lecturer.specialization}</p>}
                    {lecturer.education && <p className="mb-4 text-sm text-gray-600">{lecturer.education}</p>}
                    {lecturer.email && (
                      <a href={`mailto:${lecturer.email}`} className="inline-flex items-center gap-2 text-sm font-medium text-[#2E90FF] hover:underline">
                        <Mail size={16} />
                        {lecturer.email}
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}