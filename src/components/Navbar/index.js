import logoImg from '../../assets/logo.svg'
import hamburguer from '../../assets/icon_hamburguer.svg'
import contato from '../../assets/paper-plane.svg'
import search from '../../assets/search-solid.svg'
import bag from '../../assets/shopping-bag-solid.svg'

import { Nav, Content, NavLinks } from './styles'
import { useState } from 'react'

export function Navbar({toggle}) {
    // const[count, setCount] = useState(0)

    // function countOn() {
    //     setCount (count + 1);
    // }



    return(

        <Nav>
            <Content>
                    <img 
                    src={hamburguer} 
                    alt="hamburguer"  
                    onClick={toggle}
                    />
                    <span><img src={logoImg}  /></span>

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
                        <span>2</span>
                    </li>
                </NavLinks>
            </Content>
        </Nav>
    )
}