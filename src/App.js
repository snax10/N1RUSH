import { useState } from "react";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Products } from "./components/Products";
import { NewBuyModal } from './components/NewBuyModal';

import { GlobalStyle } from "./styles/global";

export function App() {
  const [count, setCount] = useState(0)

  function buyIncrement() {
    setCount(count + 1)
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
    
  function handleOpenModal() {
      setIsModalOpen(true);
  }

  function handleCloseModal() {
      setIsModalOpen(false);
  }


  return (
    <>
      <Navbar count = {count} />
      <Banner />
      <Hero />
      <Products increment={buyIncrement} openModal={handleOpenModal} />

      <NewBuyModal 
                isOpen = {isModalOpen}
                onRequestClose = {handleCloseModal}
            />
      <Footer />

      <GlobalStyle />   
    </>
  );
}

