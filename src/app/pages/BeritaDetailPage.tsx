import { useParams, Link } from 'react-router';
import { Calendar, ArrowLeft, User } from 'lucide-react';
import { SEO } from '../components/shared/SEO';
import { newsArticles } from '../data/newsData';

export function BeritaDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = newsArticles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#0B1F3B] mb-4">Artikel Tidak Ditemukan</h1>
          <Link to="/berita" className="text-[#2E90FF] hover:underline">
            Kembali ke Daftar Berita
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return date.toLocaleDateString('id-ID', options);
  };

  return (
    <>
      <SEO 
        title={`${article.title} - STTB`}
        description={article.excerpt}
        ogImage={article.image}
        path={`/berita/${article.slug}`}
        ogType="article"
      />

      {/* Hero Image Section */}
      <div className="relative h-[400px] md:h-[500px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${article.image})`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B1F3B]/90" />
        
        <div className="relative h-full container mx-auto px-4 flex items-end pb-12">
          <div className="max-w-4xl">
            <div className="mb-4">
              <span className="inline-block bg-[#C1121F] text-white px-4 py-2 rounded-full text-sm font-semibold">
                {article.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {article.title}
            </h1>
            <div className="flex items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <time dateTime={article.date}>{formatDate(article.date)}</time>
              </div>
              {article.author && (
                <div className="flex items-center gap-2">
                  <User size={18} />
                  <span>{article.author}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link 
              to="/berita" 
              className="inline-flex items-center gap-2 text-[#2E90FF] hover:text-[#C1121F] font-semibold mb-8 transition-colors"
            >
              <ArrowLeft size={20} />
              Kembali ke Daftar Berita
            </Link>

            {/* Article Body */}
            <div 
              className="prose prose-lg max-w-none
                prose-headings:text-[#0B1F3B] 
                prose-headings:font-bold
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                prose-ul:my-6 prose-ul:space-y-2
                prose-li:text-gray-700
                prose-strong:text-[#0B1F3B]
                prose-a:text-[#2E90FF] prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-[#0B1F3B] mb-4">Bagikan Artikel Ini</h3>
              <div className="flex gap-4">
                <button 
                  className="bg-[#2E90FF] hover:bg-[#1e7ff5] text-white px-6 py-3 rounded-lg transition-colors font-semibold"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: article.title,
                        text: article.excerpt,
                        url: window.location.href,
                      });
                    }
                  }}
                >
                  Bagikan
                </button>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-[#0B1F3B] mb-6">Berita Lainnya</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {newsArticles
                  .filter(a => a.slug !== article.slug)
                  .slice(0, 2)
                  .map((relatedArticle) => (
                    <Link 
                      key={relatedArticle.slug}
                      to={`/berita/${relatedArticle.slug}`}
                      className="group block bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={relatedArticle.image} 
                          alt={relatedArticle.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-gray-500 mb-2">{formatDate(relatedArticle.date)}</p>
                        <h4 className="font-bold text-[#0B1F3B] group-hover:text-[#C1121F] transition-colors line-clamp-2">
                          {relatedArticle.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
