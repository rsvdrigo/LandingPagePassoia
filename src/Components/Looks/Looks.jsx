import "./Looks.scss";
import {Lips, Eyes, Face, Tendency} from "../../assets/imgs"

function Looks() {
    return (
        <>
            <section className="Looks-Container">
                <h2>LOOKS E DICAS DE MAQUIAGEM</h2>
                <div className="cards-container">
                    <img src={Lips} alt="Imagem com uma modelo e um texto escrito Lábios"/>
                    <img src={Eyes} alt="Imagem com uma modelo e um texto escrito Olhos"/>
                    <img src={Face} alt="Imagem com uma modelo e um texto escrito Rosto"/>
                    <img src={Tendency} alt="Imagem com uma modelo e um texto escrito Tendencia"/>
                </div>
            </section>
        </>
    )
}

export default Looks
