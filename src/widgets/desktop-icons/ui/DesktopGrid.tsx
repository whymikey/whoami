import { DesktopIcon } from "@/shared/ui/DesktopIcon";
import { useWindowStore } from "@/app/store/useWindowStore";

export const MOCK_FILES = [
  { id: "1", label: "обо_мне.txt", icon: "📄" },
  { id: "2", label: "Работы", icon: "📁" },
  { id: "3", label: "Контакты", icon: "👤" },
];

export const DesktopGrid = () => {
  const openWindow = useWindowStore((state) => state.openWindow);

  return (
    <div className="flex flex-col flex-wrap gap-2 h-full content-start pt-4 px-2">
      {MOCK_FILES.map((el) => (
        <DesktopIcon
          key={el.id}
          label={el.label}
          icon={el.icon}
          onDoubleClick={() => openWindow(el.id, el.label)}
        />
      ))}
    </div>
  );
};
