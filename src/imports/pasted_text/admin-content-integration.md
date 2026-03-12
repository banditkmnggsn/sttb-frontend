INSTRUCTION SUMMARY (JALANKAN SEKARANG)

Tujuan: Sambungkan fitur Admin (Content Management) ke halaman user secara **deterministik**. Admin harus dapat membuat / edit / delete konten (artikel, program studi, kegiatan, dosen, media) dan setiap aksi harus **langsung memengaruhi** halaman user yang relevan di frontend (mock DB). Jangan ubah struktur/layout halaman publik. Implementasi awal berjalan *frontend-only* menggunakan Zustand atau React Context sebagai mock DB, sehingga developer bisa menjalankan lokal tanpa backend.

PRIORITAS UTAMA
1. Pastikan Content Management (list/table) menunjukkan secara eksplisit *where used / affected pages* untuk setiap item.
2. Pastikan Content Editor memiliki field "Target Location" (atau mapping) yg jelas: opsi = Berita (/berita), Program (/program/{slug}), Pages (/pages/{slug} seperti tentang/visi-misi), Kegiatan (/kegiatan), Dewan Dosen (/tentang/dewan-dosen), Homepage (section: hero/banner/featured).
3. Admin boleh mengubah *isi* (data) saja. **Dilarang** mengubah layout/struktur. UI public tidak boleh dimodifikasi oleh admin.
4. Implementasikan mock data layer `/src/app/store` dengan stores: newsStore.ts, programStore.ts, eventStore.ts, facultyStore.ts, mediaStore.ts — masing2 export types, initial data, dan fungsi CRUD (create/update/delete/publish/unpublish/getBySlug).
5. Semua public pages harus membaca data dari store dan re-render otomatis setelah perubahan (reactive).
6. Tambahkan kolom "Affected Pages" dan tombol "Preview" di Content List untuk melakukan preview publik dari item (preview membuka route publik di tab baru, dengan query param preview=true jika perlu).
7. Tambahkan fitur "Where Used" / "Usage" — list kecil yang menampilkan halaman yang memakai item (mis. sebuah program mungkin di-list di Program Showcase dan Program Detail).
8. Pastikan status mapping: draft / in-review / approved / published / scheduled / rejected — dan public pages hanya menampilkan status = published (atau scheduled jika waktu publish <= now).
9. Tambahkan safety: confirm dialog sebelum delete, undo toast (few seconds) untuk delete.
10. Update dokumentasi: ADMIN_CMS_GUIDE.md & STRUKTUR_ADMIN_DAN_USER.md — sertakan tabel mapping AdminEntity ↔ PublicRoute.

