import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";

import { Products } from "./components/Products";

import { GlobalStyle } from "./styles/global";

export function App() {

  return (
    <>
     
      <Banner />
      <Hero />
      <Products />
      <Footer />

      <GlobalStyle />   
    </>
  );
}

