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
            content={<ProfileModalContents profile={profileData} />}
          />
        </h1>
        <p className="mt-4 ml-2 text-sm">
          <strong>{header.title}</strong> {header.summary}
        </p>
      </div>
    </header>
  );
}

const profileData = {
  name: "홍길동",
  role: "Frontend Developer",
  status: "seeking" as "seeking" | "hired" | "available",
  introduction: `안녕하세요! 사용자 경험을 중요시하는 프론트엔드 개발자입니다.

React와 TypeScript를 주로 사용하며, 새로운 기술을 배우는 것을 좋아합니다.
현재는 웹 접근성과 성능 최적화에 대해 깊이 공부하고 있습니다.

협업과 커뮤니케이션을 중요시하며, 팀원들과 함께 성장하는 것을 즐깁니다.`,
  hobbies: [
    "알고리즘 스터디",
    "테크 블로그 운영",
    "오픈소스 기여",
    "독서",
    "여행",
  ],
  languages: [
    { name: "한국어", level: "원어민" },
    { name: "영어", level: "비즈니스 레벨" },
    { name: "일본어", level: "일상 회화" },
  ],
};
