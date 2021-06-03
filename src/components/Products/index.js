import outriders from '../../assets/product-outriders.svg'
import cyberpunk from '../../assets/product-cyberpunk2077.svg'
import donkey from '../../assets/product-donkey-kong-country-tropical-freeze.svg'

import { Container, RadioBox } from "./styles";

import Modal from 'react-modal';
import { useState } from 'react';

Modal.setAppElement('#root'); //Acessibilidade

export function Products(props) {
    const [type, setType] = useState(false)
   
    return(
        <Container>
                <h3>Produtos em destaque</h3>
            <section>
                <div>
                    <img src={outriders} />
                    <footer>
                        <p>Outriders</p>
                        <h6>R$ 200,00</h6>
                        <RadioBox 
                        type="button"
                        isActive = { type === true }
                        onClick={() => {
                            props.openModal()
                            props.increment()
                            setType()

                        }}
                        >
                            COMPRAR
                        </RadioBox>
                    </footer>
                </div>

                <div>
                    <img src={cyberpunk} />
                    <footer>
                        <p>CYBERPUNK 2077</p>
                        <h6>R$ 200,00</h6>
                        <RadioBox 
                        type="button"
                        isActive = { type === true }
                        onClick={(event) => {
                            props.openModal()
                            props.increment()
                            setType()
                        }}
                        >
                            COMPRAR
                        </RadioBox>
                    </footer>
                </div>
                
                <div>
                    <img src={donkey} />
                    <footer>
                        <p>Donkey Kong Country Tropical Freeze</p>
                        <h6>R$ 200,00</h6>
                        <RadioBox 
                        type="button" 
                        isActive = { type === true }
                        onClick={(event) => {
                            props.openModal()
                            props.increment()
                            setType()
                        }}
                        >
                            COMPRAR
                        </RadioBox>
                    </footer>
                </div>
            </section>       
           
        </Container>
    )
}