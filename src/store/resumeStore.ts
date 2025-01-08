import { ContactType, HeaderType } from "@/types/profile.type";
import { create } from "zustand";

export interface ExperienceType {
  title: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  period: {
    start: string;
    end: string;
  };
  skills: string[];
  description: string[];
  url?: string;
}

export interface SkillType {
  category: string;
  items: string[];
}

export interface EducationType {
  institution: string;
  degree: string;
  major: string;
  location: string;
  duration: string;
  period?: {
    start: string;
    end: string;
  };
  status: "재학중" | "휴학중" | "졸업예정" | "졸업";
  gpa?: string;
  courses?: {
    name: string;
    description: string;
    grade?: string;
  }[];
  achievements?: {
    type: "award" | "scholarship" | "certification" | "project";
    title: string;
    date: string;
    description?: string;
  }[];
}

export interface OrganizationType {
  name: string;
  role: string;
  location: string;
  duration: string;
  details: string[];
}

interface ResumeStore {
  experiences: ExperienceType[];
  contact: ContactType;
  skills: SkillType[];
  education: EducationType[];
  organizations: OrganizationType[];
  header: HeaderType;
}

export const useResumeStore = create<ResumeStore>(() => ({
  experiences: [
    {
      title: "Pawsome Day",
      role: "Front-End Developer",
      company: "Global Problem-Based Learning",
      location: "Irvine, CA",
      duration: "Sep 2024 - Dec 2024",
      period: {
        start: "Sep 2024",
        end: "Dec 2024",
      },
      skills: [
        "React Native + Expo",
        "Typescript",
        "Zustand",
        "Figma",
        "Docker",
      ],
      description: [
        "Developed a mobile app to streamline communication between dog daycare centers and pet owners.",
        "Utilized React Native for its minimal learning curve.",
        "Implemented Zustand for state management.",
        "Collaborated with backend developers to ensure seamless integration.",
      ],
      url: "https://github.com/yourusername/pawsome-day",
    },
    {
      title: "Duel",
      role: "Full-Stack Developer",
      company: "Global Problem-Based Learning",
      location: "Irvine, CA",
      duration: "Oct 2024 - Dec 2024",
      period: {
        start: "Oct 2024",
        end: "Dec 2024",
      },
      skills: ["React", "Node.js", "AWS Lambda", "AWS API Gateway"],
      description: [
        "Developed a platform to streamline the creation of Quizlet decks by extracting key points from submitted videos.",
        "Enabled users to create and organize questions in just 8 minutes by submitting a video.",
        "Designed the AWS architecture diagram and contributed to backend development.",
        "Refactored the frontend codebase to enhance performance and maintainability.",
      ],
      url: "https://github.com/yourusername/duel",
    },
    {
      title: "Devmon",
      role: "Full-Stack Developer",
      company: "Global Problem-Based Learning",
      location: "Irvine, CA",
      duration: "Nov 2024 - Dec 2024",
      period: {
        start: "Nov 2024",
        end: "Dec 2024",
      },
      skills: ["React", "Typescript", "Node.js", "Express.js", "OpenAI API"],
      description: [
        "Built a platform to address the lack of explanations for coding test problems on 'Baekjoon'.",
        "Delivered features such as recommended algorithms, detailed explanations, and solution approaches.",
        "Independently developed the entire project and implemented prompt engineering.",
      ],
      url: "https://github.com/yourusername/devmon",
    },
  ],
  contact: {
    phone: "657-460-0918",
    email: "marco.dykim@gmail.com",
    githubId: "0yeonnnn0",
  },
  skills: [
    {
      category: "Languages",
      items: ["JavaScript", "TypeScript"],
    },
    {
      category: "Front-End",
      items: [
        "HTML",
        "CSS",
        "React",
        "React Native",
        "Expo",
        "Next.js",
        "TailwindCSS",
        "Zustand",
        "Redux",
      ],
    },
    {
      category: "Back-End",
      items: [
        "Node.js",
        "Express",
        "MongoDB",
        "Firebase",
        "AWS (EC2, S3, Lambda, API Gateway)",
      ],
    },
  ],
  education: [
    {
      institution: "Kookmin University",
      degree: "Bachelor of Science",
      major: "Computer Science",
      location: "Seoul, South Korea",
      duration: "Mar 2020 - Expected 2026",
      period: {
        start: "Mar 2020",
        end: "Expected 2026",
      },
      status: "재학중",
      gpa: "4.0/4.5",
      courses: [
        {
          name: "자료구조",
          description: "다양한 자료구조의 개념과 구현 방법 학습",
          grade: "A+",
        },
        {
          name: "알고리즘",
          description: "기본적인 알고리즘 설계 및 분석 방법론 학습",
          grade: "A+",
        },
        {
          name: "운영체제",
          description: "운영체제의 기본 개념과 구현 원리 학습",
          grade: "A",
        },
        {
          name: "데이터베이스",
          description: "관계형 데이터베이스 설계 및 SQL 학습",
          grade: "A",
        },
      ],
      achievements: [
        {
          type: "scholarship",
          title: "성적 우수 장학금",
          date: "2023-2",
          description: "학기 평점 4.3 이상 달성",
        },
        {
          type: "project",
          title: "학과 홈페이지 리뉴얼",
          date: "2023-1",
          description:
            "React와 TypeScript를 활용한 학과 홈페이지 개편 프로젝트 진행",
        },
        {
          type: "certification",
          title: "정보처리기사",
          date: "2023-08",
          description: "국가공인 자격증 취득",
        },
      ],
    },
    {
      institution: "Boin High School",
      degree: "High School Diploma",
      major: "Natural Sciences",
      location: "Seoul, South Korea",
      duration: "Mar 2017 - Feb 2020",
      period: {
        start: "Mar 2017",
        end: "Feb 2020",
      },
      status: "졸업",
      achievements: [
        {
          type: "award",
          title: "과학경시대회 금상",
          date: "2019-05",
          description: "교내 과학경시대회 물리 부문 1위",
        },
        {
          type: "project",
          title: "과학 동아리 회장",
          date: "2019",
          description: "과학 실험 및 연구 활동 주도, 교내 과학 축제 기획 및 운영",
        },
      ],
    },
  ],
  organizations: [
    {
      name: "KOSS",
      role: "Front-end Mentor, Team Leader",
      location: "Seoul, South Korea",
      duration: "Sep 2023 - Jun 2024",
      details: [
        "Led an advanced web development study group, organized and taught React and TypeScript.",
        "Guided the team to complete a project utilizing these technologies.",
        "Managed the 'Mogakko' study group, fostering collaboration among new members through coding sessions, exam preparation, and shared activities.",
        "Promoted active engagement in school-related events.",
      ],
    },
  ],
  header: {
    name: "Dongyeon (Marco) Kim",
    title: "Front-End Developer",
    summary:
      "skilled in building responsive web and mobile applications using React, React Native, and Next.js, with expertise in modern front-end tools such as TypeScript, Zustand, and TailwindCSS. Complementing my front-end focus, I have experience in backend development with Node.js, Express, and cloud platforms like AWS. I am committed to producing clean, maintainable code, leveraging scalable patterns, and delivering optimized solutions that enhance team productivity and application performance.",
  },
}));
