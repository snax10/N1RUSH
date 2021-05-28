import logoFooter from '../../assets/logo_footer.png'
import { Container } from "./styles";

export function Footer() {
    return(
        <Container>
            <div>
                <img src={logoFooter} alt="" />
            </div>
            
                <p>Agência N1 - Todos os direitos reservados</p> 
               
        </Container>
    )
}