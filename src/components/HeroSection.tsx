import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const images = [
  'https://cdn.poehali.dev/projects/c744ac22-8891-4578-9e55-2b4aa8f44d5e/files/3a373965-6915-42c4-8ff3-d97bbc0a1490.jpg',
  'https://cdn.poehali.dev/projects/c744ac22-8891-4578-9e55-2b4aa8f44d5e/files/5b617050-10c5-4782-8ea0-986cca63c56f.jpg',
  'https://cdn.poehali.dev/projects/c744ac22-8891-4578-9e55-2b4aa8f44d5e/files/5bfbb6c5-27e8-4a46-8edb-bc767beb098e.jpg',
  'https://cdn.poehali.dev/projects/c744ac22-8891-4578-9e55-2b4aa8f44d5e/files/0b2970fd-a244-4a2d-b921-cce0c18ab528.jpg',
];

const specializations = [
  'Психология',
  'Йога · 30 лет',
  'Авиационная психология',
  'Коучинг',
  'Профайлинг',
  'Духовная навигация',
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/65 to-black/20" />

      <div className="relative z-10 flex h-full items-start overflow-y-auto">
        <div className="container mx-auto px-8 md:px-16 py-16">
          <div className="flex max-w-2xl flex-col gap-6">
            {/* Portrait */}
            <div
              className={cn(
                'transform transition-all duration-1000 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-white/30 shadow-2xl md:h-48 md:w-48">
                <img
                  src="https://cdn.poehali.dev/projects/c744ac22-8891-4578-9e55-2b4aa8f44d5e/bucket/eda5a216-d425-45fb-9f7c-dde498e770bd.jpeg"
                  alt="Ветчанин Вадим Леонидович"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            {/* Name & title */}
            <div
              className={cn(
                'transform transition-all duration-1000 delay-300 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-light tracking-[0.3em] text-white/50 uppercase mb-3">
                    Практикующий психолог · Мастер йоги
                  </p>
                  <p className="text-3xl font-light text-white md:text-4xl lg:text-5xl leading-tight">
                    Ветчанин Вадим
                    <br />
                    <span className="text-white/70">Леонидович</span>
                  </p>
                </div>

                <p className="text-base font-light text-white/60 max-w-lg leading-relaxed">
                  Эксперт в области духовной навигации, профайлинга и авиационной психологии.
                  Помогаю людям и организациям находить устойчивость, ресурс и путь к росту.
                </p>

                {/* Specialization tags */}
                <div className="flex flex-wrap gap-2">
                  {specializations.map((spec) => (
                    <span
                      key={spec}
                      className="px-3 py-1 text-xs font-light tracking-wider text-white/70 border border-white/20 rounded-full backdrop-blur-sm"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* CTA & social */}
                <div className="flex items-center gap-6 pt-2">
                  <a
                    href="#contact"
                    className="px-6 py-3 bg-white text-black text-sm font-medium tracking-wider hover:bg-white/90 transition-colors"
                  >
                    Записаться на консультацию
                  </a>

                  <div className="flex gap-4">
                    <a
                      href="https://t.me/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/50 transition-colors hover:text-white"
                      aria-label="Telegram"
                    >
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                      </svg>
                    </a>
                    <a
                      href="https://vk.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/50 transition-colors hover:text-white"
                      aria-label="VKontakte"
                    >
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.745-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.12-5.339-3.202-2.17-3.043-2.763-5.32-2.763-5.788 0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.814-.542 1.27-1.422 2.18-3.625 2.18-3.625.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div
              className={cn(
                'transform transition-all duration-1000 delay-500 ease-out flex gap-8',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              {[
                { value: '30+', label: 'лет в йоге' },
                { value: '2009–2018', label: 'зав. кафедрой' },
                { value: '100+', label: 'авторских программ' },
              ].map((stat) => (
                <div key={stat.label} className="border-l border-white/20 pl-4">
                  <p className="text-xl font-light text-white">{stat.value}</p>
                  <p className="text-xs text-white/40 tracking-wider uppercase mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-px transition-all duration-300',
              currentIndex === index ? 'w-12 bg-white' : 'w-6 bg-white/30 hover:bg-white/50'
            )}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}