import Image from "next/image";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Buy from "./components/Buy";
import Plan from "./components/Plan";

export default function Home() {
  return (
    <div className=" container m-auto">
      <Navbar />
      <About />
    </div>
  );
}
