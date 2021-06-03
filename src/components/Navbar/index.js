import logoImg from '../../assets/logo.svg'
import hamburguer from '../../assets/icon_hamburguer.svg'
import contato from '../../assets/paper-plane.svg'
import search from '../../assets/search-solid.svg'
import bag from '../../assets/shopping-bag-solid.svg'

import { Nav, Content, NavLinks } from './styles'
import { Sidebar } from '../SideBar'

export function Navbar(props) {
    return(
        <Nav>
            <Content>
                    <div>
                        <img 
                        src={hamburguer} 
                        alt="hamburguer"  
                        />
                        <img src={logoImg}  />
                    </div>

                    <Sidebar />

                <NavLinks>
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
                        <span className="last-child">{props.count}</span>
                    </li>
                </NavLinks>
            </Content>
        </Nav>
    )
}