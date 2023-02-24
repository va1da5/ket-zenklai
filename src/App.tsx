import { useState } from "react";
import signs from "./assets/data.json";
import BottomNav from "./components/bottomNav";
import Container from "./components/container";
import Flashcards from "./components/flashcards";
import RandomCards from "./components/randomCards";
import Settings from "./components/settings";

function App() {
  const [view, setView] = useState("flashcards");

  return (
    <Container>
      <div className="flex h-full flex-col items-center gap-5 xs:pt-5 sm:pt-10 sm:pb-20">
        {view == "flashcards" && <Flashcards signs={signs} />}
        {view == "random" && <RandomCards signs={signs} />}
        {view == "settings" && <Settings />}
      </div>
      <BottomNav current={view} onChange={setView} />
    </Container>
  );
}

export default App;
