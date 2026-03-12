# Contributing & Backend Guide

Panduan lengkap untuk developer yang ingin mengimplementasikan backend atau berkontribusi pada proyek STTB Frontend.

---

## Daftar Isi

1. [Arsitektur Sistem](#arsitektur-sistem)
2. [Backend Setup](#backend-setup)
3. [Database Schema](#database-schema)
4. [API Endpoints](#api-endpoints)
5. [Autentikasi](#autentikasi)
6. [Format Response](#format-response)
7. [Environment Variables](#environment-variables)
8. [Keamanan](#keamanan)
9. [Tahapan Pengembangan](#tahapan-pengembangan)

---

## Arsitektur Sistem

```
┌─────────────────┐
│  Admin Panel    │  ← Admin edit konten via form
│  /admin/*       │
└────────┬────────┘
         │ POST/PUT
         ▼
┌─────────────────┐
│   Backend API   │  ← Validasi & simpan ke DB
│   /api/*        │
└────────┬────────┘
         │ Query
         ▼
┌─────────────────┐
│    Database     │  ← PostgreSQL / MySQL
│                 │
└────────┬────────┘
         │ GET
         ▼
┌─────────────────┐
│  Halaman Publik │  ← Fetch & tampilkan data
│  /, /program/*  │
└─────────────────┘
```

---

## Backend Setup

### Rekomendasi Stack

- **Runtime**: Node.js 20+
- **Framework**: Express.js / NestJS
- **Database**: PostgreSQL 15+ / MySQL 8+
- **ORM**: Prisma
- **Auth**: JWT
- **Storage**: AWS S3 / Cloudinary

### Instalasi Cepat

```bash
# 1. Buat project backend
mkdir sttb-backend && cd sttb-backend
npm init -y

# 2. Install dependencies
npm install express prisma @prisma/client bcrypt jsonwebtoken cors helmet dotenv express-validator multer

# 3. Install dev dependencies
npm install --save-dev typescript @types/node @types/express @types/bcrypt @types/jsonwebtoken @types/multer nodemon ts-node

# 4. Setup Prisma
npx prisma init

# 5. Buat database
createdb sttb_db

# 6. Jalankan migrasi
npx prisma migrate dev --name init

# 7. Start dev server
npm run dev
```

### Packages Opsional (Produksi)

```bash
npm install @sentry/node       # Error tracking
npm install redis ioredis      # Caching
npm install compression        # Response compression
npm install morgan winston     # Logging
npm install rate-limiter-flexible  # Rate limiting
npm install cloudinary         # Image CDN
```

---

## Database Schema

### Daftar Tabel (13 tabel)

```
users               Akun pengguna
roles               Peran & izin user
home_content        Konten halaman utama
programs            Program studi
lead_content        Konten LEAD Center
news_articles       Artikel berita
article_tags        Relasi artikel-tag
events              Kalender kegiatan
categories          Kategori konten
tags                Tag konten
media_files         File yang diunggah
site_settings       Konfigurasi situs
audit_logs          Log aktivitas admin
```

### SQL Schema

#### users
```sql
CREATE TABLE users (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email         VARCHAR(255) UNIQUE NOT NULL,
  username      VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name          VARCHAR(200) NOT NULL,
  avatar        VARCHAR(500),
  role_id       UUID REFERENCES roles(id),
  is_active     BOOLEAN DEFAULT true,
  last_login    TIMESTAMP,
  created_at    TIMESTAMP DEFAULT NOW(),
  updated_at    TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role  ON users(role_id);
```

#### roles
```sql
CREATE TABLE roles (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name        VARCHAR(100) UNIQUE NOT NULL,
  description TEXT,
  permissions JSONB NOT NULL,
  -- contoh permissions: {"content":["create","read","update","delete","publish"],"media":["create","read"],"users":["read"],"settings":["read"]}
  is_system   BOOLEAN DEFAULT false,
  created_at  TIMESTAMP DEFAULT NOW(),
  updated_at  TIMESTAMP DEFAULT NOW()
);
```

#### home_content
```sql
CREATE TABLE home_content (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  section    VARCHAR(50) NOT NULL, -- 'hero', 'stats', 'showcase', dll.
  data       JSONB NOT NULL,
  is_active  BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  updated_by UUID REFERENCES users(id)
);

CREATE INDEX idx_home_section ON home_content(section);
```

#### programs
```sql
CREATE TABLE programs (
  id                    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug                  VARCHAR(100) UNIQUE NOT NULL,
  title                 VARCHAR(200) NOT NULL,
  degree                VARCHAR(20) NOT NULL,
  short_description     TEXT,
  hero_image            VARCHAR(500),
  hero_description      TEXT,
  academic_info         JSONB,  -- {credits, duration, schedule, accreditation}
  curriculum_categories JSONB,
  courses               JSONB,
  graduate_profile      JSONB,
  career_opportunities  JSONB,
  concentrations        JSONB,
  cta_title             VARCHAR(200),
  cta_description       TEXT,
  is_active             BOOLEAN DEFAULT true,
  seo_title             VARCHAR(200),
  seo_description       TEXT,
  created_at            TIMESTAMP DEFAULT NOW(),
  updated_at            TIMESTAMP DEFAULT NOW(),
  updated_by            UUID REFERENCES users(id)
);

CREATE INDEX idx_programs_slug   ON programs(slug);
CREATE INDEX idx_programs_active ON programs(is_active);
```

#### lead_content
```sql
CREATE TABLE lead_content (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  section    VARCHAR(50) NOT NULL, -- 'hero', 'pillars', 'programs', 'events'
  data       JSONB NOT NULL,
  is_active  BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  updated_by UUID REFERENCES users(id)
);

CREATE INDEX idx_lead_section ON lead_content(section);
```

#### news_articles
```sql
CREATE TABLE news_articles (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug           VARCHAR(150) UNIQUE NOT NULL,
  title          VARCHAR(300) NOT NULL,
  excerpt        TEXT,
  content        TEXT NOT NULL,
  featured_image VARCHAR(500),
  category_id    UUID REFERENCES categories(id),
  author_id      UUID REFERENCES users(id),
  status         VARCHAR(20) DEFAULT 'draft', -- draft, review, published
  is_featured    BOOLEAN DEFAULT false,
  publish_date   TIMESTAMP,
  views          INTEGER DEFAULT 0,
  created_at     TIMESTAMP DEFAULT NOW(),
  updated_at     TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_articles_slug     ON news_articles(slug);
CREATE INDEX idx_articles_status   ON news_articles(status);
CREATE INDEX idx_articles_publish  ON news_articles(publish_date);
CREATE INDEX idx_articles_category ON news_articles(category_id);
```

#### article_tags
```sql
CREATE TABLE article_tags (
  article_id UUID REFERENCES news_articles(id) ON DELETE CASCADE,
  tag_id     UUID REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (article_id, tag_id)
);
```

#### events
```sql
CREATE TABLE events (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title             VARCHAR(300) NOT NULL,
  description       TEXT,
  event_date        DATE NOT NULL,
  event_time        VARCHAR(50),
  location          VARCHAR(200),
  category          VARCHAR(50),
  image             VARCHAR(500),
  registration_link VARCHAR(500),
  capacity          INTEGER,
  registered_count  INTEGER DEFAULT 0,
  is_featured       BOOLEAN DEFAULT false,
  is_active         BOOLEAN DEFAULT true,
  created_at        TIMESTAMP DEFAULT NOW(),
  updated_at        TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_events_date   ON events(event_date);
CREATE INDEX idx_events_active ON events(is_active);
```

#### categories
```sql
CREATE TABLE categories (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name        VARCHAR(100) NOT NULL,
  slug        VARCHAR(100) UNIQUE NOT NULL,
  description TEXT,
  parent_id   UUID REFERENCES categories(id),
  color       VARCHAR(7),
  order_index INTEGER DEFAULT 0,
  created_at  TIMESTAMP DEFAULT NOW(),
  updated_at  TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_categories_slug   ON categories(slug);
CREATE INDEX idx_categories_parent ON categories(parent_id);
```

#### tags
```sql
CREATE TABLE tags (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name       VARCHAR(100) NOT NULL,
  slug       VARCHAR(100) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_tags_slug ON tags(slug);
```

#### media_files
```sql
CREATE TABLE media_files (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  filename       VARCHAR(255) NOT NULL,
  original_name  VARCHAR(255) NOT NULL,
  mime_type      VARCHAR(100) NOT NULL,
  size           INTEGER NOT NULL,
  width          INTEGER,
  height         INTEGER,
  url            VARCHAR(500) NOT NULL,
  thumbnail_url  VARCHAR(500),
  alt_text       VARCHAR(300),
  title          VARCHAR(200),
  caption        TEXT,
  folder         VARCHAR(100),
  uploaded_by    UUID REFERENCES users(id),
  created_at     TIMESTAMP DEFAULT NOW(),
  updated_at     TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_media_uploaded_by ON media_files(uploaded_by);
CREATE INDEX idx_media_folder      ON media_files(folder);
```

#### site_settings
```sql
CREATE TABLE site_settings (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category   VARCHAR(50) NOT NULL, -- 'general', 'contact', 'banking', 'social', 'seo'
  data       JSONB NOT NULL,
  updated_at TIMESTAMP DEFAULT NOW(),
  updated_by UUID REFERENCES users(id)
);

CREATE UNIQUE INDEX idx_settings_category ON site_settings(category);
```

#### audit_logs
```sql
CREATE TABLE audit_logs (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id        UUID REFERENCES users(id),
  action         VARCHAR(50) NOT NULL, -- created, updated, deleted, published, login, logout
  resource_type  VARCHAR(50) NOT NULL,
  resource_id    UUID,
  resource_title VARCHAR(300),
  changes        JSONB,
  ip_address     VARCHAR(45),
  user_agent     TEXT,
  created_at     TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_audit_user     ON audit_logs(user_id);
CREATE INDEX idx_audit_resource ON audit_logs(resource_type, resource_id);
CREATE INDEX idx_audit_created  ON audit_logs(created_at);
```

### Prisma Schema (contoh singkat)

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id           String    @id @default(uuid())
  email        String    @unique
  username     String    @unique
  passwordHash String    @map("password_hash")
  name         String
  avatar       String?
  roleId       String    @map("role_id")
  role         Role      @relation(fields: [roleId], references: [id])
  isActive     Boolean   @default(true) @map("is_active")
  lastLogin    DateTime? @map("last_login")
  createdAt    DateTime  @default(now()) @map("created_at")
  updatedAt    DateTime  @updatedAt @map("updated_at")

  articles   NewsArticle[]
  mediaFiles MediaFile[]
  auditLogs  AuditLog[]

  @@map("users")
}

model Role {
  id          String   @id @default(uuid())
  name        String   @unique
  permissions Json
  isSystem    Boolean  @default(false) @map("is_system")
  users       User[]

  @@map("roles")
}

// ... model lainnya mengikuti pola yang sama
```

---

## API Endpoints

### Ringkasan (50+ endpoint)

```
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/refresh
POST   /api/auth/logout

GET    /api/home-content/hero
PUT    /api/home-content/hero           [Admin]
GET    /api/home-content/stats
PUT    /api/home-content/stats          [Admin]
GET    /api/home-content/showcase
PUT    /api/home-content/showcase       [Admin]

GET    /api/programs
GET    /api/programs/:slug
PUT    /api/programs/:slug              [Admin]
PUT    /api/programs/:slug/academic-info    [Admin]
PUT    /api/programs/:slug/curriculum       [Admin]
POST   /api/programs/:slug/courses          [Admin]
DELETE /api/programs/:slug/courses/:id      [Admin]

GET    /api/lead-content/hero
PUT    /api/lead-content/hero           [Admin]
GET    /api/lead-content/pillars
PUT    /api/lead-content/pillars        [Admin]
GET    /api/lead-content/programs
POST   /api/lead-content/programs       [Admin]
PUT    /api/lead-content/programs/:id   [Admin]
DELETE /api/lead-content/programs/:id   [Admin]
GET    /api/lead-content/events

GET    /api/news
GET    /api/news/:slug
POST   /api/news                        [Admin]
PUT    /api/news/:id                    [Admin]
DELETE /api/news/:id                    [Admin]

GET    /api/events
GET    /api/events/:id
POST   /api/events                      [Admin]
PUT    /api/events/:id                  [Admin]
DELETE /api/events/:id                  [Admin]

POST   /api/media/upload                [Admin]
GET    /api/media
GET    /api/media/:id
DELETE /api/media/:id                   [Admin]

GET    /api/site-settings
PUT    /api/site-settings/:category     [Admin]

GET    /api/users                       [Admin]
GET    /api/users/:id                   [Admin]
POST   /api/users                       [Admin]
PUT    /api/users/:id                   [Admin]
DELETE /api/users/:id                   [Admin]

GET    /api/roles
POST   /api/roles                       [Super Admin]
PUT    /api/roles/:id                   [Super Admin]

GET    /api/audit-logs                  [Admin]
```

### Contoh Request & Response

#### Login
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@sttb.ac.id","password":"admin123"}'
```
```json
{
  "success": true,
  "data": {
    "user": { "id": "uuid", "email": "admin@sttb.ac.id", "role": "super_admin" },
    "token": "eyJhbGci...",
    "refreshToken": "eyJhbGci..."
  }
}
```

#### Update Homepage Hero
```bash
curl -X PUT http://localhost:3000/api/home-content/hero \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Membentuk Pemimpin Rohani",
    "subtitle": "STTB Bandung",
    "description": "Pendidikan Teologi Berkualitas...",
    "primaryButtonText": "Daftar Sekarang",
    "primaryButtonLink": "/admisi",
    "backgroundImage": "https://...",
    "isActive": true
  }'
```

#### Upload Media
```bash
curl -X POST http://localhost:3000/api/media/upload \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -F "file=@image.jpg" \
  -F "alt=Deskripsi gambar"
```

---

## Autentikasi

### Middleware JWT

```javascript
// middleware/auth.js
const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = user;
    next();
  });
}

module.exports = { authenticateToken };
```

### Token Config

| Konfigurasi | Nilai |
|-------------|-------|
| Access token expiry | 15 menit |
| Refresh token expiry | 7 hari |
| Algoritma | HS256 |
| Hash password | bcrypt, salt rounds 10 |

---

## Format Response

### Sukses
```json
{
  "success": true,
  "message": "Operation successful",
  "data": {}
}
```

### Error
```json
{
  "success": false,
  "error": "Error message",
  "details": {}
}
```

### List dengan Paginasi
```json
{
  "success": true,
  "data": {
    "items": [],
    "pagination": { "page": 1, "limit": 10, "total": 100, "totalPages": 10 }
  }
}
```

### HTTP Status Codes

| Kode | Kondisi |
|------|---------|
| 200 | Sukses (GET, PUT) |
| 201 | Dibuat (POST) |
| 204 | Dihapus (DELETE) |
| 400 | Input tidak valid |
| 401 | Token tidak ada/invalid |
| 403 | Izin tidak cukup |
| 404 | Resource tidak ditemukan |
| 409 | Data duplikat |
| 500 | Server error |

### Query Parameters (List Endpoint)

```
?page=1&limit=10
?status=published&category=akademik
?search=teologi
?sort=createdAt&order=desc
```

---

## Environment Variables

```env
# Database
DATABASE_URL="postgresql://user:pass@localhost:5432/sttb_db"

# JWT
JWT_SECRET="ganti-dengan-secret-yang-kuat-di-produksi"
JWT_REFRESH_SECRET="ganti-refresh-secret"
JWT_EXPIRES_IN="15m"
JWT_REFRESH_EXPIRES_IN="7d"

# Server
NODE_ENV="development"
PORT=3000
FRONTEND_URL="http://localhost:5173"

# File Upload
MAX_FILE_SIZE=10485760
UPLOAD_DIR="./uploads"

# AWS S3 (Produksi)
AWS_S3_BUCKET="sttb-media"
AWS_REGION="ap-southeast-1"
AWS_ACCESS_KEY_ID="your-key"
AWS_SECRET_ACCESS_KEY="your-secret"
```

---

## Keamanan

- [x] Hash password dengan bcrypt (salt rounds: 10)
- [x] Validasi semua input dengan `express-validator`
- [x] JWT access token singkat (15 menit)
- [x] Refresh token (7 hari)
- [x] Rate limit login: 5 percobaan per 15 menit
- [x] CORS hanya dari origin yang diizinkan
- [x] Helmet untuk security headers
- [x] Sanitasi HTML (cegah XSS)
- [x] Parameterized query (cegah SQL injection)
- [x] HTTPS di produksi
- [x] Audit log semua aksi admin

---

## Tahapan Pengembangan

| Fase | Minggu | Tugas |
|------|--------|-------|
| 1 | 1 | Setup project, database, Prisma schema, seed data |
| 2 | 2–3 | Implementasi autentikasi & endpoint CRUD inti |
| 3 | 4 | Hubungkan halaman admin ke API |
| 4 | 5 | Hubungkan halaman publik ke API, caching Redis |
| 5 | 6 | Testing (unit, integrasi, E2E), security audit, deploy |

### Urutan Implementasi yang Disarankan

1. Auth (register, login, refresh, logout)
2. Home content (hero, stats, showcase)
3. Programs (list, detail, update)
4. News & events (CRUD)
5. Media upload
6. Users & roles
7. Site settings
8. Audit logs
