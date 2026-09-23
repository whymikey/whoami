import { useWindowStore } from "@/app/store/useWindowStore";
import { DesktopIcon } from "@/shared/ui/DesktopIcon";
import { motion } from "framer-motion";
import { Icon } from "@/shared/ui/Icon/Icon";

const DOCK_FILES = [
  { id: "1", label: "обо_мне.txt", iconId: "icon-txt" },
  { id: "2", label: "Работы", iconId: "icon-folder" },
  { id: "3", label: "Контакты", iconId: "icon-contacts" },
  { id: "4", label: "Корзина", iconId: "icon-bin" },
];

export const Dock = () => {
  const { windows, openWindow } = useWindowStore((state) => state);

  return (
    <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 max-w-[95vw] z-50">
      <div className="backdrop-blur-md rounded-2xl p-2 md:p-2 bg-white/10 border border-white/20 shadow-2xl overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
        <div className="flex gap-1 md:gap-4 items-center px-1">
          {DOCK_FILES.map((el) => {
            const isOpen = windows.some((win) => win.id === el.id);
            return (
              <div
                className="relative flex flex-col items-center shrink-0"
                key={el.id}
              >
                <motion.div
                  whileHover={{ scale: 1.1, y: -10 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-3xl shadow-lg"
                >
                  <DesktopIcon
                    label={el.label}
                    icon={<Icon name={el.iconId} />}
                    onClick={() => openWindow(el.id, el.label)}
                  />
                </motion.div>
                <div
                  className={`w-1 h-1 rounded-full mt-4 md:mt-2 transition-opacity duration-300 ${isOpen ? "bg-white/80" : "opacity-0"}`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
