interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <h2 className="text-2xl font-semibold mb-2 border-b-2 border-black pb-2">
      {title}
    </h2>
  );
}
