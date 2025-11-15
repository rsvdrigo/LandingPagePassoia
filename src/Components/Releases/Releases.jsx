import "./Releases.scss"
import {BatomLiquido, BatomLongo, BatomOcean, RedLips, BlueLips, BaseLips, BrownLips,RedCircle, BlueCircle, BrownCircle, BaseCircle, Stars} from "../../assets/imgs"
import { useState } from "react"

function Release () {

const [LipsColor, setLipsColor] = useState(RedLips);
  return (
    <>
    <section className="release-section">
        <h2>APROVEITE OS LANÇAMENTOS</h2>
        <div className="release-container">
            <div className="release-imgs">
                <img src={BatomLongo} alt="imagem com batom longo" />
                <img src={BatomLiquido} alt="Imagem com batom Liquído" />
                <img src={BatomOcean} alt="imagem com Batom preto" />
            </div>
            <div className="release-preview">
                <img src={LipsColor} alt="Imagem de uma mulher com batom" />
            </div>
            <div className="release-info">
                <img className="release-stars-info" src={Stars} alt="estrelas de avaliacao"/>
                <h3>Matte Premium</h3>
                <p>Cores disponível</p>
                <div className="release-info-pallet">
                    <img onMouseOver={()=>setLipsColor(BlueLips)} src={BlueCircle} alt="circulo azul" />
                    <img onMouseOver={()=>setLipsColor(RedLips)} src={RedCircle} alt="circulo vermelho" />
                    <img onMouseOver={()=>setLipsColor(BrownLips)} src={BrownCircle} alt="circulo marrom" />
                    <img onMouseOver={()=>setLipsColor(BaseLips)} src={BaseCircle} alt="circulo cor base" />
                </div>
                <h4>Descrição</h4>
                <h5>O Batom Matte possui uma fórmula inovadora desenvolvida para entregar o máximo de cor na primeira aplicação com um deslize suave e macio. Tem acabamento matte aveludado e manteiga de manga que ajuda a hidratar e a proteger os lábios contra ressecamento. Ajuda na hidratação dos lábios, textura fina e macia que não pesa nos lábios.</h5>
                
            </div>
        </div>
    </section>
      
    
    </>
  )
}

export default Release
