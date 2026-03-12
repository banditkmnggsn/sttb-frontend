import { PageHero } from '../components/shared/PageHero';
import { MapPin, Phone, Mail, Clock, MessageCircle, Wallet } from 'lucide-react';

export function KontakPage() {
  return (
    <>
      <PageHero
        title="HUBUNGI KAMI"
        subtitle="Kami Siap Membantu Anda"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-[#1a3a5c] mb-8">Informasi Kontak</h2>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#1a3a5c] text-[#d4af37] rounded-full flex items-center justify-center">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1a3a5c] mb-2">Alamat</h3>
                      <p className="text-gray-700">
                        Jl Dr. Djundjunan No. 105<br />
                        Bandung 40173<br />
                        Indonesia
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#1a3a5c] text-[#d4af37] rounded-full flex items-center justify-center">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1a3a5c] mb-2">Telepon</h3>
                      <p className="text-gray-700">
                        (+62) 22 601-6454<br />
                        (+62) 22 607-7920
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#1a3a5c] text-[#d4af37] rounded-full flex items-center justify-center">
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1a3a5c] mb-2">WhatsApp</h3>
                      <p className="text-gray-700">
                        (+62) 815 7336 0009<br />
                        (+62) 851-8302-6009
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#1a3a5c] text-[#d4af37] rounded-full flex items-center justify-center">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1a3a5c] mb-2">Email</h3>
                      <p className="text-gray-700">
                        official@sttb.ac.id
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#1a3a5c] text-[#d4af37] rounded-full flex items-center justify-center">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1a3a5c] mb-2">Jam Operasional</h3>
                      <p className="text-gray-700">
                        Senin - Jumat: 08:00 - 16:00<br />
                        Sabtu: 08:00 - 12:00<br />
                        Minggu: Tutup
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-lg">
                  <h3 className="font-bold text-[#1a3a5c] mb-3 flex items-center gap-2">
                    <Wallet size={20} />
                    Rekening Bank
                  </h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>Bank:</strong> BCA cab. Surya Sumantri Bandung</p>
                    <p><strong>No. Rekening:</strong> 282.300.5555</p>
                    <p><strong>Atas Nama:</strong> Yayasan STT Bandung</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-[#1a3a5c] mb-8">Kirim Pesan</h2>
                
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-[#1a3a5c] mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4af37]"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#1a3a5c] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4af37]"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#1a3a5c] mb-2">
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4af37]"
                      placeholder="08xx xxxx xxxx"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#1a3a5c] mb-2">
                      Perihal
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4af37]">
                      <option>Informasi Pendaftaran</option>
                      <option>Program Studi</option>
                      <option>Biaya Studi</option>
                      <option>Beasiswa</option>
                      <option>Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#1a3a5c] mb-2">
                      Pesan
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4af37]"
                      placeholder="Tulis pesan Anda di sini..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1a3a5c] hover:bg-[#2a4a6c] text-white font-bold py-4 rounded-lg transition"
                  >
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>

            {/* Map */}
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-[#1a3a5c] mb-8 text-center">Lokasi Kampus</h2>
              <div className="bg-gray-200 rounded-lg overflow-hidden" style={{ height: '400px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.5286!2d106.8234!3d-6.3052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTgnMTguNyJTIDEwNsKwNDknMjQuMiJF!5e0!3m2!1sen!2sid!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}