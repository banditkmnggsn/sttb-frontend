import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { HomePage } from "./pages/HomePage";
import { DynamicProgramPage } from "./pages/DynamicProgramPage";
import { DynamicContentPage } from "./pages/DynamicContentPage";
import { LecturersPage } from "./pages/LecturersPage";
import { KegiatanPage } from "./pages/KegiatanPage";
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
      { path: "program/:slug", Component: DynamicProgramPage },

      // Tentang Kami
      { path: "tentang/dewan-dosen", Component: LecturersPage },
      { path: "tentang/:slug", Component: DynamicContentPage },

      // Generic CMS-backed pages
      { path: "admisi", Component: DynamicContentPage },
      { path: "keuangan/:slug", Component: DynamicContentPage },
      { path: "kehidupan-kampus", Component: DynamicContentPage },
      { path: "kontak", Component: DynamicContentPage },

      // News & Events
      { path: "berita", Component: BeritaListPage },
      { path: "berita/:slug", Component: BeritaDetailPage },

      // Other
      { path: "kegiatan", Component: KegiatanPage },
      { path: "perpustakaan", Component: DynamicContentPage },
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