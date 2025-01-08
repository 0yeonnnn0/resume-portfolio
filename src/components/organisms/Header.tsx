import { useResumeStore } from "@/store/resumeStore";
import { HoverHighlight } from "@/components/atoms/shared/HoverHighlight";
import ProfileModalContents from "@/components/molecules/modals/ProfileModalContents";
import { Modal } from "@/components/atoms/modals/Modal";

export default function Header() {
  const header = useResumeStore((state) => state.header);

  return (
    <header className="text-black px-2">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold inline-block">
          <Modal
            trigger={<HoverHighlight>{header.name}</HoverHighlight>}
            content={<ProfileModalContents profile={header} />}
          />
        </h1>
        <p className="mt-4 ml-2 text-sm">
          <strong>{header.role}</strong> {header.summary}
        </p>
      </div>
    </header>
  );
}
