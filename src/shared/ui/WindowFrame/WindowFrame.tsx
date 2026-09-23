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
    <div className="w-full h-full md:w-[680px] md:h-[480px] bg-black/80 md:bg-black/40 backdrop-blur-xl md:border border-white/10 rounded-none md:rounded-xl shadow-2xl flex flex-col overflow-hidden text-gray-200">
      <div
        className="window-handle shrink-0 h-14 md:h-10 bg-white/5 border-b border-white/10 flex items-center px-4 md:px-4 relative select-none"
        onPointerDown={onDragStart}
        style={{ touchAction: "none" }}
      >
        <div className="flex gap-3 md:gap-2 z-10">
          <button
            onClick={onClose}
            className="w-4 h-4 md:w-3 md:h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 transition-colors"
          />
          <button className="w-4 h-4 md:w-3 md:h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 transition-colors" />
          <button className="w-4 h-4 md:w-3 md:h-3 rounded-full bg-[#27c93f] hover:bg-[#27c93f]/80 transition-colors" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none font-medium text-[15px] md:text-sm text-gray-300 md:text-gray-400">
          {title}
        </div>
      </div>

      <div className="flex-1 p-4 md:p-8 overflow-y-auto">{children}</div>
    </div>
  );
};