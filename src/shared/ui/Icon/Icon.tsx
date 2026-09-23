interface IconProps {
  name: string;
  className?: string;
}

export const Icon = ({
  name,
  className = "w-12 h-12 text-white/90 drop-shadow-md",
}: IconProps) => {
  return (
    <svg className={className}>
      <use href={`/sprite.svg#${name}`} />
    </svg>
  );
};
