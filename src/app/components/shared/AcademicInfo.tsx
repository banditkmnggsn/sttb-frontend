import { GraduationCap, Clock, BookOpen, CheckCircle } from 'lucide-react';

interface AcademicInfoProps {
  totalSks: string;
  duration: string;
  system: string;
  requirements?: string;
  additionalInfo?: string;
}

export function AcademicInfo({ totalSks, duration, system, requirements, additionalInfo }: AcademicInfoProps) {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-[#0B1F3B] mb-12 text-center">Informasi Akademik</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm border-t-4 card-hover hover:border-[var(--sttb-red-primary)] transition-colors">
            <BookOpen className="w-8 h-8 text-[var(--sttb-red-primary)] mb-4" />
            <h4 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-1">Total Beban</h4>
            <p className="text-2xl font-bold text-[var(--sttb-blue-dark)]">{totalSks}</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm border-t-4 card-hover hover:border-[var(--sttb-blue-bright)] transition-colors">
            <Clock className="w-8 h-8 text-[var(--sttb-blue-bright)] mb-4" />
            <h4 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-1">Masa Studi</h4>
            <p className="text-2xl font-bold text-[var(--sttb-blue-dark)]">{duration}</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm border-t-4 card-hover hover:border-[var(--sttb-red-primary)] transition-colors lg:col-span-2">
            <GraduationCap className="w-8 h-8 text-[var(--sttb-red-primary)] mb-4" />
            <h4 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-1">Sistem Perkuliahan</h4>
            <p className="text-lg font-medium text-[var(--sttb-blue-dark)] leading-snug">{system}</p>
          </div>
        </div>

        {(requirements || additionalInfo) && (
          <div className="bg-[var(--sttb-blue-light-bg)] p-8 rounded-xl border border-blue-100 flex flex-col md:flex-row gap-8 shadow-sm">
            {requirements && (
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-6 h-6 text-[var(--sttb-blue-bright)]" />
                  <h3 className="text-xl font-bold text-[var(--sttb-blue-dark)]">Persyaratan</h3>
                </div>
                <p className="leading-relaxed text-gray-700">{requirements}</p>
              </div>
            )}

            {additionalInfo && (
              <div className={`flex-1 ${requirements ? 'border-t md:border-t-0 md:border-l border-blue-200/60 pt-6 md:pt-0 md:pl-8' : ''}`}>
                <h3 className="text-xl font-bold text-[var(--sttb-blue-dark)] mb-3">Informasi Tambahan</h3>
                <p className="leading-relaxed text-gray-700">{additionalInfo}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
