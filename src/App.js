import "./App.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
