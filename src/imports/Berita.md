# Role
Expert UI/UX Designer for Modern Institutional Web Platforms.

# Task
Redesign the "Berita" (News & Documentation) page for a Theological College (STT Bandung). Transform the dated, cluttered blog layout into a sleek, component-based news portal that feels premium and is easy to build with modern web frameworks.

# Visual Style
- **Theme:** Professional, Informative, and Academic.
- **Color Palette:** Deep Navy Blue (#002147), Soft Off-White for backgrounds (#F8F9FA), and Crisp Gold for links/hover states.
- **Typography:** Playfair Display for authoritative headlines, and Inter for highly readable body text and metadata.
- **Aesthetic:** Clean card-based UI, generous whitespace, avoiding long, cluttered sidebar lists.

# Page Structure & Components
1. **Header & Navigation:**
   - Standard unified navigation bar (transparent to solid on scroll).

2. **Hero/Featured Section (The "Hero Component"):**
   - Title: "Berita & Dokumentasi STTB"
   - A large, prominent "Featured News" card taking up the top area. 
   - Display the most recent major news (e.g., "Kunjungan Scholar Leaders") with a large, high-quality image mask, a bold headline, a short excerpt, and a prominent "Read Full Article" button.

3. **Dynamic Filtering System (Replacing the Sidebar Clutter):**
   - Ditch the long vertical lists for Archives and Categories.
   - Design a horizontal tab/pill navigation bar directly under the Hero section.
   - Tabs should include: "Semua" (All), "Akademik", "Institusi", "Kemahasiswaan", "Kegiatan". 
   - Include a sleek "Search News" input field on the right side of the filter bar.

4. **News Feed Grid (The "Article Cards"):**
   - A clean 3-column CSS-style grid for standard news articles.
   - **Card Specs:** Image thumbnail on top, Date & Category Tag (e.g., "12 Jan 2026 | Institusi") in a small sleek font, bold Title, 2-line truncated excerpt, and a subtle "Read more ->" link.
   - Ensure the cards have uniform height for a tidy layout.

5. **Pagination:**
   - Modern, minimalist pagination at the bottom of the grid (Previous, 1, 2, 3, Next) with active states highlighted in Navy Blue.

6. **Newsletter Subscription Banner (Bottom):**
   - A wide, full-width section with a Navy Blue background.
   - "Subscribe to STTB Newsletter" with clean, side-by-side input fields for Name and Email, and a high-contrast Gold "Subscribe" button.

# Constraints
- Do NOT use a traditional right-hand sidebar. The layout must be full-width and grid-based.
- Focus on modular, reusable UI components that a developer could easily map to a modern frontend framework.