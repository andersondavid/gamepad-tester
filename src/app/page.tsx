import Gamepad from "./components/gamepad";
import Header from "./components/header";
import Headline from "./components/main/headline";
import PressAny from "./components/main/secondLine";

export default function Home() {
  return (
    <main className="">
      <Header />
      <div className="fixed top-0 left-0 w-full h-full flex justify-center">
        <Headline />
      </div>
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2">
        <Gamepad />
      </div>
      <div className="fixed bottom-1/4 w-full">
        <div className="flex justify-between max-w-screen-xl m-auto">
          <PressAny />
          <PressAny />
        </div>
      </div>
    </main>
  );
}
