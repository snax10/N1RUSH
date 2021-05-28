import { Container } from "./styles";
import zelda from '../../assets/zelda_banner.jpg'
import sekiro from '../../assets/sekiro_banner.jpg'

export function Hero() {
    return(
        <Container>
            <div>
                <img src={zelda} alt="Zelda" />   
                <p>The Legend of Zelda - Breath of th wild</p> 
            </div>
            <div>
                <img src={sekiro} alt="Zekiro" />   
                <p>SEKIRO - Shadows die twice</p> 
            </div>
            
        </Container>
    )
}