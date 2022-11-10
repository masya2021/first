// import logo from "./logo.svg";
import "./App.css";

// import { container } from "./container/container";
import { Header } from "./components/header/header";
import { Home } from "./components/home/home";
import { Information } from "./components/information/information"
import { Skills } from "./components/skills/skills";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Information />
      <Skills />
    </>
  );
}

export default App;
