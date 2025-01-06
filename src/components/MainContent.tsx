import Experience from "./Experience";
import Organization from "./Organization";
import Skills from "./Skills";
import Education from "./Education";
import Contact from "./Contact";

export default function MainContent({ experiences }: { experiences: any[] }) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="bg-white rounded-md py-4 px-2 max-w-[794px] w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-4">
            <Experience experiences={experiences} />
            <Organization />
          </div>
          {/* Right Column */}
          <div className="space-y-8">
            <Contact />
            <Skills />
            <Education />
          </div>
        </div>
      </div>
    </div>
  );
}
