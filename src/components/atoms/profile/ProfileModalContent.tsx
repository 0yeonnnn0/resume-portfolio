import { HeaderType } from "@/types/profile.type";

interface ProfileDialogContentProps {
  header: HeaderType;
}

export function ProfileDialogContent({ header }: ProfileDialogContentProps) {
  return (
    <div className="py-4">
      <p className="mb-4">이름: {header.name}</p>
      <p className="mb-4">직책: {header.title}</p>
      <p className="mb-4">소개: {header.summary}</p>
    </div>
  );
}
