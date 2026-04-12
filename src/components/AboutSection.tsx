const milestones = [
  { year: '1987', text: 'Начало пути в йоге — озд. группа ШЙГАС, г. Днепропетровск' },
  { year: '1996', text: 'Школа Русской Йоги (ШРЙ), г. Пермь' },
  { year: '1999', text: 'Квалификация «Инструктор Ха-Тха йоги» ШРЙ, г. Пермь' },
  { year: '2000', text: 'Куратор ШРЙ в городе Томск. Преподаватель. г. Пермь – г. Томск' },
  { year: '2009', text: 'Заведующий кафедрой Духовной навигации ИЙГАС, г. Москва – г. Екатеринбург' },
];

const credentials = [
  'Практикующий психолог',
  'Мастер йоги · 40+ лет',
  'Сертифицированный коуч',
  'Профайлер',
  'Бизнес-тренер',
  'Преподаватель АУЦ ГА',
  'Тренер по парапланеризму',
  'Специалист по нейропсихологии',
];

export default function AboutSection() {
  return (
    <section className="bg-white py-24 px-8 md:px-16">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — bio */}
          <div>
            <p className="text-xs tracking-[0.4em] text-black/30 uppercase mb-4">О Вадиме</p>
            <h2 className="text-3xl md:text-5xl font-light text-black leading-tight mb-8">
              Путь длиной
              <br />
              <span className="text-black/40">в 40 лет</span>
            </h2>

            <div className="space-y-5 text-[15px] font-light text-black/60 leading-relaxed">
              <p>
                Вадим Ветчанин — практикующий психолог, мастер йоги и признанный эксперт в области
                духовной навигации, профайлинга и авиационной психологии. Его путь начался в 1987 году,
                когда он впервые пришёл на занятия йогой в Днепропетровске.
              </p>
              <p>
                С 2009 по 2018 год возглавлял кафедру духовной навигации в Московском институте йоги,
                разрабатывал авторские программы интеграции восточных практик с современными
                психологическими подходами.
              </p>
              <p>
                В области гражданской авиации проводит тренинги для лётного и инженерно-технического
                состава, занимается подготовкой пилотов, уделяя особое внимание психологической
                устойчивости и безопасности полётов.
              </p>
              <p>
                Научные интересы охватывают нейропсихологию, квантовую психологию и философию
                квантовых переходов — интегрируя современную науку с традиционными духовными практиками.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-10 flex flex-wrap gap-2">
              {credentials.map((c) => (
                <span
                  key={c}
                  className="px-3 py-1.5 text-xs font-light tracking-wide text-black/50 border border-black/10 rounded-full"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Right — timeline */}
          <div>
            <p className="text-xs tracking-[0.4em] text-black/30 uppercase mb-8">Ключевые вехи</p>
            <div className="relative">
              <div className="absolute left-[52px] top-0 bottom-0 w-px bg-black/8" />
              <div className="space-y-0">
                {milestones.map((m, i) => (
                  <div key={i} className="flex gap-6 group pb-8 last:pb-0">
                    <div className="flex-shrink-0 w-[52px] text-right">
                      <span className="text-xs font-light text-black/30 group-hover:text-black/60 transition-colors">
                        {m.year}
                      </span>
                    </div>
                    <div className="relative flex-1 pl-6">
                      <div className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-black/20 group-hover:bg-black/50 transition-colors" />
                      <p className="text-sm font-light text-black/60 leading-relaxed">{m.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}