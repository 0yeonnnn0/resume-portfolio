interface HoverHighlightProps {
  children: React.ReactNode;
  className?: string;
}

export function HoverHighlight({
  children,
  className = "",
}: HoverHighlightProps) {
  return (
    <span
      className={`transition-all duration-300 hover:bg-gray-200/70 py-1 px-3 rounded cursor-pointer ${className}`}
    >
      {children}
    </span>
  );
}
