import { useResumeStore } from "../store/resumeStore";

export default function Header() {
  const header = useResumeStore((state) => state.header);

  return (
    <header className="text-black px-2">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold">{header.name}</h1>
        <p className="mt-4 text-sm">
          <strong>{header.title}</strong> {header.summary}
        </p>
      </div>
    </header>
  );
}
