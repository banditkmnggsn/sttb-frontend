import { PageHero } from '../../components/shared/PageHero';
import { Target, Eye, Heart, BookOpen, Users, Award } from 'lucide-react';

export function VisiMisiPage() {
  const values = [
    {
      icon: <BookOpen size={40} />,
      title: 'Kebenaran Alkitab',
      description: 'Berkomitmen pada otoritas dan kecukupan Alkitab sebagai fondasi seluruh pembelajaran dan pelayanan.'
    },
    {
      icon: <Users size={40} />,
      title: 'Komunitas yang Peduli',
      description: 'Membangun komunitas akademik yang saling mendukung dalam pertumbuhan rohani dan intelektual.'
    },
    {
      icon: <Heart size={40} />,
      title: 'Integritas',
      description: 'Menjunjung tinggi kejujuran, transparansi, dan konsistensi antara pengajaran dan kehidupan.'
    },
    {
      icon: <Award size={40} />,
      title: 'Keunggulan',
      description: 'Mengejar standar tertinggi dalam pendidikan teologi dan pengembangan karakter.'
    }
  ];

  return (
    <>
      <PageHero
        title="VISI & MISI"
        subtitle="Panggilan dan Tujuan STTB"
      />

      {/* Visi Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#C8102E] text-white rounded-full mb-6">
              <Eye size={40} />
            </div>
            <h2 className="text-4xl font-bold text-[#003478] mb-6">Visi</h2>
            <p className="text-2xl text-gray-700 leading-relaxed font-medium">
              Menjadi lembaga pendidikan teologi yang unggul dalam menghasilkan pemimpin rohani yang alkitabiah, kompeten, dan berkarakter Kristiani untuk melayani gereja dan masyarakat.
            </p>
          </div>
        </div>
      </section>

      {/* Misi Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#003478] text-white rounded-full mb-6">
                <Target size={40} />
              </div>
              <h2 className="text-4xl font-bold text-[#003478] mb-4">Misi</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#C8102E]">
                <h3 className="text-xl font-bold text-[#003478] mb-3">1. Pendidikan Teologi yang Berkualitas</h3>
                <p className="text-gray-700 leading-relaxed">
                  Menyelenggarakan pendidikan teologi yang alkitabiah, akademis, dan relevan dengan kebutuhan gereja dan masyarakat kontemporer.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#003478]">
                <h3 className="text-xl font-bold text-[#003478] mb-3">2. Pembentukan Karakter Kristiani</h3>
                <p className="text-gray-700 leading-relaxed">
                  Membentuk karakter mahasiswa yang mencerminkan nilai-nilai Kristiani melalui pembinaan rohani yang intensif dan keteladanan hidup.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#C8102E]">
                <h3 className="text-xl font-bold text-[#003478] mb-3">3. Pengembangan Keterampilan Pelayanan</h3>
                <p className="text-gray-700 leading-relaxed">
                  Membekali mahasiswa dengan keterampilan praktis dalam berbagai bidang pelayanan gereja dan misi.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#003478]">
                <h3 className="text-xl font-bold text-[#003478] mb-3">4. Penelitian dan Pengembangan</h3>
                <p className="text-gray-700 leading-relaxed">
                  Mendorong penelitian teologis yang berkontribusi pada pengembangan pemikiran teologi dan praksis gereja di Indonesia.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#C8102E]">
                <h3 className="text-xl font-bold text-[#003478] mb-3">5. Pelayanan kepada Gereja</h3>
                <p className="text-gray-700 leading-relaxed">
                  Melayani gereja melalui penyediaan sumber daya manusia, pelatihan, konsultasi, dan kemitraan strategis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#003478] mb-4">Nilai-Nilai Inti</h2>
              <p className="text-xl text-gray-600">
                Fondasi yang membentuk identitas dan budaya STTB
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-[#C8102E]/10 text-[#C8102E] rounded-full mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#003478] mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-16 bg-gradient-to-r from-[#C8102E] to-[#a00d25] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Komitmen Kami</h2>
            <p className="text-xl leading-relaxed">
              Setiap aspek dari program akademik, kehidupan kampus, dan pelayanan kami dirancang untuk mewujudkan visi dan misi ini. Kami percaya bahwa pendidikan teologi bukan hanya transfer pengetahuan, tetapi transformasi hidup yang menghasilkan pelayan-pelayan Kristus yang setia.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
