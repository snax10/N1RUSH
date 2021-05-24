import outriders from '../../assets/product-outriders.svg'
import cyberpunk from '../../assets/product-cyberpunk2077.svg'
import donkey from '../../assets/product-donkey-kong-country-tropical-freeze.svg'


import Modal from 'react-modal';
import { Container } from "./styles";
import { useState } from 'react';
import { NewBuyModal } from '../NewBuyModal';

Modal.setAppElement('#root'); //Acessibilidade


export function Products() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    function handleOpenModal() {
        setIsModalOpen(true);
    }

    function handleCloseModal() {
        setIsModalOpen(false);
    }

    return(
        <Container>
                <h3>Produtos em destaque</h3>
            <section>
                <div>
                    <img src={outriders} />
                    <footer>
                        <p>Outriders</p>
                        <h6>R$ 200,00</h6>
                        <button 
                        type="button"
                        onClick={handleOpenModal}
                        >
                            COMPRAR
                        </button>
                    </footer>
                </div>
                <div>
                    <img src={cyberpunk} />
                    <footer>
                        <p>CYBERPUNK 2077</p>
                        <h6>R$ 200,00</h6>
                        <button 
                        type="button"
                        onClick={handleOpenModal}
                        >
                            COMPRAR
                        </button>
                    </footer>
                </div>
                <div>
                    <img src={donkey} />
                    <footer>
                        <p>Donkey Kong Country Tropical Freeze</p>
                        <h6>R$ 200,00</h6>
                        <button 
                        type="button" 
                        onClick={handleOpenModal}
                        >
                            COMPRAR
                        </button>
                    </footer>
                </div>
            </section>   

            <NewBuyModal 
                isOpen = {isModalOpen}
                onRequestClose = {handleCloseModal}
            />
           
        </Container>
    )
}