import { ProgramHero } from '../../components/shared/ProgramHero';
import { GraduateProfile } from '../../components/shared/GraduateProfile';
import { AcademicInfo } from '../../components/shared/AcademicInfo';
import { CurriculumCategories } from '../../components/shared/CurriculumCategories';
import { CourseTable } from '../../components/shared/CourseTable';
import { ConcentrationSection } from '../../components/shared/ConcentrationSection';
import { CareerOpportunities } from '../../components/shared/CareerOpportunities';
import { CTASection } from '../../components/shared/CTASection';

export function SarjanaTeologiPage() {
  const curriculumCategories = [
    {
      title: 'Mata Kuliah Umum',
      description: 'Mata kuliah dasar yang mengembangkan wawasan dan kemampuan berpikir kritis mahasiswa.',
      sks: 14
    },
    {
      title: 'Studi Biblika',
      description: 'Pembelajaran mendalam tentang Perjanjian Lama dan Baru dengan pendekatan eksegetis.',
      sks: 36
    },
    {
      title: 'Studi Teologi',
      description: 'Teologi sistematika, sejarah gereja, dan perkembangan pemikiran teologis.',
      sks: 32
    },
    {
      title: 'Praktika',
      description: 'Keterampilan praktis dalam pelayanan seperti homiletika, pastoral care, dan kepemimpinan.',
      sks: 28
    },
    {
      title: 'Konsentrasi',
      description: 'Mata kuliah spesialisasi sesuai dengan fokus pelayanan yang dipilih mahasiswa.',
      sks: 18
    },
    {
      title: 'Praktik Lapangan',
      description: 'Pengalaman langsung melayani di gereja dan komunitas di bawah supervisi.',
      sks: 8
    },
    {
      title: 'Tugas Akhir',
      description: 'Skripsi sebagai karya ilmiah yang menunjukkan kemampuan riset dan analisis teologis.',
      sks: 8
    }
  ];

  const generalCourses = [
    { name: 'Pendidikan Pancasila', sks: 2 },
    { name: 'Pendidikan Kewarganegaraan', sks: 2 },
    { name: 'Bahasa Indonesia', sks: 2 },
    { name: 'Bahasa Inggris Teologi I', sks: 2 },
    { name: 'Bahasa Inggris Teologi II', sks: 2 },
    { name: 'Metode Berpikir & Penelitian', sks: 2 },
    { name: 'Psikologi Perkembangan', sks: 2 }
  ];

  const biblicalStudies = [
    { name: 'Pengantar Perjanjian Lama', sks: 3 },
    { name: 'Pengantar Perjanjian Baru', sks: 3 },
    { name: 'Kitab-Kitab Pentateukh', sks: 3 },
    { name: 'Kitab-Kitab Sejarah PL', sks: 3 },
    { name: 'Kitab-Kitab Puisi & Hikmat', sks: 3 },
    { name: 'Kitab-Kitab Nabi-Nabi', sks: 3 },
    { name: 'Injil-Injil Sinoptik', sks: 3 },
    { name: 'Injil Yohanes', sks: 2 },
    { name: 'Kisah Para Rasul', sks: 2 },
    { name: 'Surat-Surat Paulus', sks: 4 },
    { name: 'Surat-Surat Umum', sks: 2 },
    { name: 'Kitab Wahyu', sks: 2 },
    { name: 'Hermeneutika Alkitab', sks: 3 }
  ];

  const theologicalStudies = [
    { name: 'Pengantar Teologi', sks: 3 },
    { name: 'Teologi Sistematika I (Bibliologi & Teologi)', sks: 3 },
    { name: 'Teologi Sistematika II (Kristologi & Pneumatologi)', sks: 3 },
    { name: 'Teologi Sistematika III (Soteriologi & Eklesiologi)', sks: 3 },
    { name: 'Teologi Sistematika IV (Eskatologi)', sks: 2 },
    { name: 'Sejarah Gereja I (Gereja Mula-Mula s/d Reformasi)', sks: 3 },
    { name: 'Sejarah Gereja II (Reformasi s/d Modern)', sks: 3 },
    { name: 'Sejarah Gereja di Indonesia', sks: 2 },
    { name: 'Teologi Baptis', sks: 2 },
    { name: 'Etika Kristen', sks: 3 },
    { name: 'Apologetika', sks: 2 },
    { name: 'Agama-Agama Dunia', sks: 2 }
  ];

  const practicalCourses = [
    { name: 'Pengantar Pelayanan Kristen', sks: 2 },
    { name: 'Homiletika I', sks: 3 },
    { name: 'Homiletika II', sks: 3 },
    { name: 'Kepemimpinan Kristen', sks: 3 },
    { name: 'Pastoral Care & Konseling', sks: 3 },
    { name: 'Evangelisme & Misi', sks: 3 },
    { name: 'Pelayanan Anak', sks: 2 },
    { name: 'Pelayanan Remaja', sks: 2 },
    { name: 'Pelayanan Pemuda', sks: 2 },
    { name: 'Musik Gereja', sks: 2 },
    { name: 'Administrasi Gereja', sks: 2 },
    { name: 'Manajemen Keuangan Gereja', sks: 1 }
  ];

  const concentrations = [
    {
      title: 'Pemuridan & Misi',
      description: 'Fokus pada pengembangan strategi pemuridan dan pelayanan misi lintas budaya.',
      courses: [
        'Teologi Misi Kontemporer',
        'Strategi Pemuridan',
        'Antropologi Misi',
        'Penginjilan Lintas Budaya',
        'Church Planting',
        'Pelayanan Urban'
      ]
    },
    {
      title: 'Kepemimpinan Pastoral',
      description: 'Mempersiapkan gembala sidang yang efektif dalam memimpin dan menggembalakan jemaat.',
      courses: [
        'Kepemimpinan Transformasional',
        'Konseling Pastoral Lanjutan',
        'Manajemen Konflik',
        'Pertumbuhan Gereja',
        'Khotbah Ekspositori',
        'Mentoring & Coaching'
      ]
    }
  ];

  const careers = [
    'Pendeta / Gembala Sidang',
    'Penginjil / Misionaris',
    'Dosen Teologi',
    'Pemimpin Organisasi Kristen',
    'Peneliti Teologi',
    'Penulis Kristen',
    'Konselor Kristen',
    'Pendeta Muda'
  ];

  return (
    <>
      <ProgramHero
        title="SARJANA TEOLOGI"
        degree="S.Th (Sarjana Teologi)"
        description="Program ini memperlengkapi mahasiswa dengan fondasi biblika dan teologi yang kuat untuk melayani gereja dan masyarakat dengan integritas dan kompetensi."
        backgroundImage="https://images.unsplash.com/photo-1575581535069-f9ef30a209b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      />

      <GraduateProfile />

      <AcademicInfo
        totalSks="144 SKS"
        duration="4 Tahun"
        system="Blok teaching system dengan pertemuan kuliah reguler, diskusi kelompok, dan evaluasi akademik berkala."
        requirements="Lulusan SMA/SMK/MA atau sederajat dengan IPK minimal 2.50"
        additionalInfo="Program Sarjana Teologi menggunakan pendekatan pembelajaran yang mengintegrasikan teori dengan praktik pelayanan. Mahasiswa akan mendapatkan pengalaman langsung melalui praktik lapangan dan keterlibatan aktif dalam berbagai kegiatan pelayanan."
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
            categoryTitle="Studi Biblika" 
            courses={biblicalStudies}
            variant="blue"
          />

          <CourseTable 
            categoryTitle="Studi Teologi" 
            courses={theologicalStudies}
            variant="red"
          />

          <CourseTable 
            categoryTitle="Praktika" 
            courses={practicalCourses}
            variant="blue"
          />

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#003478] mb-4">Catatan:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Mahasiswa wajib menyelesaikan 144 SKS untuk lulus</li>
              <li>• Praktik lapangan dilakukan di semester 6-7</li>
              <li>• Skripsi (8 SKS) dikerjakan di semester 8</li>
              <li>• Mahasiswa memilih salah satu konsentrasi di semester 5</li>
            </ul>
          </div>
        </div>
      </section>

      <ConcentrationSection concentrations={concentrations} />

      <CareerOpportunities careers={careers} />

      <CTASection
        title="Siap Memulai Perjalanan Teologi Anda?"
        description="Bergabunglah dengan Program Sarjana Teologi STTB dan kembangkan potensi pelayanan Anda"
        primaryButton={{
          text: 'Daftar Sekarang',
          link: '/admisi'
        }}
        secondaryButton={{
          text: 'Hubungi Admisi',
          link: '/kontak'
        }}
      />
    </>
  );
}
