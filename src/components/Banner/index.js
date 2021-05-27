import { useState } from 'react'
import { Navbar } from '../Navbar'
import { Sidebar } from '../SideBar'
import { Container, Content, BannerItems, BannerH1, BannerH2, BannerP } from './styles'

export function Banner() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return(
       <Container>     
            <Navbar toggle={toggle}/>
           <Sidebar isOpen={isOpen} toggle={toggle} />       
           <Content>
                <BannerItems>
                    <BannerH1>Mortal Kombat</BannerH1>
                    <BannerH2>R$ 299<span>,99</span></BannerH2>
                    <BannerP>Mortal Kombat X combina uma apresentação cinemática<br/> única com uma jogabilidade
                        totalmente nova. Os<br/> jogadores podem escolher pela primeira vez diversas<br/> 
                        variantes de cada personagem, afetando tanto a estratégia<br/> como o estilo de 
                        luta.
                    </BannerP>
                </BannerItems>
           </Content>
       </Container>
    )
}