import Gamepad from "./components/gamepad";
import Header from "./components/header";

export default function Home() {
  return (
    <main className="">
      <Header />
      <div className="fixed top-0 left-0 w-full h-full flex justify-center">
        <Gamepad />
      </div>
    </main>
  );
}
