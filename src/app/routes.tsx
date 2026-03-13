import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { HomePage } from "./pages/HomePage";
import { SarjanaTeologiPage } from "./pages/programs/SarjanaTeologiPage";
import { SarjanaPendidikanKristenPage } from "./pages/programs/SarjanaPendidikanKristenPage";
import { MagisterTeologiPastoralPage } from "./pages/programs/MagisterTeologiPastoralPage";
import { MagisterTeologiTransformasiPage } from "./pages/programs/MagisterTeologiTransformasiPage";
import { MagisterPendidikanKristenPage } from "./pages/programs/MagisterPendidikanKristenPage";
import { MagisterMinistriMarketplacePage } from "./pages/programs/MagisterMinistriMarketplacePage";
import { MagisterMinistriKepemimpinanPastoralPage } from "./pages/programs/MagisterMinistriKepemimpinanPastoralPage";
import { MagisterMinistriTeologiPelayananPage } from "./pages/programs/MagisterMinistriTeologiPelayananPage";

// Tentang Kami pages
import { SejarahPage } from "./pages/tentang/SejarahPage";
import { VisiMisiPage } from "./pages/tentang/VisiMisiPage";
import { MarsPage } from "./pages/tentang/MarsPage";
import { PengakuanImanPage } from "./pages/tentang/PengakuanImanPage";
import { DewanDosenPage } from "./pages/tentang/DewanDosenPage";
import { YayasanPage } from "./pages/tentang/YayasanPage";

// Admisi pages
import { AdmisiPage } from "./pages/AdmisiPage";

// Keuangan pages
import { BiayaStudiPage } from "./pages/BiayaStudiPage";
import { BeasiswaPage } from "./pages/BeasiswaPage";
import { DukungSTTBPage } from "./pages/keuangan/DukungSTTBPage";

// Other pages
import { KehidupanKampusPage } from "./pages/KehidupanKampusPage";
import { KontakPage } from "./pages/KontakPage";
import { KegiatanPage } from "./pages/KegiatanPage";
import { PerpustakaanPage } from "./pages/PerpustakaanPage";
import { LeadPage } from "./pages/LeadPage";
import { MediaPage } from "./pages/MediaPage";

// News pages
import { BeritaListPage } from "./pages/BeritaListPage";
import { BeritaDetailPage } from "./pages/BeritaDetailPage";

// Admin pages
import { LoginPage } from "./pages/admin/LoginPage";
import { DashboardPage } from "./pages/admin/DashboardPage";
import { ContentListPage } from "./pages/admin/ContentListPage";
import { ContentEditorPage } from "./pages/admin/ContentEditorPage";
import { PagesManagementPage } from "./pages/admin/PagesManagementPage";
import { MediaLibraryPage } from "./pages/admin/MediaLibraryPage";
import { CategoriesPage } from "./pages/admin/CategoriesPage";
import { PublishingQueuePage } from "./pages/admin/PublishingQueuePage";
import { AuditLogsPage } from "./pages/admin/AuditLogsPage";
import { UsersPage } from "./pages/admin/UsersPage";
import { RolesPage } from "./pages/admin/RolesPage";
import { SettingsPage } from "./pages/admin/SettingsPage";
import { HomeContentPage } from "./pages/admin/HomeContentPage";
import { LeadContentPage } from "./pages/admin/LeadContentPage";

export const router = createBrowserRouter([
  // Public Routes
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      
      // Program Studi
      { path: "program/sarjana-teologi", Component: SarjanaTeologiPage },
      { path: "program/sarjana-pendidikan-kristen", Component: SarjanaPendidikanKristenPage },
      { path: "program/magister-teologi-pastoral", Component: MagisterTeologiPastoralPage },
      { path: "program/magister-teologi-transformasi", Component: MagisterTeologiTransformasiPage },
      { path: "program/magister-pendidikan-kristen", Component: MagisterPendidikanKristenPage },
      { path: "program/magister-ministri-marketplace", Component: MagisterMinistriMarketplacePage },
      { path: "program/magister-kepemimpinan-pastoral", Component: MagisterMinistriKepemimpinanPastoralPage },
      { path: "program/magister-teologi-pelayanan", Component: MagisterMinistriTeologiPelayananPage },

      // Tentang Kami
      { path: "tentang/sejarah", Component: SejarahPage },
      { path: "tentang/visi-misi", Component: VisiMisiPage },
      { path: "tentang/mars", Component: MarsPage },
      { path: "tentang/pengakuan-iman", Component: PengakuanImanPage },
      { path: "tentang/dewan-dosen", Component: DewanDosenPage },
      { path: "tentang/yayasan", Component: YayasanPage },
      
      // Admisi
      { path: "admisi", Component: AdmisiPage },
      
      // Keuangan
      { path: "keuangan/biaya-studi", Component: BiayaStudiPage },
      { path: "keuangan/beasiswa", Component: BeasiswaPage },
      { path: "keuangan/dukung-sttb", Component: DukungSTTBPage },
      
      // News & Events
      { path: "berita", Component: BeritaListPage },
      { path: "berita/:slug", Component: BeritaDetailPage },
      
      // Other
      { path: "kehidupan-kampus", Component: KehidupanKampusPage },
      { path: "kontak", Component: KontakPage },
      { path: "kegiatan", Component: KegiatanPage },
      { path: "perpustakaan", Component: PerpustakaanPage },
      { path: "lead", Component: LeadPage },
      { path: "media", Component: MediaPage },
    ],
  },
  
  // Admin Login (no layout)
  {
    path: "/admin/login",
    Component: LoginPage,
  },
  
  // Admin Routes (with AdminLayout)
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { index: true, Component: DashboardPage },
      { path: "dashboard", Component: DashboardPage },
      { path: "content", Component: ContentListPage },
      { path: "content/new", Component: ContentEditorPage },
      { path: "content/edit/:id", Component: ContentEditorPage },
      { path: "pages", Component: PagesManagementPage },
      { path: "media", Component: MediaLibraryPage },
      { path: "categories", Component: CategoriesPage },
      { path: "publishing", Component: PublishingQueuePage },
      { path: "audit", Component: AuditLogsPage },
      { path: "users", Component: UsersPage },
      { path: "roles", Component: RolesPage },
      { path: "settings", Component: SettingsPage },
      { path: "home-content", Component: HomeContentPage },
      { path: "lead-content", Component: LeadContentPage },
    ],
  },
]);