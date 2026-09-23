import { useState } from "react";

const contactLinks = [
  {
    id: "telegram",
    name: "Telegram",
    handle: "@dnl_zlt",
    icon: "/images/telegram.png",
    handleColor: "text-[#35d7ef]",
    iconBg: "bg-[#35d7ef]/10",
    borderColor: "border-[#35d7ef]/20",
    hoverBorder: "hover:border-[#35d7ef]/50",
    link: "https://t.me/dnl_zlt",
  },
  {
    id: "github",
    name: "GitHub",
    handle: "@whymikey",
    description: "код, пет-проекты, опенсорс",
    icon: "/images/github.png",
    handleColor: "text-[#ff4b72]",
    iconBg: "bg-[#ff4b72]/10",
    borderColor: "border-[#ff4b72]/20",
    hoverBorder: "hover:border-[#ff4b72]/50",
    link: "https://github.com/whymikey",
  },
  {
    id: "email",
    name: "Email",
    handle: "hello@example.com",
    description: "для официального и подробного",
    icon: "/images/mail.png",
    handleColor: "text-[#a855f7]",
    iconBg: "bg-[#a855f7]/10",
    borderColor: "border-[#a855f7]/20",
    hoverBorder: "hover:border-[#a855f7]/50",
    link: "mailto:hello@example.com",
  },
];
export const Contacts = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleClick = (e: React.MouseEvent, item: (typeof contactLinks)[0]) => {
    if (item.id === "email") {
      e.preventDefault();
      navigator.clipboard.writeText(item.handle);
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <div className="h-full p-4 md:p-6 flex flex-col items-center md:justify-center overflow-y-auto">
      <div className="w-full max-w-md flex flex-col gap-3 md:gap-4">
        {contactLinks.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => handleClick(e, item)}
            className={`flex items-center p-3 md:p-4 rounded-2xl w-full bg-[#0a0a0c]/80 backdrop-blur-md border ${item.borderColor} ${item.hoverBorder} transition-all duration-300 group no-underline cursor-pointer`}
          >
            <div
              className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex shrink-0 items-center justify-center text-xl md:text-2xl ${item.iconBg}`}
            >
              <img
                src={item.icon}
                alt={item.name}
                className="w-6 h-6 md:w-7 md:h-7 object-contain opacity-90"
              />
            </div>

            <div className="flex flex-col ml-3 md:ml-4 flex-1 min-w-0">
              <span className="text-white font-bold font-mono text-[14px] md:text-[15px] mb-0.5">
                {item.name}
              </span>
              <span
                className={`${item.handleColor} font-mono text-[12px] md:text-[13px] truncate`}
              >
                {item.handle}
              </span>
              <span className="text-gray-500 font-mono text-[11px] md:text-[12px] mt-0.5 md:mt-1 truncate">
                {item.description}
              </span>
            </div>

            <div className="shrink-0 ml-2 md:ml-4 flex items-center">
              <span className="text-[#55e088] font-mono text-[11px] md:text-[13px] flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                {copiedId === item.id ? "✓ copied" : ""}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
