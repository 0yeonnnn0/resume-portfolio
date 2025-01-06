import Header from "./components/Header";
import MainContent from "./components/MainContent";

export default function App() {
  const experiences = [
    {
      title: "Pawsome Day, Front-End Developer",
      company: "Global Problem-Based Learning",
      skills: [
        "React Native + Expo",
        "Typescript",
        "Zustand",
        "Figma",
        "Docker",
      ],
      location: "Irvine, CA",
      duration: "Sep 2024 - Dec 2024",
      details: [
        "Developed a mobile app to streamline communication between dog daycare centers and pet owners.",
        "Utilized React Native for its minimal learning curve.",
        "Implemented Zustand for state management.",
        "Collaborated with backend developers to ensure seamless integration.",
      ],
    },
    {
      title: "Duel, Full-Stack Developer",
      company: "Global Problem-Based Learning",
      skills: ["React", "Node.js", "AWS Lambda", "AWS API Gateway"],
      location: "Irvine, CA",
      duration: "Oct 2024 - Dec 2024",
      details: [
        "Developed a platform to streamline the creation of Quizlet decks by extracting key points from submitted videos, addressing the limitations of self-created questions and reducing manual effort.",
        "Enabled users to create and organize questions in just 8 minutes by submitting a video, reducing the process time by 96% compared to the traditional 120-minute workflow.",
        "Designed the AWS architecture diagram and contributed to backend development for efficient video data processing.",
        "Refactored the frontend codebase to enhance performance and maintainability.",
      ],
    },
    {
      title: "Devmon, Full-Stack Developer",
      company: "Global Problem-Based Learning",
      skills: ["React", "Typescript", "Node.js", "Express.js", "OpenAI API"],
      location: "Irvine, CA",
      duration: "Nov 2024 - Dec 2024",
      details: [
        "Built a platform to address the lack of explanations for coding test problems on 'Baekjoon,' a Korean platform known for its extensive collection of coding test questions.",
        "Delivered features such as recommended algorithms, detailed explanations, solution approaches, code samples, step-by-step breakdowns, space complexity analysis, and related problem suggestions.",
        "Independently developed the entire project and implemented prompt engineering to ensure accurate and well-structured outputs.",
      ],
    },
  ];
  return (
    <div className="bg-gray-200 flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-md rounded-md pt-2 px-6 m-auto w-[794px] h-[1123px]">
        <Header />
        <MainContent experiences={experiences} />
      </div>
    </div>
  );
}
