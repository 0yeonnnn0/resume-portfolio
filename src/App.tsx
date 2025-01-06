import Header from "./components/Header";
import MainContent from "./components/MainContent";

export default function App() {
  return (
    <div className="bg-gray-200 flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-md pt-4 px-6 mb-12 m-auto w-[794px] md:h-[1123px]">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}
