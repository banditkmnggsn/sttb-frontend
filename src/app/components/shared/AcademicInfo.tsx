import { GraduationCap, Clock, BookOpen, FileText } from 'lucide-react';

interface AcademicInfoProps {
  totalSks: string;
  duration: string;
  system: string;
  requirements?: string;
  additionalInfo?: string;
}

export function AcademicInfo({ totalSks, duration, system, requirements, additionalInfo }: AcademicInfoProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#0B1F3B] mb-12 text-center">Informasi Akademik</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#C1121F]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#C1121F]/10 rounded-full flex items-center justify-center">
                <BookOpen className="text-[#C1121F]" size={24} />
              </div>
              <h3 className="font-bold text-[#0B1F3B]">Jumlah Kredit</h3>
            </div>
            <p className="text-3xl font-bold text-[#C1121F]">{totalSks}</p>
            <p className="text-sm text-gray-600 mt-1">Total SKS</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#0B1F3B]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#0B1F3B]/10 rounded-full flex items-center justify-center">
                <Clock className="text-[#0B1F3B]" size={24} />
              </div>
              <h3 className="font-bold text-[#0B1F3B]">Masa Studi</h3>
            </div>
            <p className="text-3xl font-bold text-[#0B1F3B]">{duration}</p>
            <p className="text-sm text-gray-600 mt-1">Durasi program</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#2E90FF]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#2E90FF]/10 rounded-full flex items-center justify-center">
                <GraduationCap className="text-[#2E90FF]" size={24} />
              </div>
              <h3 className="font-bold text-[#0B1F3B]">Sistem</h3>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">{system}</p>
          </div>

          {requirements && (
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#0B1F3B]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#0B1F3B]/10 rounded-full flex items-center justify-center">
                  <FileText className="text-[#0B1F3B]" size={24} />
                </div>
                <h3 className="font-bold text-[#0B1F3B]">Persyaratan</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{requirements}</p>
            </div>
          )}
        </div>

        {additionalInfo && (
          <div className="max-w-4xl mx-auto mt-8 bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 leading-relaxed">{additionalInfo}</p>
          </div>
        )}
      </div>
    </section>
  );
}
