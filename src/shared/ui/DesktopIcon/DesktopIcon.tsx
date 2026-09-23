import type { ReactNode } from "react";

interface DesktopIconProps {
  label: string;
  icon: ReactNode;
  onDoubleClick?: () => void;
  onClick?: () => void;
}

export const DesktopIcon = ({
  label,
  icon,
  onDoubleClick,
  onClick,
}: DesktopIconProps) => {
  return (
    <div
      className="group flex flex-col w-20 md:w-24 p-2 justify-center items-center hover:bg-white/10 active:bg-white/20 rounded-lg cursor-pointer transition-all"
      onDoubleClick={onDoubleClick}
      onClick={onClick}
    >
      <span className="flex justify-center items-center mb-1 md:mb-2 select-none scale-90 md:scale-100 transition-transform group-active:scale-95">
        {icon}
      </span>
      <span className="text-[11px] md:text-xs text-white text-center drop-shadow-md break-words line-clamp-2 px-1">
        {label}
      </span>
    </div>
  );
};
