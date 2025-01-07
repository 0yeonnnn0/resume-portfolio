import { useResumeStore } from "../../store/resumeStore";
import { HoverHighlight } from "../atoms/HoverHighlight";
import { Modal } from "../atoms/Modal";
import { ProfileDialogContent } from "../atoms/profile/ProfileModalContent";

export default function Header() {
  const header = useResumeStore((state) => state.header);

  return (
    <header className="text-black px-2">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold inline-block">
          <Modal
            title="프로필 정보"
            trigger={<HoverHighlight>{header.name}</HoverHighlight>}
            content={<ProfileDialogContent header={header} />}
          />
        </h1>
        <p className="mt-4 ml-2 text-sm">
          <strong>{header.title}</strong> {header.summary}
        </p>
      </div>
    </header>
  );
}
