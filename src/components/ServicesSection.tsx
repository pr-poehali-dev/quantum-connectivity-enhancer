const services = [
  {
    icon: '🧠',
    title: 'Психологическое консультирование',
    description:
      'Индивидуальные консультации. Работа с семейными парами. Поиск и выявление внутренних ресурсов для формирования преобразований в зонах ближайшего роста. Мужско-женские отношения. Выход на новый уровень взаимодействий при высокой осознанности своей роли в семейной, групповой и любой социальной сферах.',
  },
  {
    icon: '🪷',
    title: 'Йога. Телесные практики.',
    description:
      'Йогатерапия. Практики реабилитации опорно-двигательного аппарата. Телесно-ориентированная терапия. Работа с родовыми травмами. Выявление и преобразование причинно-следственных ограничений человека. Индивидуальный подход и групповые форматы занятий.',
  },
  {
    icon: '✈️',
    title: 'Авиационная психология',
    description:
      'Тренинги и лекции для лётных экипажей, отработка взаимодействия в условиях работы для кабинных экипажей, подготовка инженерно-технического состава гражданской авиации. Профилактика выгорания, управление стрессом, конфликтология, управление ресурсами и авиационная безопасность.',
  },
  {
    icon: '🎯',
    title: 'Профайлинг. Диагностика профиля личности',
    description:
      'Диагностика устойчивости личности. Выявление ресурсов и изучение профиля личности. Разработка и применение форм и моделей эмоциональной и профессиональной устойчивости в природных условиях, профессиональных социальных проявлениях, семейных и групповых взаимодействиях.',
  },
  {
    icon: '🏢',
    title: 'Бизнес-консультирование. Коучинг.',
    description:
      'Антикризисное управление. Системный анализ организационных ресурсов. Психотипология команд и трансформация корпоративной культуры. Сопровождение процессов групповых преобразований. Оценка потенциала управленческих команд. Коучинг для собственников и руководителей бизнеса.',
  },
  {
    icon: '🧘',
    title: 'Мастер йоги. Путь развития ДУШИ.',
    description:
      'Авторские программы оздоровительных курсов и семинаров Ха-Тха ЙОГИ и Раджа ЙОГИ. Очистительные практики для физического тела. Методики очищения энергетических планов и потоков. Интеграция практик Духовного Развития и современной науки психологии и нейропсихологии. Программа «Духовной навигации».',
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