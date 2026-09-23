import { useState } from "react";

export const AboutMe = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex flex-col md:flex-row gap-6 items-start h-full overflow-y-auto md:overflow-visible">
      
      <div className="w-32 h-32 shrink-0 relative mx-auto md:mx-0">
        {isLoading && (
          <div className="absolute inset-0 bg-white/10 flex items-center justify-center rounded-2xl">
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
          src="/images/avatar.jpg"
          alt="user avatar"
          onLoad={() => setIsLoading(false)}
          className={`object-cover w-full h-full rounded-2xl object-center transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
        />
      </div>
      
      <div className="flex flex-col gap-4 flex-1 min-w-0 text-center md:text-left">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-white">Даниил Золотарёв</h1>
          <span className="text-gray-400">Frontend разработчик</span>
        </div>
        
        <ul className="flex flex-col gap-1.5 font-mono text-[14px] text-left mx-auto md:mx-0 w-fit md:w-full">
          <li className="flex">
            <span className="w-24 text-gray-400 shrink-0">Role:</span>
            <span className="text-[#35d7ef]">Frontend developer</span>
          </li>
          <li className="flex">
            <span className="w-24 text-gray-400 shrink-0">Status:</span>
            <span className="text-[#55e088] font-mono">
              доступен_для_проектов ✓
            </span>
          </li>
          <li className="flex">
            <span className="w-24 text-gray-400 shrink-0">Sleep:</span>
            <span className="text-[#f04d4d]">недоступен</span>
          </li>
          <li className="flex">
            <span className="w-24 text-gray-400 shrink-0">Location:</span>
            <span className="text-[#e2b714] truncate">http://localhost:5173</span>
          </li>
          <li className="flex">
            <span className="w-24 text-gray-400 shrink-0">Ping:</span>
            <span className="text-[#c678dd]">12ms</span>
          </li>
          <li className="flex">
            <span className="w-24 text-gray-400 shrink-0">Fuel:</span>
            <span className="text-[#ff9800]">Энергетик ⚡</span>
          </li>
        </ul>
        
        <div className="text-[14px]">
          Frontend-разработчик. Пишу на React/TypeScript, делаю ставку на
          архитектуру и интерактивный UX.
        </div>
        
        <div className="flex gap-4 flex-wrap items-center justify-center md:justify-start">
          <span className="px-3 py-1 bg-transparent border border-[#35d7ef]/30 rounded-lg text-sm text-[#35d7ef] hover:bg-[#35d7ef]/10 hover:shadow-[0_0_8px_rgba(53,215,239,0.3)] transition-all cursor-default">
            React
          </span>
          <span className="px-3 py-1 bg-transparent border border-[#35d7ef]/30 rounded-lg text-sm text-[#35d7ef] hover:bg-[#35d7ef]/10 hover:shadow-[0_0_8px_rgba(53,215,239,0.3)] transition-all cursor-default">
            TypeScript
          </span>
          <span className="px-3 py-1 bg-transparent border border-[#35d7ef]/30 rounded-lg text-sm text-[#35d7ef] hover:bg-[#35d7ef]/10 hover:shadow-[0_0_8px_rgba(53,215,239,0.3)] transition-all cursor-default">
            Tailwind CSS
          </span>
          <span className="px-3 py-1 bg-transparent border border-[#35d7ef]/30 rounded-lg text-sm text-[#35d7ef] hover:bg-[#35d7ef]/10 hover:shadow-[0_0_8px_rgba(53,215,239,0.3)] transition-all cursor-default">
            Vite
          </span>
          <span className="px-3 py-1 bg-transparent border border-[#35d7ef]/30 rounded-lg text-sm text-[#35d7ef] hover:bg-[#35d7ef]/10 hover:shadow-[0_0_8px_rgba(53,215,239,0.3)] transition-all cursor-default">
            Zustand
          </span>
          <span className="px-3 py-1 bg-transparent border border-[#35d7ef]/30 rounded-lg text-sm text-[#35d7ef] hover:bg-[#35d7ef]/10 hover:shadow-[0_0_8px_rgba(53,215,239,0.3)] transition-all cursor-default">
            Framer Motion
          </span>
        </div>
      </div>
    </div>
  );
};
