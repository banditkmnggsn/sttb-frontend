import { ProgramHero } from '../../components/shared/ProgramHero';
import { GraduateProfile } from '../../components/shared/GraduateProfile';
import { AcademicInfo } from '../../components/shared/AcademicInfo';
import { CurriculumCategories } from '../../components/shared/CurriculumCategories';
import { CourseTable } from '../../components/shared/CourseTable';
import { CareerOpportunities } from '../../components/shared/CareerOpportunities';
import { CTASection } from '../../components/shared/CTASection';

export function MagisterTeologiPelayananPage() {
  const curriculumCategories = [
    {
      title: 'Mata Kuliah Inti',
      description: 'Fondasi teologis dan penelitian tingkat lanjut.',
      sks: 18
    },
    {
      title: 'Studi Biblika Lanjutan',
      description: 'Eksegesis mendalam dan hermeneutika kontemporer.',
      sks: 12
    },
    {
      title: 'Teologi Kontemporer',
      description: 'Isu-isu teologis terkini dan relevansi gereja.',
      sks: 10
    },
    {
      title: 'Kepemimpinan & Manajemen',
      description: 'Kepemimpinan transformasional dalam konteks pelayanan.',
      sks: 8
    },
    {
      title: 'Tesis',
      description: 'Penelitian mandiri dengan kontribusi akademik.',
      sks: 8
    }
  ];

  const coreCourses = [
    { name: 'Metodologi Penelitian Teologi', sks: 3 },
    { name: 'Teologi Sistematika Lanjutan', sks: 3 },
    { name: 'Filsafat Teologi', sks: 3 },
    { name: 'Etika Teologi Kontemporer', sks: 3 },
    { name: 'Sejarah Pemikiran Teologi', sks: 3 },
    { name: 'Bahasa Yunani Lanjutan', sks: 3 }
  ];

  const biblicalCourses = [
    { name: 'Eksegesis Perjanjian Lama Lanjutan', sks: 3 },
    { name: 'Eksegesis Perjanjian Baru Lanjutan', sks: 3 },
    { name: 'Teologi Biblika', sks: 3 },
    { name: 'Hermeneutika Kontemporer', sks: 3 }
  ];

  const leadershipCourses = [
    { name: 'Kepemimpinan Transformasional', sks: 2 },
    { name: 'Manajemen Organisasi Gereja', sks: 2 },
    { name: 'Mentoring & Coaching', sks: 2 },
    { name: 'Change Management', sks: 2 }
  ];

  const careers = [
    'Pendeta Senior',
    'Dosen Teologi',
    'Konsultan Gereja',
    'Penulis Teologi',
    'Pemimpin Denominasi',
    'Peneliti Teologi',
    'Pembicara & Trainer',
    'Church Planter'
  ];

  return (
    <>
      <ProgramHero
        title="MAGISTER TEOLOGI PELAYANAN"
        degree="M.Th (Master of Theology)"
        description="Program pascasarjana yang mempersiapkan pemimpin gereja dengan pemahaman teologis yang mendalam dan keterampilan kepemimpinan yang mumpuni untuk memimpin gereja di era modern."
        backgroundImage="https://images.unsplash.com/photo-1738949538943-e54722a44ffc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
      />

      <GraduateProfile />

      <AcademicInfo
        totalSks="48 SKS"
        duration="2 Tahun"
        system="Blok intensif dengan kuliah weekend dan online, cocok untuk pendeta dan pemimpin gereja yang sedang aktif melayani."
        requirements="Sarjana Teologi (S.Th) atau S1 bidang terkait dengan IPK minimal 3.00"
        additionalInfo="Program ini dirancang khusus untuk para pelayan yang ingin meningkatkan kompetensi teologis dan kepemimpinan mereka tanpa meninggalkan pelayanan aktif."
      />

      <CurriculumCategories categories={curriculumCategories} />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-[#003478] mb-12 text-center">Daftar Mata Kuliah</h2>
          
          <CourseTable 
            categoryTitle="Mata Kuliah Inti" 
            courses={coreCourses}
            variant="red"
          />

          <CourseTable 
            categoryTitle="Studi Biblika Lanjutan" 
            courses={biblicalCourses}
            variant="blue"
          />

          <CourseTable 
            categoryTitle="Kepemimpinan & Manajemen" 
            courses={leadershipCourses}
            variant="red"
          />

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#003478] mb-4">Informasi Tambahan:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Program dapat diselesaikan dalam 2 tahun (4 semester)</li>
              <li>• Tesis dikerjakan di semester 3-4 dengan bimbingan intensif</li>
              <li>• Kuliah dilaksanakan setiap weekend (Jumat sore - Sabtu)</li>
              <li>• Tersedia opsi kuliah online untuk beberapa mata kuliah</li>
            </ul>
          </div>
        </div>
      </section>

      <CareerOpportunities careers={careers} />

      <CTASection
        title="Tingkatkan Kompetensi Pelayanan Anda"
        description="Raih gelar Magister Teologi dan perluas dampak pelayanan Anda"
        primaryButton={{
          text: 'Daftar Sekarang',
          link: '/admisi'
        }}
        secondaryButton={{
          text: 'Konsultasi',
          link: '/kontak'
        }}
      />
    </>
  );
}
