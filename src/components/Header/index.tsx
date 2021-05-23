import logoImg from '../../assets/logo.svg'
import hamburguer from '../../assets/icon_hamburguer.svg'
import contato from '../../assets/paper-plane.svg'
import search from '../../assets/search-solid.svg'
import bag from '../../assets/shopping-bag-solid.svg'

import { Container, Content } from './styles'
import { Banner } from '../Banner'

export function Header() {
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
                        <span>Contato</span>
                    </li>
                    <li>
                        <img src={search} />
                        <span>Buscar</span>
                    </li>
                    <li>
                        <img src={bag} />
                        <span>2</span>
                    </li>
                </ul>
            </Content>

            <Banner />
        </Container>
    )
}