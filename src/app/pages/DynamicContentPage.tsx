import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { PageHero } from '../components/shared/PageHero';
import { SEO } from '../components/shared/SEO';
import { fetchPageBySlug, fetchSiteSettingByCategory, type CmsPageItem, type SiteSettingRow } from '../utils/api';

type RenderSection = {
  title: string;
  description?: string;
  content?: string;
  items?: string[];
};

function getObject(value: unknown) {
  return value && typeof value === 'object' && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}

function getString(value: unknown, fallback = '') {
  return typeof value === 'string' && value.trim() ? value : fallback;
}

function getStringArray(value: unknown) {
  if (!Array.isArray(value)) {
    return [] as string[];
  }

  return value
    .map((item) => {
      if (typeof item === 'string') {
        return item;
      }

      const objectItem = getObject(item);
      if (!objectItem) {
        return '';
      }

      return getString(objectItem.title) || getString(objectItem.name) || getString(objectItem.description);
    })
    .filter(Boolean);
}

function buildSlugCandidates(pathname: string) {
  const segments = pathname.split('/').filter(Boolean);
  const leaf = segments.at(-1) ?? '';
  const joined = segments.join('-');
  const candidates = [joined, leaf, leaf.replace(/^tentang-/, '')];

  if (pathname === '/kontak') {
    candidates.push('contact', 'kontak-kami');
  }

  if (pathname === '/admisi') {
    candidates.push('pendaftaran', 'admissions');
  }

  return Array.from(new Set(candidates.filter(Boolean)));
}

function normalizeSections(data: unknown) {
  if (Array.isArray(data)) {
    return data
      .map((item) => {
        const objectItem = getObject(item);
        if (!objectItem) {
          return null;
        }

        return {
          title: getString(objectItem.title, 'Bagian'),
          description: getString(objectItem.description),
          content: getString(objectItem.content) || getString(objectItem.body),
          items: getStringArray(objectItem.items),
        };
      })
      .filter(Boolean) as RenderSection[];
  }

  const objectData = getObject(data);
  if (!objectData) {
    return [] as RenderSection[];
  }

  if (Array.isArray(objectData.timeline)) {
    return (objectData.timeline as unknown[])
      .map((item) => {
        const objectItem = getObject(item);
        if (!objectItem) {
          return null;
        }

        const year = getString(objectItem.year);
        return {
          title: year ? `${year} - ${getString(objectItem.title, 'Peristiwa')}` : getString(objectItem.title, 'Peristiwa'),
          description: getString(objectItem.description),
        };
      })
      .filter(Boolean) as RenderSection[];
  }

  if (Array.isArray(objectData.sections)) {
    return normalizeSections(objectData.sections);
  }

  return Object.entries(objectData)
    .filter(([key]) => !['title', 'subtitle', 'description', 'content', 'contentHtml', 'html', 'body', 'heroImage', 'image'].includes(key))
    .map(([key, value]) => ({
      title: key.replace(/[-_]/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase()),
      description: typeof value === 'string' ? value : undefined,
      items: Array.isArray(value) ? getStringArray(value) : undefined,
    }))
    .filter((section) => section.description || (section.items && section.items.length > 0));
}

function renderContactBlocks(setting: SiteSettingRow<Record<string, unknown>> | null) {
  if (!setting) {
    return null;
  }

  const data = getObject(setting.data);
  if (!data) {
    return null;
  }

  const entries = Object.entries(data).filter(([, value]) => typeof value === 'string' && value);
  if (entries.length === 0) {
    return null;
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="mb-8 text-3xl font-bold text-[#0B1F3B]">Informasi Kontak</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {entries.map(([key, value]) => (
            <div key={key} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#C1121F]">{key.replace(/[-_]/g, ' ')}</h3>
              <p className="text-lg text-gray-700">{String(value)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DynamicContentPage() {
  const location = useLocation();
  const [page, setPage] = useState<CmsPageItem | null>(null);
  const [contactSetting, setContactSetting] = useState<SiteSettingRow<Record<string, unknown>> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadPage() {
      setIsLoading(true);
      setNotFound(false);

      const candidates = buildSlugCandidates(location.pathname);
      let matchedPage: CmsPageItem | null = null;

      for (const candidate of candidates) {
        try {
          matchedPage = await fetchPageBySlug(candidate);
          break;
        } catch {
          matchedPage = null;
        }
      }

      let matchedSetting: SiteSettingRow<Record<string, unknown>> | null = null;
      if (location.pathname === '/kontak') {
        try {
          matchedSetting = await fetchSiteSettingByCategory<Record<string, unknown>>('contact');
        } catch {
          matchedSetting = null;
        }
      }

      if (!isMounted) {
        return;
      }

      setPage(matchedPage);
      setContactSetting(matchedSetting);
      setNotFound(!matchedPage && !matchedSetting);
      setIsLoading(false);
    }

    void loadPage();

    return () => {
      isMounted = false;
    };
  }, [location.pathname]);

  if (isLoading) {
    return <div className="flex min-h-[60vh] items-center justify-center text-lg text-gray-600">Memuat halaman...</div>;
  }

  if (notFound) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="max-w-xl rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-sm">
          <h1 className="mb-4 text-4xl font-bold text-[#0B1F3B]">Halaman Belum Diisi</h1>
          <p className="mb-6 text-gray-600">Konten untuk halaman ini belum tersedia di backend. Anda bisa mengisinya dari CMS admin atau menambahkan record page pada backend.</p>
          <Link to="/admin/pages" className="inline-flex rounded-full bg-[#C1121F] px-6 py-3 font-semibold text-white transition hover:bg-[#9A0E19]">
            Buka Halaman Admin
          </Link>
        </div>
      </div>
    );
  }

  const pageData = page?.data;
  const pageObject = getObject(pageData);
  const title = getString(pageObject?.title, page?.title || 'Halaman');
  const subtitle = getString(pageObject?.subtitle) || getString(pageObject?.description);
  const backgroundImage = getString(pageObject?.heroImage) || getString(pageObject?.image);
  const bodyHtml = getString(pageObject?.contentHtml) || getString(pageObject?.html) || getString(pageObject?.content) || getString(pageObject?.body);
  const sections = normalizeSections(pageData);

  return (
    <>
      <SEO
        title={`${title} - STTB`}
        description={subtitle || `Informasi ${title} STTB.`}
        ogImage={backgroundImage}
        path={location.pathname}
      />

      <PageHero title={title} subtitle={subtitle} backgroundImage={backgroundImage} />

      {bodyHtml && (
        <section className="bg-white py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <div
              className="prose prose-lg max-w-none prose-headings:text-[#0B1F3B] prose-p:text-gray-700 prose-li:text-gray-700"
              dangerouslySetInnerHTML={{ __html: bodyHtml }}
            />
          </div>
        </section>
      )}

      {sections.length > 0 && (
        <section className="bg-white py-16">
          <div className="container mx-auto max-w-5xl px-4 space-y-8">
            {sections.map((section) => (
              <article key={`${section.title}-${section.description ?? ''}`} className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
                <h2 className="mb-4 text-2xl font-bold text-[#0B1F3B]">{section.title}</h2>
                {section.description && <p className="mb-4 leading-relaxed text-gray-700">{section.description}</p>}
                {section.content && <p className="mb-4 leading-relaxed text-gray-700">{section.content}</p>}
                {section.items && section.items.length > 0 && (
                  <ul className="space-y-3 text-gray-700">
                    {section.items.map((item) => (
                      <li key={item} className="rounded-xl bg-white px-4 py-3 shadow-sm">{item}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      {renderContactBlocks(contactSetting)}
    </>
  );
}