import { useState } from "react";

export const AboutMe = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex gap-6 items-start h-full">
      <div className="w-32 h-32 shrink-0 relative">
        {isLoading && (
          <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
        )}
        <img
          src="/images/avatar.jpg"
          alt="user avatar"
          onLoad={() => setIsLoading(false)}
          className={`object-cover w-full h-full rounded-2xl object-center transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
        />
      </div>
      <div className="flex flex-col gap-4 flex-1 min-w-0">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-white">Даниил Золотарёв</h1>
          <span className="text-gray-400">Frontend разработчик</span>
        </div>
        <ul className="flex flex-col gap-1.5 font-mono text-[14px]">
          <li className="flex">
            <span className="w-24 text-gray-400 ">Role:</span>
            <span className="text-[#35d7ef]">Frontend developer</span>
          </li>
          <li className="flex">
            <span className="w-24 text-gray-400">Status:</span>
            <span className="text-[#55e088] font-mono">
              доступен_для_проектов ✓
            </span>
          </li>
          <li className="flex">
            <span className="w-24 text-gray-400">Sleep:</span>
            <span className="text-[#f04d4d]">недоступен</span>
          </li>
          <li className="flex">
            <span className="w-24 text-gray-400">Location:</span>
            <span className="text-[#e2b714]">http://localhost:5173</span>
          </li>
          <li className="flex">
            <span className="w-24 text-gray-400">Ping:</span>
            <span className="text-[#c678dd]">12ms</span>
          </li>
          <li className="flex">
            <span className="w-24 text-gray-400">Fuel:</span>
            <span className="text-[#ff9800]">Энергетик ⚡</span>
          </li>
        </ul>
        <div className="text-[14px]">
          Junior Frontend-разработчик. Пишу на React/TypeScript, делаю ставку на
          архитектуру и интерактивный UX.
        </div>
        <div className="flex gap-4 flex-wrap items-center">
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
