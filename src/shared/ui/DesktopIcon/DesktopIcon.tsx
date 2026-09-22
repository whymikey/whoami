interface DesktopIconProps {
  label: string;
  icon: string;
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
      className="flex flex-col w-20 p-2 justify-center items-center hover:bg-white/10 rounded-md cursor-pointer transition-colors"
      onDoubleClick={onDoubleClick}
      onClick={onClick}
    >
      <span className="text-4xl mb-1 select-none">{icon}</span>
      <span className="text-xs text-white text-center drop-shadow-md break-word">
        {label}
      </span>
    </div>
  );
};
