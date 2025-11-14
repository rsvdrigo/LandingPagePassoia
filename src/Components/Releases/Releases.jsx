import "./Releases.scss"
import {BatomLiquido, BatomLongo, BatomOcean, RedLips, BlueLips, BaseLips, BrownLips} from "../../assets/imgs"
import { useState } from "react"

function Release () {

const [LipsColor, setLipsColor] = useState(RedLips);
  return (
    <>
    <section>
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
                
            </div>
        </div>
    </section>
      
    
    </>
  )
}

export default Release
