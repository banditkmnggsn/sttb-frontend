import { PageHero } from '../../components/shared/PageHero';
import { Heart, CreditCard, Building2, Users, GraduationCap, BookOpen } from 'lucide-react';

export function DukungSTTBPage() {
  const donationCategories = [
    {
      icon: <GraduationCap size={40} />,
      title: 'Beasiswa Mahasiswa',
      description: 'Bantu mahasiswa yang memiliki panggilan pelayanan namun mengalami keterbatasan finansial',
      examples: [
        'Beasiswa penuh untuk satu mahasiswa per semester: Rp 3.500.000',
        'Beasiswa 50% untuk satu mahasiswa: Rp 1.750.000',
        'Bantuan biaya hidup mahasiswa per bulan: Rp 1.000.000'
      ]
    },
    {
      icon: <Building2 size={40} />,
      title: 'Pengembangan Fasilitas',
      description: 'Dukung pembangunan dan pemeliharaan fasilitas kampus untuk pembelajaran yang lebih baik',
      examples: [
        'Renovasi ruang kuliah',
        'Pengembangan perpustakaan digital',
        'Perbaikan asrama mahasiswa',
        'Pembangunan chapel kampus'
      ]
    },
    {
      icon: <BookOpen size={40} />,
      title: 'Program Akademik',
      description: 'Kontribusi untuk peningkatan kualitas akademik dan pengembangan kurikulum',
      examples: [
        'Pengadaan buku perpustakaan',
        'Workshop dan seminar dosen',
        'Penelitian teologi',
        'Program pertukaran mahasiswa'
      ]
    },
    {
      icon: <Users size={40} />,
      title: 'Pelayanan Mahasiswa',
      description: 'Mendukung program pembinaan rohani dan pengembangan karakter mahasiswa',
      examples: [
        'Retreat spiritual mahasiswa',
        'Program mentoring',
        'Pelayanan praktik lapangan',
        'Kegiatan penginjilan dan misi'
      ]
    }
  ];

  return (
    <>
      <PageHero
        title="DUKUNG STTB"
        subtitle="Menjadi Mitra dalam Misi Pendidikan Teologi"
      />

      {/* Why Support */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#C8102E] text-white rounded-full mb-6">
                <Heart size={40} />
              </div>
              <h2 className="text-4xl font-bold text-[#003478] mb-6">Mengapa Mendukung STTB?</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Dukungan Anda memiliki dampak langsung dalam membentuk generasi pemimpin rohani masa depan. Setiap kontribusi membantu STTB melanjutkan misi pendidikan teologi yang alkitabiah dan transformatif.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-[#C8102E] mb-2">500+</div>
                <p className="text-gray-700">Mahasiswa Terbantu Setiap Tahun</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-[#003478] mb-2">70+</div>
                <p className="text-gray-700">Tahun Melayani</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-[#C8102E] mb-2">5000+</div>
                <p className="text-gray-700">Alumni Melayani</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-[#003478] mb-12 text-center">Area Dukungan</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {donationCategories.map((category, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-[#C8102E]"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-[#C8102E]/10 rounded-full flex items-center justify-center text-[#C8102E]">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-[#003478]">{category.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm font-bold text-[#003478] mb-2">Contoh Kontribusi:</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      {category.examples.map((example, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#C8102E] mt-1">•</span>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Donate */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#003478] mb-12 text-center">Cara Berdonasi</h2>

            <div className="space-y-8">
              {/* Bank Transfer */}
              <div className="bg-gradient-to-br from-[#003478] to-[#002858] text-white p-8 rounded-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <CreditCard size={32} />
                  </div>
                  <h3 className="text-2xl font-bold">Transfer Bank</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <p className="font-bold mb-2">Bank BCA</p>
                    <p className="text-2xl font-mono">1234567890</p>
                    <p className="text-sm mt-2">a.n. Yayasan STTB</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <p className="font-bold mb-2">Bank Mandiri</p>
                    <p className="text-2xl font-mono">0987654321</p>
                    <p className="text-sm mt-2">a.n. Yayasan STTB</p>
                  </div>
                </div>
              </div>

              {/* Direct Contact */}
              <div className="bg-[#C8102E]/10 border-2 border-[#C8102E] p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-[#003478] mb-4">Hubungi Kami</h3>
                <p className="text-gray-700 mb-4">
                  Untuk informasi lebih lanjut tentang program donasi atau diskusi mengenai kontribusi khusus, silakan hubungi:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> donasi@sttb.ac.id</p>
                  <p><strong>Telepon:</strong> (021) 4584350 ext. 123</p>
                  <p><strong>WhatsApp:</strong> +62 812-3456-7890</p>
                </div>
              </div>

              {/* Tax Deductible */}
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <p className="text-gray-700">
                  <strong>Catatan:</strong> Donasi Anda dapat dikurangkan dari pajak sesuai dengan peraturan perpajakan yang berlaku. 
                  Bukti transfer dapat dikirimkan melalui email untuk mendapatkan kuitansi resmi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-[#C8102E] to-[#a00d25] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Kesaksian Donatur</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 p-6 rounded-lg">
                <p className="mb-4 italic">
                  "Mendukung STTB adalah investasi untuk masa depan gereja. Saya bangga bisa berkontribusi dalam membentuk pemimpin rohani yang berkualitas."
                </p>
                <p className="font-bold">- Bpk. William Tanuwijaya</p>
                <p className="text-sm text-gray-200">Donatur Beasiswa</p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg">
                <p className="mb-4 italic">
                  "Melihat dampak langsung dari kontribusi kami dalam kehidupan mahasiswa sangat membahagiakan. STTB melakukan pekerjaan yang luar biasa."
                </p>
                <p className="font-bold">- Ibu Rachel Gunawan</p>
                <p className="text-sm text-gray-200">Donatur Tetap</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#003478] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Jadilah Bagian dari Misi Kami</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Setiap kontribusi, besar atau kecil, membuat perbedaan nyata dalam kehidupan mahasiswa dan masa depan pelayanan gereja.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:donasi@sttb.ac.id"
              className="inline-block bg-[#C8102E] hover:bg-[#a00d25] text-white font-bold px-8 py-4 rounded-lg transition"
            >
              Hubungi Tim Donasi
            </a>
            <a 
              href="tel:+622145884350"
              className="inline-block bg-white hover:bg-gray-100 text-[#003478] font-bold px-8 py-4 rounded-lg transition"
            >
              Telepon Kami
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
