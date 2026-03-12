import { PageHero } from '../../components/shared/PageHero';
import { CTASection } from '../../components/shared/CTASection';

export function MagisterTeologiGerejawiPage() {
  return (
    <>
      <PageHero
        title="MAGISTER MINISTRI TEOLOGI & PELAYANAN GEREJAWI"
        subtitle="Program Magister - 2 Tahun"
      />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a3a5c] mb-4">Magister Ministri Teologi & Pelayanan Gerejawi</h2>
          <p className="text-gray-700">Program untuk pelayan gereja dengan fokus teologi praktis.</p>
        </div>
      </section>
      <CTASection
        title="Daftar Sekarang"
        description="Perkuat pelayanan gerejawi Anda"
        primaryButton={{ text: 'Daftar', link: '/admisi' }}
      />
    </>
  );
}
