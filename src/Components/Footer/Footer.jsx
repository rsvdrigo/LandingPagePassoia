import "./Footer.scss"
import { Pix, Boleto, Visa, Mastercard, Instagram, Facebook, Youtube, Twitter } from "../../assets/imgs"

function Footer() {
  return (
    <>
    <section className="Footer-container">
        <div className="footer-content">
            <div className="footer-section">
                <h3>ATENDIMENTO</h3>
                <ul>
                    <li><a href="#">Fale Conosco</a></li>
                    <li><a href="#">Perguntas Frequentes</a></li>
                    <li><a href="#">Meus Pedidos</a></li>
                    <li><a href="#">Nossas Lojas</a></li>
                </ul>
            </div>
            
            <div className="footer-section">
                <h3>FORMAS DE PAGAMENTO</h3>
                <div className="payment-methods">
                        <img src={Mastercard}alt="Logo MasterCard"/>
                        <img src={Visa} alt="Logo Visa" />
                        <img src={Pix} alt="Logo Pix" />
                        <img src={Boleto} alt="Logo Boleto" />
                </div>
            </div>
            
            <div className="footer-section">
                <h3>SIGA-NOS NAS REDES SOCIAIS</h3>
                <div className="social-icons">
                    <img src={Instagram} alt="Logo Instagram" />
                    <img src={Facebook} alt="Logo Facebook" />
                    <img src={Youtube} alt="Logo Youtube" />
                    <img src={Twitter} alt="Logo Twitter" />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Footer