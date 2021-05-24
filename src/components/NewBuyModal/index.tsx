import Modal from 'react-modal'
import mario from '../../assets/mario.svg'
import closeImg from '../../assets/close_btn.svg'

import { Container } from './styles'

interface NewBuyModaProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewBuyModal({ isOpen, onRequestClose }: NewBuyModaProps ) {
    return(
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
            <button 
            type="button" 
            onClick={onRequestClose} 
            className="react-modal-close"
            >
                <img src= {closeImg} alt="Fechar modal" />
            </button>

            <Container>
                <h2>Pedido realizado com sucesso!</h2>
                <img src={mario} />
            </Container>
        </Modal>
       
    )
}