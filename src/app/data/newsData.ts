export interface NewsArticle {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  category: string;
  author?: string;
}

export const newsArticles: NewsArticle[] = [
  {
    slug: 'seminar-teologi-nasional-2026',
    title: 'Seminar Teologi Nasional 2026: "Gereja dan Tantangan Zaman"',
    excerpt: 'STTB menyelenggarakan Seminar Teologi Nasional dengan menghadirkan pembicara-pembicara terkemuka dari berbagai denominasi untuk membahas peran gereja di era modern.',
    content: `
      <p>STTB Bandung dengan bangga mengumumkan penyelenggaraan Seminar Teologi Nasional 2026 dengan tema "Gereja dan Tantangan Zaman". Acara ini akan diselenggarakan pada tanggal 15-16 Mei 2026 di Auditorium STTB Bandung.</p>

      <h3>Pembicara Utama</h3>
      <p>Seminar ini akan menghadirkan pembicara-pembicara terkemuka dari berbagai denominasi, termasuk teolog senior, praktisi pelayanan, dan pemimpin gereja yang berpengalaman.</p>

      <h3>Topik Pembahasan</h3>
      <ul>
        <li>Gereja dalam Konteks Pluralisme Agama</li>
        <li>Digitalisasi dan Pelayanan Gereja Masa Kini</li>
        <li>Pembinaan Warga Jemaat di Era Postmodern</li>
        <li>Kepemimpinan Gereja yang Transformasional</li>
      </ul>

      <h3>Informasi Pendaftaran</h3>
      <p>Pendaftaran sudah dibuka untuk umum dengan biaya investasi Rp 350.000 (sudah termasuk materi, sertifikat, dan konsumsi). Khusus mahasiswa STTB, gratis!</p>

      <p>Untuk informasi lebih lanjut dan pendaftaran, hubungi: (021) 4584350 atau email: seminar@sttb.ac.id</p>
    `,
    date: '2026-03-01',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: 'Seminar',
    author: 'Tim Humas STTB'
  },
  {
    slug: 'wisuda-sarjana-magister-periode-1-2026',
    title: 'Wisuda Sarjana dan Magister Periode 1 Tahun 2026',
    excerpt: 'Sebanyak 85 mahasiswa STTB Jakarta diwisuda dalam upacara wisuda periode 1 tahun akademik 2025/2026. Selamat kepada para lulusan!',
    content: `
      <p>Sekolah Tinggi Teologi Bandung (STTB) sukses menyelenggarakan upacara wisuda periode 1 tahun akademik 2025/2026 pada Sabtu, 22 Februari 2026. Sebanyak 85 mahasiswa resmi menjadi alumni STTB, terdiri dari 45 lulusan program Sarjana dan 40 lulusan program Magister.</p>

      <h3>Pidato Wisuda</h3>
      <p>Dalam pidatonya, Ketua STTB mengingatkan para lulusan untuk tetap setia pada panggilan pelayanan dan menggunakan ilmu yang telah dipelajari untuk membawa transformasi bagi gereja dan masyarakat.</p>

      <h3>Lulusan Terbaik</h3>
      <p>Penghargaan lulusan terbaik diberikan kepada:</p>
      <ul>
        <li><strong>Program Sarjana:</strong> Yohanes Kristianto (IPK 3.95) - Sarjana Teologi</li>
        <li><strong>Program Magister:</strong> Maria Magdalena (IPK 3.98) - Magister Teologi Pelayanan</li>
      </ul>

      <h3>Apresiasi</h3>
      <p>Ucapan selamat kami sampaikan kepada seluruh wisudawan. Semoga menjadi berkat bagi gereja dan bangsa!</p>
    `,
    date: '2026-02-22',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: 'Wisuda',
    author: 'Tim Humas STTB'
  },
  {
    slug: 'retret-mahasiswa-baru-2026',
    title: 'Retret Mahasiswa Baru: Membangun Fondasi Spiritualitas',
    excerpt: 'Mahasiswa baru STTB mengikuti retret tahunan untuk membangun fondasi spiritualitas dan mempererat persaudaraan dalam komunitas kampus.',
    content: `
      <p>Sebanyak 120 mahasiswa baru STTB Jakarta mengikuti Retret Mahasiswa Baru yang diselenggarakan di Puncak, Bogor, pada tanggal 10-12 Januari 2026. Kegiatan ini merupakan agenda rutin untuk menyambut mahasiswa baru dan membangun fondasi spiritualitas yang kuat.</p>

      <h3>Tema dan Materi</h3>
      <p>Retret tahun ini mengambil tema "Dipanggil untuk Melayani" dengan materi-materi yang mencakup:</p>
      <ul>
        <li>Identitas Mahasiswa Teologi</li>
        <li>Disiplin Spiritual untuk Pelayan Tuhan</li>
        <li>Kehidupan Komunitas yang Sehat</li>
        <li>Visi dan Misi Pelayanan</li>
      </ul>

      <h3>Aktivitas</h3>
      <p>Selain sesi pengajaran, mahasiswa juga terlibat dalam berbagai aktivitas seperti penyembahan bersama, kelompok kecil, ice breaking, dan waktu sunyi untuk refleksi pribadi.</p>

      <h3>Testimoni</h3>
      <p>"Retret ini sangat memberkati saya. Saya mendapatkan perspektif baru tentang panggilan melayani dan merasa lebih siap untuk menjalani kehidupan sebagai mahasiswa teologi," ujar Daniel, mahasiswa Sarjana Teologi angkatan 2026.</p>
    `,
    date: '2026-01-12',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: 'Kegiatan Mahasiswa',
    author: 'Panitia Retret 2026'
  },
  {
    slug: 'konferensi-teologi-reformed-2025',
    title: 'Konferensi Teologi Reformed: Kembali ke Sola Scriptura',
    excerpt: 'STTB menggelar konferensi teologi Reformed dengan tema "Kembali ke Sola Scriptura" yang dihadiri oleh ratusan peserta dari seluruh Indonesia.',
    content: `
      <p>Konferensi Teologi Reformed yang diselenggarakan STTB Jakarta pada 5-7 Desember 2025 telah sukses digelar dengan antusiasme tinggi dari para peserta. Konferensi dengan tema "Kembali ke Sola Scriptura" ini dihadiri oleh lebih dari 300 peserta dari berbagai gereja dan denominasi di seluruh Indonesia.</p>

      <h3>Narasumber</h3>
      <p>Konferensi menghadirkan pembicara-pembicara kompeten di bidang teologi Reformed, termasuk:</p>
      <ul>
        <li>Dr. Theodorus Riyanto, M.Th - Dosen Senior STTB</li>
        <li>Pdt. Dr. Stephen Tong - Pendiri Sekolah Teologi Reformed Injili Indonesia</li>
        <li>Dr. Paul Gunadi, M.Th - Konselor dan Teolog</li>
      </ul>

      <h3>Materi Konferensi</h3>
      <p>Materi yang dibahas meliputi:</p>
      <ul>
        <li>Hermeneutika Alkitab yang Benar</li>
        <li>Doktrin-Doktrin Pokok Teologi Reformed</li>
        <li>Aplikasi Teologi Reformed dalam Pelayanan Praktis</li>
        <li>Apologetika Kristen di Era Postmodern</li>
      </ul>

      <h3>Dampak</h3>
      <p>Peserta memberikan respons positif dan menyatakan bahwa konferensi ini memperkuat iman mereka serta memberikan pemahaman yang lebih mendalam tentang teologi Reformed.</p>
    `,
    date: '2025-12-07',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: 'Konferensi',
    author: 'Tim Humas STTB'
  },
  {
    slug: 'pelayanan-mahasiswa-di-panti-asuhan',
    title: 'Mahasiswa STTB Melayani di Panti Asuhan Kasih Bunda',
    excerpt: 'Mahasiswa STTB melaksanakan kegiatan pelayanan sosial di Panti Asuhan Kasih Bunda sebagai bentuk implementasi teologi yang dipelajari di kelas.',
    content: `
      <p>Pada Sabtu, 15 November 2025, sebanyak 30 mahasiswa STTB Jakarta melaksanakan kegiatan pelayanan sosial di Panti Asuhan Kasih Bunda, Jakarta Timur. Kegiatan ini merupakan bagian dari program Praktikum Pelayanan yang wajib diikuti oleh mahasiswa program Sarjana.</p>

      <h3>Kegiatan</h3>
      <p>Mahasiswa terlibat dalam berbagai aktivitas, antara lain:</p>
      <ul>
        <li>Mengajar Sekolah Minggu untuk anak-anak panti</li>
        <li>Membagikan bantuan sembako dan kebutuhan sehari-hari</li>
        <li>Bermain dan berinteraksi dengan anak-anak</li>
        <li>Penyembahan dan doa bersama</li>
        <li>Renovasi ringan fasilitas panti</li>
      </ul>

      <h3>Testimoni</h3>
      <p>"Pelayanan ini membuka mata saya bahwa teologi bukan hanya untuk dipelajari, tetapi harus dipraktikkan dalam tindakan nyata melayani sesama," ungkap Sarah, mahasiswa Sarjana Pendidikan Kristen.</p>

      <h3>Komitmen Berkelanjutan</h3>
      <p>STTB berkomitmen untuk terus melakukan pelayanan sosial secara berkelanjutan sebagai wujud kasih Kristus kepada sesama yang membutuhkan.</p>
    `,
    date: '2025-11-15',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: 'Kegiatan Mahasiswa',
    author: 'Tim Pelayanan Sosial STTB'
  },
  {
    slug: 'kuliah-umum-dr-john-piper',
    title: 'Kuliah Umum: Dr. John Piper tentang "God\'s Passion for His Glory"',
    excerpt: 'STTB kedatangan tamu istimewa, Dr. John Piper, yang memberikan kuliah umum tentang kemuliaan Allah dan implikasinya bagi pelayanan gereja.',
    content: `
      <p>Dalam acara yang sangat dinanti-nantikan, STTB Jakarta kedatangan tamu istimewa, Dr. John Piper, pendiri Desiring God Ministries dan mantan Pendeta Bethlehem Baptist Church, Minneapolis. Beliau memberikan kuliah umum dengan tema "God's Passion for His Glory" pada Rabu, 20 Oktober 2025.</p>

      <h3>Isi Kuliah</h3>
      <p>Dalam kuliahnya, Dr. Piper menekankan bahwa:</p>
      <ul>
        <li>Allah menciptakan segala sesuatu untuk kemuliaan-Nya</li>
        <li>Manusia paling berbahagia ketika memuliakan Allah</li>
        <li>Pelayanan yang efektif adalah pelayanan yang berpusat pada kemuliaan Allah</li>
        <li>Christian Hedonism: mencari kepuasan tertinggi dalam Allah</li>
      </ul>

      <h3>Sesi Tanya Jawab</h3>
      <p>Acara dilanjutkan dengan sesi tanya jawab yang interaktif. Mahasiswa dan dosen STTB antusias mengajukan pertanyaan teologis dan praktis seputar pelayanan.</p>

      <h3>Dampak</h3>
      <p>Kuliah umum ini memberikan dampak signifikan bagi komunitas STTB, memperdalam pemahaman tentang teologi kemuliaan Allah dan implikasinya dalam kehidupan dan pelayanan sehari-hari.</p>

      <p>"Ini adalah pengalaman yang luar biasa. Saya bersyukur STTB memberikan kesempatan untuk belajar langsung dari seorang teolog sekaliber Dr. John Piper," ujar Timotius, mahasiswa Magister Teologi Pelayanan.</p>
    `,
    date: '2025-10-20',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    category: 'Kuliah Umum',
    author: 'Tim Humas STTB'
  }
];