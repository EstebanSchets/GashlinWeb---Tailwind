import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Web19201 from "./pages/Web19201";
import WebMobile from "./pages/WebMobile";
import WebMobileSearch from "./pages/WebMobileSearch";
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
        title = "Home Page"; // Set your page title
        metaDescription = "This is the home page description"; // Set your page description
        break;
      case "/webmobile":
        title = "Web Mobile Page";
        metaDescription = "Description for Web Mobile page";
        break;
      case "/webmobilesearch":
        title = "Web Mobile Search Page";
        metaDescription = "Description for Web Mobile Search page";
        break;
      case "/group-4":
        title = "Group 4 Page";
        metaDescription = "Description for Group 4 page";
        break;
      // Add more cases as needed for other routes

      
    }

    if (title) {
      document.title = title;
    }
  
    if (metaDescription) {
      const metaDescriptionTag = document.querySelector('head > meta[name="description"]');
      if (metaDescriptionTag) {
        (metaDescriptionTag as HTMLMetaElement).content = metaDescription;
      }
    }
  }, [pathname]);

  // Function to detect mobile device
  const isMobileDevice = () => {
    return /Mobi|Android/i.test(navigator.userAgent);
  };

  // Determine if the visitor is using a mobile device
  const isMobile = isMobileDevice();

  return (
    <Routes>
      <Route path="/" element={isMobile ? <WebMobile /> : <Web19201 />} />
      {/* Uncomment the lines below if you want to keep these routes accessible */}
       <Route path="/webmobile" element={<WebMobile />} />
      <Route path="/webmobilesearch" element={<WebMobileSearch />} />
      <Route path="/group-4" element={<Group />} /> 
    </Routes>
  );
}



export default App;
