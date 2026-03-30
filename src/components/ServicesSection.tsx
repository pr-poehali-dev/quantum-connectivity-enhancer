const services = [
  {
    icon: '🧠',
    title: 'Психологическое консультирование',
    description:
      'Индивидуальные консультации и работа с семейными парами. Помогаю найти внутренние ресурсы, преодолеть кризис и выйти на новый уровень.',
  },
  {
    icon: '🪷',
    title: 'Йога и телесные практики',
    description:
      'Йогатерапия, реабилитация опорно-двигательного аппарата, телесно-ориентированная терапия. Индивидуальный и групповой форматы.',
  },
  {
    icon: '✈️',
    title: 'Авиационная психология',
    description:
      'Тренинги и лекции для лётного и инженерно-технического состава. Профилактика выгорания, управление стрессом, авиационная безопасность.',
  },
  {
    icon: '🎯',
    title: 'Коучинг и профайлинг',
    description:
      'Диагностика устойчивости личности, оценка потенциала управленческих команд, антикризисное управление и личностный коучинг.',
  },
  {
    icon: '🏢',
    title: 'Бизнес-консультирование',
    description:
      'Системный анализ организационных ресурсов, психотипология команд, трансформация корпоративной культуры и энергетическое сопровождение процессов.',
  },
  {
    icon: '🧘',
    title: 'Духовная навигация',
    description:
      'Авторские программы по Раджа-йоге, очистительным практикам, матрицам судьбы и квантовой психологии. Интеграция восточных практик и современной науки.',
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#0d0d0d] py-24 px-8 md:px-16">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs tracking-[0.4em] text-white/30 uppercase mb-4">Направления работы</p>
          <h2 className="text-3xl md:text-5xl font-light text-white leading-tight max-w-lg">
            Чем я могу
            <br />
            <span className="text-white/50">вам помочь</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-[#0d0d0d] p-8 hover:bg-white/[0.03] transition-colors duration-300"
            >
              <div className="text-3xl mb-6">{service.icon}</div>
              <h3 className="text-lg font-light text-white mb-4 leading-snug">{service.title}</h3>
              <p className="text-sm font-light text-white/40 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex items-center gap-8">
          <div className="h-px flex-1 bg-white/10" />
          <a
            href="#contact"
            className="px-8 py-4 border border-white/20 text-white/70 text-sm tracking-wider hover:border-white/50 hover:text-white transition-colors whitespace-nowrap"
          >
            Записаться на консультацию
          </a>
          <div className="h-px flex-1 bg-white/10" />
        </div>
      </div>
    </section>
  );
}
