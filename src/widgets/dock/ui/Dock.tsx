import { useWindowStore } from "@/app/store/useWindowStore";
import { DesktopIcon } from "@/shared/ui/DesktopIcon";
import { motion } from "framer-motion";

const DOCK_FILES = [
  { id: "1", label: "обо_мне.txt", icon: "📄" },
  { id: "2", label: "Работы", icon: "📁" },
  { id: "3", label: "Контакты", icon: "👤" },
  { id: "4", label: "Корзина", icon: "🗑️" },
];

export const Dock = () => {
  const { windows, openWindow } = useWindowStore((state) => state);
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
      <div className="backdrop-blur rounded-2xl p-2 bg-white/10 border border-white/20 shadow-2xl">
        <div className="flex gap-4">
          {DOCK_FILES.map((el) => {
            const isOpen = windows.some((win) => win.id === el.id);
            return (
              <div className="relative flex flex-col items-center" key={el.id}>
                <motion.div
                  whileHover={{ scale: 1.1, y: -10 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="w-14 h-14 flex items-center justify-center text-3xl shadow-lg"
                >
                  <DesktopIcon
                    label={el.label}
                    icon={el.icon}
                    onClick={() => openWindow(el.id, el.label)}
                  />
                </motion.div>
                <div
                  className={` w-1 h-1 rounded-full mt-2 transition-opacity duration-300 ${isOpen ? "bg-white/80" : "opacity-0"}`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
