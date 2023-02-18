import { useState, useEffect } from "react";
import { useLocalStorage, useMedia } from "react-use";
import signs from "./assets/data.json";
import BottomNav from "./components/bottomNav";
import Container from "./components/container";
import Flashcards from "./components/flashcards";
import RandomCards from "./components/randomCards";
import Settings from "./components/settings";

function App() {
  const [view, setView] = useState("flashcards");
  const [theme, setTheme] = useState("light");
  const [themePersist, setThemePersist, ThemePersist] = useLocalStorage<string>(
    "__flashcards_theme",
    "light"
  );

  useEffect(() => {
    setThemePersist(theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      return;
    }
    document.documentElement.classList.remove("dark");
  }, [theme]);

  useEffect(() => {
    setTheme(themePersist || "light");
  }, []);

  return (
    <Container>
      <div className="mx-auto mb-10 flex flex-col items-center gap-5 rounded-xl pt-10 md:pb-20">
        {view == "flashcards" && <Flashcards signs={signs} />}
        {view == "random" && <RandomCards signs={signs} />}
        {view == "settings" && (
          <Settings
            theme={theme}
            onThemeChange={() => {
              setTheme((current) => (current === "light" ? "dark" : "light"));
            }}
          />
        )}
      </div>
      <BottomNav current={view} onChange={setView} />
    </Container>
  );
}

export default App;
