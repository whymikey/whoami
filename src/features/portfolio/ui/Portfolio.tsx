import { useState } from "react";

const projects = [
  {
    ld: 1,
    title: "resume",
    description:
      "Интерактивный оконный менеджер в браузере. Поддержка перетаскивания окон и файлов,",
    stack: ["React", "TypeScript", "Tailwind CSS", "Zustand", "Framer Motion"],
    gitHub: "./",
    vercelLink: "./",
    image: "https://i.ibb.co/tMPDZYbv/whoami.png",
  },
  {
    id: 2,
    title: "game library",
    description:
      "Каталог видеоигр с реализацией бесконечного скролла и динамическим роутингом страниц.",
    stack: ["React", "TypeScript", "Vite"],
    gitHub: "https://github.com/whymikey/game-library",
    vercelLink: "https://game-library-six-lyart.vercel.app/",
    image: "https://i.ibb.co/4R0YVHmW/game-Library.png",
  },
  {
    id: 3,
    title: "mesto",
    description:
      "SPA с возможностью редактирования профиля, управления карточками и полной интеграцией с REST API.",
    stack: ["JavaScript", "REST API"],
    gitHub: "https://github.com/whymikey/mesto",
    vercelLink: "https://mesto-lemon.vercel.app/",
    image: "https://i.ibb.co/wh9cD3Tr/Mesto.png",
  },
];

export const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="h-full overflow-y-auto p-6">
      <div className="grid grid-cols-1 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col md:flex-row items-start gap-6 bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <div className="shrink-0 overflow-hidden rounded-xl border border-white/10 w-full md:w-40 h-32 bg-black/20 relative">
              {isLoading && (
                <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
              )}
              <img
                src={project.image}
                alt={project.title}
                onLoad={() => setIsLoading(false)}
                className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${isLoading ? "opacity-0" : "opacity-100"}`}
              />
            </div>

            <div className="flex flex-col flex-1 min-w-0 h-full">
              <h3 className="text-2xl font-bold text-white mb-2 font-mono">
                {project.title}
              </h3>

              <p className="text-gray-300 leading-relaxed text-sm font-mono mb-4">
                {project.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-4 pt-2">
                {project.vercelLink && (
                  <a
                    href={project.vercelLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#35d7ef] hover:text-[#5ce4f8] font-mono text-sm no-underline flex items-center gap-1.5 transition-colors"
                  >
                    [ Live Demo ↗ ]
                  </a>
                )}

                {project.gitHub && (
                  <a
                    href={project.gitHub}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-white font-mono text-sm no-underline flex items-center gap-1.5 transition-colors"
                  >
                    [ GitHub ]
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
