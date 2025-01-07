import { ExperienceType } from "../../store/resumeStore";
import ExperienceItem from "./ExperienceItem";
import Section from "../atoms/Section";
import ExperienceModalContent from "./modals/ExperienceModalContent";

export default function Experience({
  experiences,
}: {
  experiences: ExperienceType[];
}) {
  return (
    <Section
      id="experience"
      title="Experience"
      content={<ExperienceModalContent projects={projectsData} />}
    >
      {experiences.map((exp, index) => (
        <ExperienceItem key={index} experience={exp} />
      ))}
    </Section>
  );
}

const projectsData = [
  {
    title: "포트폴리오 웹사이트",
    role: "Frontend Developer",
    organization: "개인 프로젝트",
    location: "Remote",
    period: {
      start: "2024.01",
      end: "2024.02",
    },
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    description:
      "개인 포트폴리오 웹사이트 개발\n- 반응형 디자인 구현\n- SEO 최적화\n- 성능 최적화",
    url: "https://github.com/username/portfolio",
  },
  {
    title: "실시간 채팅 애플리케이션",
    role: "Full Stack Developer",
    organization: "스타트업 A",
    location: "서울",
    period: {
      start: "2023.08",
      end: "2023.12",
    },
    skills: ["React", "Node.js", "Socket.io", "MongoDB", "AWS"],
    description:
      "실시간 채팅 서비스 개발 및 배포\n- WebSocket을 활용한 실시간 통신 구현\n- 사용자 인증 시스템 구축\n- AWS 인프라 구성 및 배포\n- 메시지 히스토리 관리 기능 구현",
    url: "https://chat-app-example.com",
  },
  {
    title: "온라인 쇼핑몰 리뉴얼",
    role: "Frontend Developer",
    organization: "기업 B",
    location: "부산",
    period: {
      start: "2023.03",
      end: "2023.07",
    },
    skills: ["React", "Redux", "TypeScript", "Styled-Components", "Jest"],
    description:
      "기존 레거시 코드 리팩토링 및 신규 기능 개발\n- 장바구니 및 결제 시스템 개선\n- 성능 최적화로 페이지 로딩 시간 50% 감소\n- 테스트 커버리지 80% 달성\n- 모바일 반응형 UI/UX 개선",
    url: "https://shopping-mall-example.com",
  },
];
