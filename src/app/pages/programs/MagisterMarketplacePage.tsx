import { PageHero } from '../../components/shared/PageHero';
import { CTASection } from '../../components/shared/CTASection';

export function MagisterMarketplacePage() {
  return (
    <>
      <PageHero
        title="MAGISTER MINISTRI MARKETPLACE"
        subtitle="Program Magister - 2 Tahun"
      />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a3a5c] mb-4">Magister Ministri Marketplace</h2>
          <p className="text-gray-700">Program untuk pemimpin Kristen di dunia bisnis dan profesional.</p>
        </div>
      </section>
      <CTASection
        title="Daftar Sekarang"
        description="Integrasikan iman dan profesionalisme"
        primaryButton={{ text: 'Daftar', link: '/admisi' }}
      />
    </>
  );
}
