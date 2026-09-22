import type { ReactNode } from "react";

interface WindowFrameProps {
  title: string;
  children: ReactNode;
  onClose: () => void;
  onDragStart?: (e: React.PointerEvent<HTMLDivElement>) => void;
}

export const WindowFrame = ({
  title,
  children,
  onClose,
  onDragStart,
}: WindowFrameProps) => {
  return (
    <div className="w-170 h-120 bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl flex flex-col overflow-hidden text-gray-200">
      <div
        className="window-handle h-10 bg-white/5 border-b border-white/10 flex items-center px-4 relative select-none"
        onPointerDown={onDragStart}
        style={{ touchAction: "none" }}
      >
        <div className="flex gap-2 z-10">
          <button
            onClick={onClose}
            className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 transition-colors"
          />
          <button className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 transition-colors" />
          <button className="w-3 h-3 rounded-full bg-[#27c93f] hover:bg-[#27c93f]/80 transition-colors" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none font-medium text-sm text-gray-400">
          {title}
        </div>
      </div>

      <div className="flex-1 p-8 overflow-y-auto">{children}</div>
    </div>
  );
};
