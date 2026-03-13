import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { CourseTable } from './CourseTable';

type Course = {
  name: string;
  sks: number;
};

type CourseCategory = {
  title: string;
  description: string;
  sks: number;
  courses: Course[];
  variant?: 'red' | 'blue';
};

type CurriculumAccordionProps = {
  categories: CourseCategory[];
};

export function CurriculumAccordion({ categories }: CurriculumAccordionProps) {
  return (
    <section className="rounded-lg bg-white py-12 shadow-sm">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[var(--sttb-blue-dark)]">Daftar Kurikulum</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Klik setiap kategori untuk melihat detail mata kuliah dan total SKS.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {categories.map((category, index) => (
            <AccordionItem
              key={category.title}
              value={`item-${index}`}
              className="rounded-lg border-b-0 border-l-4 border-[#C1121F] bg-gray-50/50 px-2 shadow-sm transition-colors hover:bg-gray-50 sm:px-6"
            >
              <AccordionTrigger className="py-5 hover:no-underline">
                <div className="flex w-full flex-col justify-between gap-4 pr-4 text-left sm:flex-row sm:items-center">
                  <div>
                    <h4 className="text-lg font-bold text-[var(--sttb-blue-dark)] transition-colors group-hover:text-[var(--sttb-blue-bright)]">
                      {category.title}
                    </h4>
                    <p className="mt-1 text-sm font-normal leading-relaxed text-gray-500">
                      {category.description}
                    </p>
                  </div>
                  <span className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-blue-100 bg-[var(--sttb-blue-light-bg)] px-4 py-1.5 text-sm font-bold text-[var(--sttb-blue-bright)]">
                    {category.sks} SKS
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pt-2">
                <CourseTable
                  categoryTitle=""
                  courses={category.courses}
                  variant={category.variant || (index % 2 === 0 ? 'red' : 'blue')}
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
