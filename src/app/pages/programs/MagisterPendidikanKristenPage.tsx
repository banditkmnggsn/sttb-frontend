import { PageHero } from '../../components/shared/PageHero';
import { CTASection } from '../../components/shared/CTASection';

export function MagisterPendidikanKristenPage() {
  return (
    <>
      <PageHero
        title="MAGISTER PENDIDIKAN KRISTEN"
        subtitle="Program Magister (M.Pd.K) - 2 Tahun"
      />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a3a5c] mb-4">Magister Pendidikan Kristen</h2>
          <p className="text-gray-700">Program untuk pendidik Kristen profesional tingkat lanjut.</p>
        </div>
      </section>
      <CTASection
        title="Daftar Sekarang"
        description="Tingkatkan karir Anda di bidang pendidikan Kristen"
        primaryButton={{ text: 'Daftar', link: '/admisi' }}
      />
    </>
  );
}
