import logoImg from '../../assets/logo.svg'
import hamburguer from '../../assets/icon_hamburguer.svg'
import contato from '../../assets/paper-plane.svg'
import search from '../../assets/search-solid.svg'
import bag from '../../assets/shopping-bag-solid.svg'

import { Nav, Content, NavLinks } from './styles'
import { useState } from 'react'
import { Sidebar } from '../SideBar'

export function Navbar() {
    const[count, setCount] = useState(0)

    function countOn() {
        setCount (count + 1);
    }

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
                        <img  onClick={countOn} src={bag} />
                        <span>{count}</span>
                    </li>
                </NavLinks>
            </Content>
        </Nav>
    )
}