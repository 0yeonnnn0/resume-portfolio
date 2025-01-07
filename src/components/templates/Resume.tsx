import Header from "../organisms/Header";
import MainContent from "../organisms/MainContent";

export default function Resume() {
  return (
    <div className="bg-gray-200 flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-md pt-4 pl-4 pr-6 mb-12 m-auto w-[794px] md:h-[1123px]">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}
