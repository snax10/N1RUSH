import banner from '../../assets/principal_banner_desktop.jpg'
import { Container } from './styles'

export function Banner() {
    return(
       <Container>
           <img src={banner} />
       </Container>
    )
}