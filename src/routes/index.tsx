import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/pages/home";
import About from "../components/pages/about";
import Skills from "../components/pages/skills";
import Projects from "../components/pages/projects";
import Layout from "../components/templates/layout";

const AppRoutes = () => {
  return (
    <Router
    future={{
      v7_startTransition: true,
    }}
    >
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
