import { useState, useEffect } from "react";

export const CalendarWidget = () => {
  const [date, setDate] = useState(new Date());
  const dayNumber = date.getDate();
  const monthName = date.toLocaleString("ru-RU", { month: "long" });
  const dayName = date.toLocaleString("ru-RU", { weekday: "long" });
  const formattedMonth = monthName.charAt(0).toUpperCase() + monthName.slice(1);
  const timeString = date.toLocaleTimeString("ru-RU");

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-80 backdrop-blur rounded-2xl p-5 bg-white/10 border border-white/20 shadow-2xl select-none flex flex-col relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#35d7ef]/20 blur-3xl rounded-full pointer-events-none -z-10"></div>

      <div className="flex items-center  justify-center gap-4 mb-2">
        <span className="text-6xl font-bold text-white tracking-tighter leading-none">
          {dayNumber}
        </span>

        <div className="flex flex-col justify-center">
          <span className="text-lg font-medium text-white leading-tight">
            {formattedMonth}
          </span>
          <span className="text-sm text-gray-400 leading-tight">{dayName}</span>
        </div>
      </div>

      <div className="w-full h-px bg-white/10 my-3"></div>

      <div className="flex justify-center w-full">
        <span className="text-3xl text-white font-mono tracking-widest">
          {timeString}
        </span>
      </div>
    </div>
  );
};
