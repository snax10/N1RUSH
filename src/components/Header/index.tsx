import logoImg from '../../assets/logo.svg'
import hamburguer from '../../assets/icon_hamburguer.svg'
import contato from '../../assets/paper-plane.svg'
import search from '../../assets/search-solid.svg'
import bag from '../../assets/shopping-bag-solid.svg'

import { Container, Content } from './styles'
import { Banner } from '../Banner'
import { useState } from 'react'

export function Header() {
    const[count, setCount] = useState(0)

    function countOn() {
        setCount (count + 1);
    }

    return(
        <Container>
            <Content>
                <div>
                    <img src={hamburguer} alt="hamburguer" />
                    <a href="/"><img src={logoImg} alt="Logo"/></a>
                </div>

                <ul>
                    <li>
                        <img src={contato}/>
                        <span>CONTATO</span>
                    </li>
                    <li>
                        <img src={search} />
                        <span>BUSCAR</span>
                    </li>
                    <li>
                        <img src={bag} />
                        <span>{count}</span>
                    </li>
                </ul>
            </Content>

            <Banner />

        </Container>
    )
}