import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import background from "./assets/earth-bg.mp4";
function App() {
  return (
    <div className="">
      <div className="h-[700px] relative">
        <video
          src={background}
          type="video"
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
        ></video>
        <Navbar />
        <Hero />
      </div>
      {/* service section start  */}
      <Services/>
    </div>
  );
}

export default App;
