export default function ContactSection() {
  return (
    <section className="bg-[#0d0d0d] py-24 px-8 md:px-16">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
          <div>
            <p className="text-xs tracking-[0.4em] text-white/30 uppercase mb-4">Контакты</p>
            <h2 className="text-3xl md:text-5xl font-light text-white leading-tight">
              Запишитесь
              <br />
              <span className="text-white/50">на консультацию</span>
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            <a
              href="tel:+79226135972"
              className="group flex items-center gap-4"
            >
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center group-hover:border-white/50 transition-colors">
                <svg className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-white/30 tracking-wider uppercase mb-1">Телефон</p>
                <p className="text-xl font-light text-white group-hover:text-white/80 transition-colors">
                  +7 922 613-59-72
                </p>
              </div>
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between">
          <p className="text-xs text-white/20 font-light">© 2026 Ветчанин Вадим Леонидович</p>
          <p className="text-xs text-white/20 font-light">Психолог · Мастер йоги · Коуч</p>
        </div>
      </div>
    </section>
  );
}