TECH STACK & FILE PATHS
- Next.js (app/router) + TypeScript + Tailwind CSS
- State: prefer `zustand` (light) — alternatif React Context ok
- Mock stores path: /src/app/store/*.ts
- Admin pages connect to store functions in: /src/app/pages/admin/*
- Public pages read from stores: /src/app/pages/berita, /src/app/pages/programs, /src/app/pages/kegiatan, /src/app/pages/tentang/dewan-dosen, homepage components

DETAILED IMPLEMENTATION TASKS (STEP BY STEP)

STEP A — Data Model & Stores
1. Buat /src/app/store/newsStore.ts:
   - export type News { id, title, slug, excerpt, content, categories[], tags[], author, status, featuredImage, views:number, createdAt, updatedAt, target: "berita"|"program"|"page"|"kegiatan"|"homepage"|"faculty", targetSlug?: string, scheduledAt?: string }
   - export const newsStore: News[] = [ 4 realistic items ] (status mix: published/draft)
   - export functions: createNews(news), updateNews(id, payload), deleteNews(id), publishNews(id), unpublishNews(id), getPublished(), getBySlug(slug)
   - functions must update state and trigger reactive UI

2. Buat programStore.ts, eventStore.ts, facultyStore.ts, mediaStore.ts dengan pola serupa. Program type harus include fields: id, name, slug, degree, description, curriculum(), featuredImage, status.

3. Semua stores harus expose selectors (if zustand) atau context provider hooks (if Context): useNews(), usePrograms(), useEvents(), useFaculty(), useMedia()

STEP B — Admin UI → Store Binding
1. Content List (/admin/content):
   - Connect to newsStore.getAll()
   - Tambahkan kolom baru: Affected Pages (derived from item.target + targetSlug), Preview button (open public URL in new tab)
   - Filters: status, type (article/banner/landing)
   - Bulk actions: publish/unpublish/delete (use store functions)
   - Views column must reflect store.views (increment only when public page viewed; admin preview may not increment unless preview param sets flag)

2. Content Editor (/admin/content/new or edit/:id):
   - Bind form submit to createNews/updateNews
   - Add Target Location select (dropdown listing real public targets: Berita, Program (list options from programStore), Page (list static pages from config), Kegiatan, Dewan Dosen, Homepage sections)
   - If target = program, require targetSlug chosen from programStore slugs
   - Provide Preview button (open public route with preview token/query) — preview should render item from store even if not published when ?preview=1

3. Program CRUD (/admin/programs):
   - Implement create/update/delete functions bound to programStore
   - When creating a program, ensure slug uniqueness (auto-generate from name)
   - Public /program/:slug must read programStore.getBySlug

4. Events CRUD (/admin/events) & Faculty CRUD (/admin/faculty):
   - Same binding pattern

5. Media Library:
   - Admin "upload" pushes a media object with blob URL or base64 preview into mediaStore
   - Media items can be selected as featuredImage in content/program forms
   - Public pages resolve media URL from mediaStore

STEP C — Public Pages Read From Stores
1. /berita (list) -> useNews().getPublished()
2. /berita/:slug -> useNews().getBySlug(slug) -> if not found or status != published and no preview query, show 404
3. /program/:slug -> usePrograms().getBySlug
4. /kegiatan -> useEvents().getPublished()
5. /tentang/dewan-dosen -> useFaculty().getAllPublished()
6. Homepage sections that use dynamic content (featured banners, latest news) should read from stores and automatically update

STEP D — Preview Mode & Scheduling
1. Implement preview mode: if URL has ?preview=true and user is admin (or local dev flag), public pages will render items regardless of status.
2. Scheduled posts: publishNews should consider scheduledAt; if scheduledAt <= now, function auto-moves status to published (for frontend demo, simulate scheduler via check on page load or a small setInterval)

STEP E — Usage Mapping & Documentation
1. Add a visible badge/tooltip in Content Editor: "This content will appear on: [list of routes]" — generate based on target field
2. Create admin utility page /admin/mappings (or add section in Content List) that lists Admin Entity → Public Route mapping table (e.g. News → /berita, Program → /program/:slug)
3. Update ADMIN_CMS_GUIDE.md: include code snippets showing store APIs, how public pages consume stores, and how to test preview mode locally

STEP F — Safety & Constraints
1. Admin UI must not expose controls to change public layout (no drag/drop of sections, no layout toggles)
2. Add validation: if admin tries to choose a target that doesn't exist (e.g., program slug removed), show error and prevent save
3. Protect delete actions with confirm and temporary undo (toast with revert button for 6 seconds)

STEP G — Developer Tests & Verification
1. Add basic unit tests (vitest/jest) for store CRUD functions (create/update/delete/publish)
2. Add manual QA checklist to ADMIN_CMS_GUIDE.md:
   - Create news → appears in /berita
   - Edit news → update reflected in public
   - Delete news → removed from public
   - Create program → appears in /program list & detail
   - Media upload → selectable in editor → image shows in public
   - Preview mode works with ?preview=true
   - Scheduling works (simulate time)
3. Provide simple endpoint simulation (optional): an in-memory export/import JSON utility for persistence during dev (export stores → JSON file & import to reload state)

DELIVERABLES (WHAT I EXPECT BACK)
1. /src/app/store/*.ts implemented (with types + functions + initial mock data)
2. Admin pages wired to store functions (content list/editor, programs, events, faculty, media)
3. Public pages reading stores and reflecting changes
4. ADMIN_CMS_GUIDE.md updated with mapping table, usage, and QA checklist
5. UI changes minimal — only bind existing admin UI to stores (no structural redesign)
6. Demo instructions (how to run locally and test preview mode)

NOTES FOR AI CODER
- Use TypeScript types everywhere; be explicit
- Keep functions pure where possible and update global store via set() (if zustand)
- Do not implement backend or persistent storage yet
- Keep code modular and commented
- Keep Tailwind classes consistent with design tokens

END