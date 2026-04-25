import "./App.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Header from "./Components/header.component.jsx";
import Footer from "./Components/footer.component.jsx";
import ScrollToTop from "./Components/scrollToTop.component.jsx";
import ScrollToHash from "./Components/scrollToHash.component.jsx";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";

function App() {
  const location = useLocation();

  useEffect(() => {
    const revealElements = document.querySelectorAll("[data-reveal]");

    if (!revealElements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("reveal-in");
          currentObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.06,
        rootMargin: "0px 0px 8% 0px",
      },
    );

    revealElements.forEach((element) => {
      element.classList.add("reveal-ready");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <div className="App">
      <Header />
      <main className="page-container">
        <ScrollToTop />
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
