import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { ProgramHero } from '../components/shared/ProgramHero';
import { AcademicInfo } from '../components/shared/AcademicInfo';
import { CurriculumCategories } from '../components/shared/CurriculumCategories';
import { CourseTable } from '../components/shared/CourseTable';
import { ConcentrationSection } from '../components/shared/ConcentrationSection';
import { CareerOpportunities } from '../components/shared/CareerOpportunities';
import { CTASection } from '../components/shared/CTASection';
import { SEO } from '../components/shared/SEO';
import { fetchProgramBySlug, type ProgramItem } from '../utils/api';

type CourseGroup = {
  title: string;
  courses: Array<{ name: string; sks: number }>;
};

const fallbackImage = 'https://images.unsplash.com/photo-1575581535069-f9ef30a209b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080';

function titleFromSlug(slug: string) {
  return slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function getObject(value: unknown) {
  return value && typeof value === 'object' && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}

function getString(value: unknown, fallback = '') {
  return typeof value === 'string' && value.trim() ? value : fallback;
}

function getStringList(value: unknown) {
  if (!Array.isArray(value)) {
    return [] as string[];
  }

  return value
    .map((item) => {
      if (typeof item === 'string') {
        return item;
      }

      const objectItem = getObject(item);
      if (!objectItem) {
        return '';
      }

      return getString(objectItem.title) || getString(objectItem.name) || getString(objectItem.description);
    })
    .filter(Boolean);
}

function normalizeCategories(program: ProgramItem) {
  if (!Array.isArray(program.curriculumCategories)) {
    return [] as Array<{ title: string; description: string; sks?: number }>;
  }

  return program.curriculumCategories.map((item) => {
    const objectItem = getObject(item) ?? {};
    const rawCredits = objectItem.sks ?? objectItem.credits ?? objectItem.credit ?? objectItem.totalCredits;
    const credits = Number(rawCredits);

    return {
      title: getString(objectItem.title, 'Kategori'),
      description: getString(objectItem.description, 'Deskripsi kurikulum belum tersedia.'),
      ...(Number.isFinite(credits) ? { sks: credits } : {}),
    };
  });
}

function normalizeCourseGroups(program: ProgramItem) {
  if (!Array.isArray(program.courses)) {
    return [] as CourseGroup[];
  }

  const groups = new Map<string, Array<{ name: string; sks: number }>>();

  for (const item of program.courses) {
    const objectItem = getObject(item) ?? {};
    const title = getString(objectItem.category) || getString(objectItem.semester) || 'Daftar Mata Kuliah';
    const courseName = getString(objectItem.name) || getString(objectItem.title) || getString(objectItem.code, 'Mata kuliah');
    const credits = Number(objectItem.credits ?? objectItem.sks ?? 0);
    const list = groups.get(title) ?? [];

    list.push({
      name: courseName,
      sks: Number.isFinite(credits) ? credits : 0,
    });

    groups.set(title, list);
  }

  return Array.from(groups.entries()).map(([title, courses]) => ({ title, courses }));
}

function normalizeConcentrations(program: ProgramItem) {
  if (Array.isArray(program.concentrations)) {
    return program.concentrations
      .map((item) => {
        const objectItem = getObject(item);
        if (!objectItem) {
          return null;
        }

        return {
          title: getString(objectItem.title, 'Konsentrasi'),
          description: getString(objectItem.description, 'Deskripsi belum tersedia.'),
          courses: getStringList(objectItem.courses ?? objectItem.items),
        };
      })
      .filter(Boolean) as Array<{ title: string; description: string; courses: string[] }>;
  }

  const objectValue = getObject(program.concentrations);
  if (!objectValue) {
    return [] as Array<{ title: string; description: string; courses: string[] }>;
  }

  return [
    {
      title: getString(objectValue.title, 'Konsentrasi'),
      description: getString(objectValue.description, 'Deskripsi belum tersedia.'),
      courses: getStringList(objectValue.items ?? objectValue.courses),
    },
  ];
}

function normalizeCareers(program: ProgramItem) {
  if (Array.isArray(program.careerOpportunities)) {
    return getStringList(program.careerOpportunities);
  }

  const objectValue = getObject(program.careerOpportunities);
  if (!objectValue) {
    return [] as string[];
  }

  return getStringList(objectValue.careers ?? objectValue.items);
}

function renderGraduateProfile(program: ProgramItem) {
  const profileObject = getObject(program.graduateProfile);
  const profileArray = Array.isArray(program.graduateProfile) ? getStringList(program.graduateProfile) : [];
  const title = getString(profileObject?.title, 'Profil Lulusan');
  const description = getString(profileObject?.description, 'Lulusan program ini diperlengkapi untuk melayani secara akademik, rohani, dan praktis.');
  const competencies = getStringList(profileObject?.competencies).length
    ? getStringList(profileObject?.competencies)
    : profileArray;

  if (!profileObject && competencies.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#0B1F3B] mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
        </div>

        {competencies.length > 0 && (
          <div className="grid md:grid-cols-3 gap-6">
            {competencies.map((competency) => (
              <div key={competency} className="rounded-2xl bg-gradient-to-br from-[#0B1F3B] to-[#071528] p-6 text-white shadow-lg">
                <h3 className="text-xl font-bold mb-3">{competency}</h3>
                <p className="text-sm text-white/80">Kompetensi inti yang dibangun selama proses pembelajaran.</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export function DynamicProgramPage() {
  const { slug = '' } = useParams<{ slug: string }>();
  const [program, setProgram] = useState<ProgramItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadProgram() {
      if (!slug) {
        setNotFound(true);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setNotFound(false);

      try {
        const result = await fetchProgramBySlug(slug);
        if (!isMounted) {
          return;
        }

        setProgram(result);
      } catch {
        if (isMounted) {
          setNotFound(true);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    void loadProgram();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  if (isLoading) {
    return <div className="flex min-h-[60vh] items-center justify-center text-lg text-gray-600">Memuat program...</div>;
  }

  if (notFound || !program) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="max-w-xl rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-sm">
          <h1 className="mb-4 text-4xl font-bold text-[#0B1F3B]">Program Belum Tersedia</h1>
          <p className="mb-6 text-gray-600">Konten program ini belum diisi dari backend. Anda bisa menambahkan atau mengubahnya dari admin CMS.</p>
          <Link to="/admin/home-content" className="inline-flex rounded-full bg-[#C1121F] px-6 py-3 font-semibold text-white transition hover:bg-[#9A0E19]">
            Buka Admin CMS
          </Link>
        </div>
      </div>
    );
  }

  const academicInfo = getObject(program.academicInfo);
  const categoryCards = normalizeCategories(program);
  const courseGroups = normalizeCourseGroups(program);
  const concentrations = normalizeConcentrations(program);
  const careers = normalizeCareers(program);
  const heroTitle = getString(program.title, titleFromSlug(slug));
  const heroDescription = getString(program.heroDescription) || getString(program.shortDescription, 'Informasi program akan segera tersedia.');

  return (
    <>
      <SEO
        title={program.seoTitle || `${heroTitle} - STTB`}
        description={program.seoDescription || heroDescription}
        ogImage={program.heroImage || fallbackImage}
        path={`/program/${slug}`}
      />

      <ProgramHero
        title={heroTitle.toUpperCase()}
        degree={getString(program.degree, 'Program STTB')}
        description={heroDescription}
        backgroundImage={program.heroImage || fallbackImage}
      />

      {academicInfo && (
        <AcademicInfo
          totalSks={getString(academicInfo.credits) || getString(academicInfo.totalSks, '-')} 
          duration={getString(academicInfo.duration, '-')}
          system={getString(academicInfo.schedule) || getString(academicInfo.system, 'Informasi sistem pembelajaran akan diperbarui melalui CMS.')}
          requirements={getString(academicInfo.requirements)}
          additionalInfo={getString(academicInfo.additionalInfo) || getString(academicInfo.accreditation)}
        />
      )}

      {renderGraduateProfile(program)}

      {categoryCards.length > 0 && <CurriculumCategories categories={categoryCards} />}

      {courseGroups.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="mb-12 text-center text-4xl font-bold text-[#003478]">Daftar Mata Kuliah</h2>
            {courseGroups.map((group, index) => (
              <CourseTable
                key={group.title}
                categoryTitle={group.title}
                courses={group.courses}
                variant={index % 2 === 0 ? 'red' : 'blue'}
              />
            ))}
          </div>
        </section>
      )}

      {concentrations.length > 0 && <ConcentrationSection concentrations={concentrations} />}

      {careers.length > 0 && <CareerOpportunities careers={careers} />}

      <CTASection
        title={getString(program.ctaTitle, 'Siap Melangkah Bersama STTB?')}
        description={getString(program.ctaDescription, 'Hubungi tim admisi atau mulai proses pendaftaran Anda hari ini.')}
        primaryButton={{ text: 'Daftar Sekarang', link: '/admisi' }}
        secondaryButton={{ text: 'Hubungi Admisi', link: '/kontak' }}
      />
    </>
  );
}