import { ProgramHero } from '../../components/shared/ProgramHero';
import { GraduateProfile } from '../../components/shared/GraduateProfile';
import { AcademicInfo } from '../../components/shared/AcademicInfo';
import { CurriculumCategories } from '../../components/shared/CurriculumCategories';
import { CourseTable } from '../../components/shared/CourseTable';
import { ConcentrationSection } from '../../components/shared/ConcentrationSection';
import { CareerOpportunities } from '../../components/shared/CareerOpportunities';
import { CTASection } from '../../components/shared/CTASection';

export function SarjanaPendidikanKristenPage() {
  const curriculumCategories = [
    {
      title: 'Mata Kuliah Umum',
      description: 'Mata kuliah dasar yang mengembangkan wawasan kebangsaan dan kemampuan akademik.',
      sks: 14
    },
    {
      title: 'Studi Biblika & Teologi',
      description: 'Fondasi Alkitab dan teologi yang menjadi dasar pendidikan Kristen.',
      sks: 28
    },
    {
      title: 'Ilmu Pendidikan',
      description: 'Teori dan praktik pendidikan modern yang terintegrasi dengan nilai Kristen.',
      sks: 32
    },
    {
      title: 'Pendidikan Agama Kristen',
      description: 'Metodologi dan strategi pengajaran PAK yang efektif.',
      sks: 28
    },
    {
      title: 'Konsentrasi',
      description: 'Spesialisasi dalam bidang pendidikan anak atau remaja.',
      sks: 18
    },
    {
      title: 'Praktik Mengajar',
      description: 'Pengalaman mengajar di sekolah dan gereja di bawah bimbingan.',
      sks: 12
    },
    {
      title: 'Tugas Akhir',
      description: 'Skripsi penelitian pendidikan Kristen.',
      sks: 12
    }
  ];

  const generalCourses = [
    { name: 'Pendidikan Pancasila', sks: 2 },
    { name: 'Pendidikan Kewarganegaraan', sks: 2 },
    { name: 'Bahasa Indonesia', sks: 2 },
    { name: 'Bahasa Inggris I', sks: 2 },
    { name: 'Bahasa Inggris II', sks: 2 },
    { name: 'Teknologi Informasi & Komunikasi', sks: 2 },
    { name: 'Metode Penelitian Pendidikan', sks: 2 }
  ];

  const educationCourses = [
    { name: 'Pengantar Ilmu Pendidikan', sks: 3 },
    { name: 'Filsafat Pendidikan Kristen', sks: 3 },
    { name: 'Psikologi Pendidikan', sks: 3 },
    { name: 'Psikologi Perkembangan Anak', sks: 2 },
    { name: 'Psikologi Perkembangan Remaja', sks: 2 },
    { name: 'Kurikulum & Pembelajaran', sks: 3 },
    { name: 'Media Pembelajaran', sks: 2 },
    { name: 'Evaluasi Pembelajaran', sks: 3 },
    { name: 'Manajemen Pendidikan', sks: 3 },
    { name: 'Bimbingan & Konseling', sks: 3 },
    { name: 'Sosiologi Pendidikan', sks: 2 },
    { name: 'Pendidikan Karakter', sks: 2 }
  ];

  const pakCourses = [
    { name: 'Pengantar Pendidikan Agama Kristen', sks: 3 },
    { name: 'Teologi Pendidikan Kristen', sks: 3 },
    { name: 'Sejarah Pendidikan Kristen', sks: 2 },
    { name: 'Metodologi Pengajaran PAK', sks: 3 },
    { name: 'PAK Anak', sks: 3 },
    { name: 'PAK Remaja', sks: 3 },
    { name: 'PAK Pemuda', sks: 2 },
    { name: 'PAK Dewasa', sks: 2 },
    { name: 'Pengembangan Kurikulum PAK', sks: 3 },
    { name: 'Media & Kreativitas PAK', sks: 2 },
    { name: 'Manajemen Sekolah Minggu', sks: 2 }
  ];

  const concentrations = [
    {
      title: 'Pelayanan Anak Holistik',
      description: 'Fokus pada pendidikan dan pelayanan anak usia dini dengan pendekatan holistik.',
      courses: [
        'Teologi Anak',
        'Psikologi Anak Usia Dini',
        'Metode Mengajar Anak',
        'Kreativitas dalam Pelayanan Anak',
        'Pelayanan Keluarga & Parenting',
        'Cerita & Dramatisasi untuk Anak'
      ]
    },
    {
      title: 'Pelayanan Remaja & Pemuda',
      description: 'Mempersiapkan pendidik yang efektif dalam membina remaja dan pemuda.',
      courses: [
        'Teologi untuk Remaja',
        'Dinamika Kelompok Remaja',
        'Kepemimpinan Remaja',
        'Konseling Remaja',
        'Youth Ministry Strategy',
        'Media Digital untuk Pemuda'
      ]
    }
  ];

  const careers = [
    'Guru PAK',
    'Kepala Sekolah Kristen',
    'Koordinator Kurikulum',
    'Pembina Sekolah Minggu',
    'Konselor Sekolah',
    'Dosen PAK',
    'Pengembang Materi PAK',
    'Trainer Pendidikan Kristen'
  ];

  return (
    <>
      <ProgramHero
        title="SARJANA PENDIDIKAN KRISTEN"
        degree="S.Pd.K (Sarjana Pendidikan Kristen)"
        description="Program ini menghasilkan pendidik Kristen yang profesional, kompeten dalam pedagogi, dan memiliki integritas iman yang kuat untuk melayani di sekolah dan gereja."
        backgroundImage="https://images.unsplash.com/photo-1758413350815-7b06dbbfb9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      />

      <GraduateProfile />

      <AcademicInfo
        totalSks="144 SKS"
        duration="4 Tahun"
        system="Kombinasi kuliah teori, praktik mengajar, micro teaching, dan field study di sekolah-sekolah Kristen."
        requirements="Lulusan SMA/SMK/MA dengan nilai rata-rata minimal 70"
        additionalInfo="Program ini telah terakreditasi dan menghasilkan lulusan yang siap mengajar di sekolah-sekolah Kristen maupun melayani di bidang pendidikan gereja."
      />

      <CurriculumCategories categories={curriculumCategories} />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-[#003478] mb-12 text-center">Daftar Mata Kuliah</h2>
          
          <CourseTable 
            categoryTitle="Mata Kuliah Umum" 
            courses={generalCourses}
            variant="red"
          />

          <CourseTable 
            categoryTitle="Ilmu Pendidikan" 
            courses={educationCourses}
            variant="blue"
          />

          <CourseTable 
            categoryTitle="Pendidikan Agama Kristen" 
            courses={pakCourses}
            variant="red"
          />
        </div>
      </section>

      <ConcentrationSection concentrations={concentrations} />

      <CareerOpportunities careers={careers} />

      <CTASection
        title="Wujudkan Panggilan Anda sebagai Pendidik Kristen"
        description="Bergabunglah dengan Program Sarjana Pendidikan Kristen dan jadilah agen perubahan dalam dunia pendidikan"
        primaryButton={{
          text: 'Daftar Sekarang',
          link: '/admisi'
        }}
        secondaryButton={{
          text: 'Hubungi Kami',
          link: '/kontak'
        }}
      />
    </>
  );
}
