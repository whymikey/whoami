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
                <div className="absolute inset-0 bg-white/10 flex items-center justify-center">
                  <div role="status" className="text-center">
                    <svg
                      aria-hidden="true"
                      className="w-8 h-8 text-neutral-tertiary animate-spin fill-brand"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="cyan"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
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
