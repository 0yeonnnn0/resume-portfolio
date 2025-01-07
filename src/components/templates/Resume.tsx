import Header from "../organisms/Header";
import MainContent from "../organisms/MainContent";

export default function Resume() {
  return (
    <div className="bg-gray-200 flex justify-center items-center min-h-screen pb-6">
      <div className="bg-white shadow-md w-full max-w-[877px] relative">
        <div className="pb-[141.4%]" />
        <div className="absolute top-0 left-0 w-full h-full pt-4 pl-4 pr-5">
          <Header />
          <MainContent />
        </div>
      </div>
    </div>
  );
}
