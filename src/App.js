import React from "react";
import Home from "./Home";
import Features from "./Features";
import Contact from "./Contact";
import Header from "./Header";
import Footer from "./Footer";
import ContactButton from "./ContactButton";
import LandingPage from "./LandingPage";
import Woops404 from "./Woops404";
import { Route, Routes } from "react-router-dom";
import data from "./data/link-data.json";
import "./styles/App.css";

function App() {
  return (
    <>
      <div id="Container">
        <Routes>
          <Route
            path="/"
            element={
              <WebPage>
                <Home data={data}>
                  <ContactButton />
                </Home>
              </WebPage>
            }
          />
          <Route
            path=":feature"
            element={
              <WebPage>
                <Features data={data}>
                  <ContactButton />
                </Features>
              </WebPage>
            }
          />
          <Route
            path="/contact"
            element={
              <WebPage>
                <Contact />
              </WebPage>
            }
          />
          <Route
            path="*"
            element={
              <WebPage>
                <Woops404 />
              </WebPage>
            }
          />
          <Route path="/landing" element={<LandingPage />} />
        </Routes>
      </div>
    </>
  );
}

function WebPage({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default App;
