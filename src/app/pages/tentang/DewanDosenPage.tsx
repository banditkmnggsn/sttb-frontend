import { PageHero } from '../../components/shared/PageHero';
import { GraduationCap, Mail, BookOpen } from 'lucide-react';

export function DewanDosenPage() {
  const faculty = [
    {
      name: 'Dr. Yohanes Bambang S., M.Th.',
      position: 'Ketua STTB',
      specialization: 'Teologi Sistematika, Etika Kristen',
      education: 'Ph.D. Systematic Theology - Fuller Theological Seminary',
      email: 'yohanes.bambang@sttb.ac.id'
    },
    {
      name: 'Dr. Maria Dewi L., M.Th.',
      position: 'Wakil Ketua Bidang Akademik',
      specialization: 'Perjanjian Baru, Hermeneutika',
      education: 'Ph.D. New Testament - Trinity Evangelical Divinity School',
      email: 'maria.dewi@sttb.ac.id'
    },
    {
      name: 'Prof. Dr. Andreas Wijaya, M.Div.',
      position: 'Guru Besar Teologi',
      specialization: 'Perjanjian Lama, Bahasa Ibrani',
      education: 'Doctor of Theology - University of Edinburgh',
      email: 'andreas.wijaya@sttb.ac.id'
    },
    {
      name: 'Dr. Ruth Susanto, M.A.',
      position: 'Dosen Pendidikan Kristen',
      specialization: 'Pendidikan Agama Kristen, Kurikulum',
      education: 'Ph.D. Christian Education - Wheaton College',
      email: 'ruth.susanto@sttb.ac.id'
    },
    {
      name: 'Dr. Daniel Hartono, M.Th.',
      position: 'Dosen Teologi Praktika',
      specialization: 'Homiletika, Kepemimpinan Gereja',
      education: 'D.Min. Preaching - Gordon-Conwell Theological Seminary',
      email: 'daniel.hartono@sttb.ac.id'
    },
    {
      name: 'Dr. Elisabeth Tan, M.Pd.K.',
      position: 'Dosen PAK',
      specialization: 'Pelayanan Anak, Psikologi Pendidikan',
      education: 'Ph.D. Christian Education - Talbot School of Theology',
      email: 'elisabeth.tan@sttb.ac.id'
    },
    {
      name: 'Rev. Dr. Samuel Chen, M.Div.',
      position: 'Dosen Misiologi',
      specialization: 'Misi Lintas Budaya, Church Planting',
      education: 'D.Miss. Missiology - Asbury Theological Seminary',
      email: 'samuel.chen@sttb.ac.id'
    },
    {
      name: 'Dr. Debora Sihombing, M.Th.',
      position: 'Dosen Sejarah Gereja',
      specialization: 'Sejarah Gereja, Teologi Reformed',
      education: 'Ph.D. Church History - Princeton Theological Seminary',
      email: 'debora.sihombing@sttb.ac.id'
    }
  ];

  return (
    <>
      <PageHero
        title="DEWAN DOSEN"
        subtitle="Tim Pengajar Berkualitas dan Berpengalaman"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Introduction */}
            <div className="text-center mb-12">
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Dewan dosen STTB terdiri dari akademisi dan praktisi yang memiliki komitmen kuat pada pendidikan teologi dan pembentukan karakter. Mereka membawa keahlian akademik, pengalaman pelayanan, dan dedikasi untuk membimbing mahasiswa.
              </p>
            </div>

            {/* Faculty Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              {faculty.map((member, index) => (
                <div 
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
                >
                  {/* Header */}
                  <div className="bg-gradient-to-r from-[#C8102E] to-[#a00d25] text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <p className="text-gray-100 font-medium">{member.position}</p>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="text-[#003478] flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="text-sm font-bold text-[#003478] mb-1">Pendidikan</p>
                        <p className="text-gray-700 text-sm">{member.education}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <BookOpen className="text-[#003478] flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="text-sm font-bold text-[#003478] mb-1">Bidang Keahlian</p>
                        <p className="text-gray-700 text-sm">{member.specialization}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="text-[#003478] flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="text-sm font-bold text-[#003478] mb-1">Email</p>
                        <a 
                          href={`mailto:${member.email}`}
                          className="text-[#C8102E] hover:underline text-sm"
                        >
                          {member.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-[#C8102E] mb-2">50+</div>
                <p className="text-gray-700">Dosen Tetap & Tidak Tetap</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-[#003478] mb-2">80%</div>
                <p className="text-gray-700">Bergelar Doktor</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-[#C8102E] mb-2">25+</div>
                <p className="text-gray-700">Tahun Pengalaman Rata-rata</p>
              </div>
            </div>

            {/* Commitment Statement */}
            <div className="mt-12 bg-gradient-to-r from-[#003478] to-[#002858] text-white p-8 md:p-12 rounded-xl">
              <h2 className="text-3xl font-bold mb-4 text-center">Komitmen Kami</h2>
              <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
                Setiap dosen di STTB berkomitmen tidak hanya untuk mengajar, tetapi juga menjadi mentor dan teladan bagi mahasiswa. Kami percaya bahwa pendidikan teologi yang efektif melibatkan transformasi hidup, bukan hanya transfer informasi.
              </p>
            </div>

            {/* Note */}
            <div className="mt-8 bg-[#C8102E]/10 border border-[#C8102E]/30 p-6 rounded-lg">
              <p className="text-gray-700 text-center">
                <strong>Catatan:</strong> Profil lengkap dosen dapat diakses melalui portal akademik atau dengan menghubungi bagian akademik. Untuk jadwal konsultasi dengan dosen, silakan hubungi sekretariat akademik.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
