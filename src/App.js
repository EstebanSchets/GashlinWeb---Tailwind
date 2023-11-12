import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import WebMobileSearch from "./pages/WebMobileSearch";
import WebMobile from "./pages/WebMobile";
import Web19201 from "./pages/Web19201";
import Group from "./pages/Group";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/webmobile":
        title = "";
        metaDescription = "";
        break;
      case "/webpc":
        title = "";
        metaDescription = "";
        break;
      case "/group-4":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<WebMobileSearch />} />
      <Route path="/webmobile" element={<WebMobile />} />
      <Route path="/webpc" element={<Web19201 />} />
      <Route path="/group-4" element={<Group />} />
    </Routes>
  );
}
export default App;
