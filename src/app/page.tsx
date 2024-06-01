import Slider from "./component/Slider";
import Service from "./component/Service";
import About from "./component/About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <Slider />
      <Service />
      <About />
    </main>
  );
}
