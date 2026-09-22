import { motion, AnimatePresence, useDragControls } from "framer-motion";
import { useWindowStore, type AppWindow } from "@/app/store/useWindowStore";
import { WindowFrame } from "@/shared/ui/WindowFrame/WindowFrame";
import { AboutMe } from "@/features/about-me/ui";
import { Portfolio } from "@/features/portfolio/ui";
import { Contacts } from "@/features/contacts/ui";

const AnimatedWindow = ({ win, index }: { win: AppWindow; index: number }) => {
  const closeWindow = useWindowStore((state) => state.closeWindow);
  const focusWindow = useWindowStore((state) => state.focusWindow);

  const dragControls = useDragControls();

  const renderWindowContent = (id: string) => {
    switch (id) {
      case "1":
        return <AboutMe />;
      case "2":
        return <Portfolio />;
      case "3":
        return <Contacts />;
      default:
        return <div>Приложение в разработке</div>;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 20 }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 200,
        opacity: { type: "tween", duration: 0.1 },
      }}
      drag
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      className="absolute pointer-events-auto"
      style={{
        zIndex: win.zIndex,
        top: `calc(20% + ${index * 30}px)`,
        left: `calc(20% + ${index * 30}px)`,
      }}
      onMouseDown={() => focusWindow(win.id)}
    >
      <WindowFrame
        title={win.title}
        onClose={() => closeWindow(win.id)}
        onDragStart={(e) => dragControls.start(e)}
      >
        <div className="h-full flex items-center justify-center text-gray-500">
          {renderWindowContent(win.id)}
        </div>
      </WindowFrame>
    </motion.div>
  );
};

export const WindowManager = () => {
  const windows = useWindowStore((state) => state.windows);

  return (
    <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
      <AnimatePresence>
        {windows.map((win, index) => (
          <AnimatedWindow key={win.id} win={win} index={index} />
        ))}
      </AnimatePresence>
    </div>
  );
};
