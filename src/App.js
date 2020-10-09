import React from "react";
import Home from "./Home";
import Features from "./Features";
import Contact from "./Contact";
import Header from "./Header";
import Footer from "./Footer";
import ContactButton from "./ContactButton";
import Woops404 from "./Woops404";
import { Route, Routes } from "react-router-dom";
import data from "./data/link-data.json";
import "./styles/App.css";

function App() {
  return (
    <div id="Container">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <Home data={data}>
              <ContactButton />
            </Home>
          }
        />
        <Route
          path=":feature"
          element={
            <Features data={data}>
              <ContactButton />
            </Features>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Woops404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
