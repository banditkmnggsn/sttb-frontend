import { PageHero } from '../../components/shared/PageHero';
import { CTASection } from '../../components/shared/CTASection';

export function MagisterKepemimpinanPastoralPage() {
  return (
    <>
      <PageHero
        title="MAGISTER MINISTRI KEPEMIMPINAN PASTORAL"
        subtitle="Program Magister - 2 Tahun"
      />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a3a5c] mb-4">Magister Ministri Kepemimpinan Pastoral</h2>
          <p className="text-gray-700">Program untuk pengembangan kepemimpinan pastoral yang efektif.</p>
        </div>
      </section>
      <CTASection
        title="Daftar Sekarang"
        description="Kembangkan kepemimpinan pastoral Anda"
        primaryButton={{ text: 'Daftar', link: '/admisi' }}
      />
    </>
  );
}
