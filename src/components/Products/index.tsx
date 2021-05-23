import outriders from '../../assets/product-outriders.svg'
import cyberpunk from '../../assets/product-cyberpunk2077.svg'
import donkey from '../../assets/product-donkey-kong-country-tropical-freeze.svg'
import mario from '../../assets/mario.svg'

import Modal from 'react-modal';
import { Container, Content } from "./styles";
import { useState } from 'react';

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
            <Content>
                <h3>Produtos em destaque</h3>
            <section>
                <div>
                    <img src={outriders} />
                    <footer>
                        <p>Outriders</p>
                        <p>R$ 200,00</p>
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
                        <p>R$ 200,00</p>
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
                        <p>R$ 200,00</p>
                        <button 
                        type="button" 
                        onClick={handleOpenModal}
                        >
                            COMPRAR
                        </button>
                    </footer>
                </div>
            </section>   


                <Modal 
                isOpen={isModalOpen} 
                onRequestClose={handleCloseModal}
                >
                    <h2>Pedido realizado com sucesso!</h2>
                    <img src={mario} />
                </Modal>
               
            </Content>
        </Container>
    )
}