import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./ScrollToTop";
import Header from "./Header";
import Footer from "./Footer";
import Myloader from "./Myloader";
import "./App.css";
import ReactGA from "react-ga";

const PagesList = React.lazy(() => import("./PagesList"));
const Page = React.lazy(() => import("./Page"));
const Category = React.lazy(() => import("./Category"));

function App() {
  const hostname = window.location.hostname;
  const initReactGA = () => {
    ReactGA.initialize("UA-85766558-1");
  };
  useEffect(() => {
    initReactGA();
    ReactGA.pageview(window.location.pathname);
  }, []);
  let baseName = "/learn/";
  // if (hostname == "localhost") {
  //   baseName = "/";
  // }

  return (
    <>
      <Router basename={baseName}>
        <Header />
        <Suspense fallback={<Myloader />}>
          <Routes>
            <Route path="/" element={<PagesList />}></Route>
            <Route path="/:category/:slug" element={<Page />} />
            <Route path="/:category/" element={<Category />} />
          </Routes>
          <ScrollToTop />
        </Suspense>
        <Footer />
      </Router>
    </>
  );
}
export default App;