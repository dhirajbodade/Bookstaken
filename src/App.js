import "./App.css";
import { BiArrowBack } from "react-icons/bi";
import NotFoundImg from "./404.png";



function App() {


  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div>
    <div className="flex-col min-h-screen text-center flex-center-center">
    <img src={NotFoundImg} alt="" className="w-[400px] -mt-20" />
    <h1 className="text-6xl font-bold opacity-50">Page Under Construction!</h1>
    <button
      className="gap-2 mt-4 btn btn-primary flex-center-center"
      onClick={handleGoBack}
    >
      <BiArrowBack />
      <span>go back</span>
    </button>
  </div>
    </div>
  );
}

export default App;
