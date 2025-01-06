import Organization from "./Organization";
import Skills from "./Skills";
import Education from "./Education";
import Contact from "./Contact";
import Experience from "./organisms/Experience";
import { useResumeStore } from "../store/resumeStore";

export default function MainContent() {
  const experiences = useResumeStore((state) => state.experiences);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="bg-white py-2 px-2 max-w-[794px] w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-3">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-4 flex flex-col gap-3">
            <Experience experiences={experiences} />
            <Organization />
          </div>
          {/* Right Column */}
          <div>
            <Contact />
            <Skills />
            <Education />
          </div>
        </div>
      </div>
    </div>
  );
}
