import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

import { Products } from "./components/Products";

import { GlobalStyle } from "./styles/global";

export function App() {

  

  return (
    <>
      <Navbar />
      <Banner />
      <Hero />
      <Products />
      <Footer />

      <GlobalStyle />   
    </>
  );
}

