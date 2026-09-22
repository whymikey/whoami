import { useRef, useState, useEffect } from "react";

const TRACKS = [
  {
    id: 1,
    title: "sinners",
    author: "Rodionis",
    link: "/music/Rodionis-sinners.mp3",
    image: "/images/sinners.jpg",
  },
  {
    id: 2,
    title: "japanese-lofi",
    author: "unknown",
    link: "/music/japanese-lofi.mp3",
    image: "/images/japanese-lofi.jpg",
  },
  {
    id: 3,
    title: "lofi",
    author: "unknown",
    link: "/music/lofi.mp3",
    image: "/images/lofi.jpg",
  },
];

export const MusicWidget = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIdTrack, setCurrentIdTrack] = useState(TRACKS[0].id);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    }
  }, [currentIdTrack]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
    }
  }, []);

  const currentTrack =
    TRACKS.find((track) => track.id === currentIdTrack) || TRACKS[0];

  const togglePlay = () => {
    if (!audioRef.current) return;

    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    const currentIndex = TRACKS.findIndex(
      (track) => track.id === currentTrack.id,
    );
    const nextIndex = currentIndex === TRACKS.length - 1 ? 0 : currentIndex + 1;
    setCurrentIdTrack(TRACKS[nextIndex].id);
  };

  const handlePrev = () => {
    const currentIndex = TRACKS.findIndex(
      (track) => track.id === currentTrack.id,
    );
    const prevIndex = currentIndex === 0 ? TRACKS.length - 1 : currentIndex - 1;
    setCurrentIdTrack(TRACKS[prevIndex].id);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    if (duration <= 0) return;
    setProgress((currentTime / duration) * 100);
  };

  return (
    <div className="w-80 backdrop-blur rounded-2xl p-4 bg-white/10 border border-white/20 shadow-2xl select-none">
      <img
        src={currentTrack.image}
        alt={currentTrack.title + currentTrack.author}
        className="w-54 h-54 mx-auto rounded-lg mb-4"
      ></img>
      <audio
        ref={audioRef}
        src={currentTrack.link}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleNext}
      ></audio>
      <div className="mb-4 text-center">
        <div className="text-white font-bold text-lg">{currentTrack.title}</div>
        <div className="text-white text-sm">{currentTrack.author}</div>
      </div>
      <div className="flex gap-1 mb-6 bg-white/5 p-2 rounded-lg">
        <div className="w-full h-0.5 backdrop-blur  bg-white/10 shadow-2xl">
          <div
            className="h-full bg-white"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <div className="flex justify-between items-center px-2">
        <button
          className="text-gray-400 hover:text-white transition-colors cursor-pointer"
          onClick={handlePrev}
        >
          <svg
            width="64px"
            height="64px"
            viewBox="0 0 24 24"
            className="w-4 h-4 text-gray-600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform="matrix(-1, 0, 0, 1, 0, 0)"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M16.6598 14.6474C18.4467 13.4935 18.4467 10.5065 16.6598 9.35258L5.87083 2.38548C4.13419 1.26402 2 2.72368 2 5.0329V18.9671C2 21.2763 4.13419 22.736 5.87083 21.6145L16.6598 14.6474Z"
                fill="#fff"
              ></path>
              <path
                d="M22.75 5C22.75 4.58579 22.4142 4.25 22 4.25C21.5858 4.25 21.25 4.58579 21.25 5V19C21.25 19.4142 21.5858 19.75 22 19.75C22.4142 19.75 22.75 19.4142 22.75 19V5Z"
                fill="#fff"
              ></path>
            </g>
          </svg>
        </button>
        <button
          onClick={togglePlay}
          className="w-12 h-12 backdrop-blur bg-white/10 border border-white/20 shadow-2xl rounded-full flex items-center justify-center cursor-pointer"
        >
          {isPlaying ? (
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 text-gray-600 pointer-events-none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V6Z"
                  fill="#fff"
                ></path>
                <path
                  d="M14 6C14 4.11438 14 3.17157 14.5858 2.58579C15.1716 2 16.1144 2 18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V6Z"
                  fill="#fff"
                ></path>
              </g>
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 text-gray-600 pointer-events-none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 5.90566C6 4.31607 7.77196 3.36671 9.08383 4.23847L18.1677 10.2763C19.3496 11.0617 19.3496 12.8258 18.1677 13.6111L9.08383 19.6489C7.77196 20.5207 6 19.5714 6 17.9818V5.90566Z"
                fill="#fff"
              ></path>
            </svg>
          )}
        </button>

        <button
          className="text-gray-400 hover:text-white transition-colors cursor-pointer"
          onClick={handleNext}
        >
          <svg
            width="64px"
            height="64px"
            viewBox="0 0 24 24"
            className="w-4 h-4 text-gray-600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M16.6598 14.6474C18.4467 13.4935 18.4467 10.5065 16.6598 9.35258L5.87083 2.38548C4.13419 1.26402 2 2.72368 2 5.0329V18.9671C2 21.2763 4.13419 22.736 5.87083 21.6145L16.6598 14.6474Z"
                fill="#fff"
              ></path>
              <path
                d="M22.75 5C22.75 4.58579 22.4142 4.25 22 4.25C21.5858 4.25 21.25 4.58579 21.25 5V19C21.25 19.4142 21.5858 19.75 22 19.75C22.4142 19.75 22.75 19.4142 22.75 19V5Z"
                fill="#fff"
              ></path>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};
