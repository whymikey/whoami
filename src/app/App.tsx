import "./App.css";
import { DesktopGrid } from "@/widgets/desktop-icons/ui";
import { WindowManager } from "@/widgets/window-manager/ui";
import { Dock } from "@/widgets/dock/ui";
import { MusicWidget } from "@/widgets/music-player/ui";

function App() {
  return (
    <main
      className="w-screen h-screen relative bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url('/images/wallpaper.jpg')` }}
    >
      <div className="absolute inset-0 bg-black/20 z-0 pointer-events-none"></div>
      <div className="relative z-10 w-full h-full flex flex-col">
        <div className="flex-1 relative">
          <DesktopGrid />
          <WindowManager />
          <Dock />
          <div className="absolute top-8 right-8 z-20">
            <MusicWidget />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
