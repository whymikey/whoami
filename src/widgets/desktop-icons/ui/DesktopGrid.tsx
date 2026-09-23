import { DesktopIcon } from "@/shared/ui/DesktopIcon";
import { useWindowStore } from "@/app/store/useWindowStore";
import { motion, useDragControls } from "framer-motion";
import { useRef } from "react";
export const MOCK_FILES = [
  { id: "1", label: "обо_мне.txt", icon: "📄" },
  { id: "2", label: "Работы", icon: "📁" },
  { id: "3", label: "Контакты", icon: "👤" },
];

export const DesktopGrid = () => {
  const openWindow = useWindowStore((state) => state.openWindow);
  const desktopRef = useRef(null);
  return (
    <div
      ref={desktopRef}
      className="absolute top-0 left-0 bottom-30 right-2 md:right-95 flex flex-col flex-wrap gap-2 content-start p-4 pointer-events-none"
    >
      {MOCK_FILES.map((el) => (
        <motion.div
          drag
          dragConstraints={desktopRef}
          dragMomentum={false}
          key={el.id}
          className="w-fit cursor-grab active:cursor-grabbing pointer-events-auto"
        >
          <DesktopIcon
            label={el.label}
            icon={el.icon}
            onDoubleClick={() => openWindow(el.id, el.label)}
          />
        </motion.div>
      ))}
    </div>
  );
};
