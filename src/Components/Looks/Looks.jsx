import "./Looks.scss";
import {Lips, Eyes, Face, Tendency} from "../../assets/imgs"

function Looks() {
    return (
        <>
            <section className="Looks-Container">
                <h2>LOOKS E DICAS DE MAQUIAGEM</h2>
                <div className="cards-container">
                    <img src={Lips} alt=""/>
                    <img src={Eyes} alt=""/>
                    <img src={Face} alt=""/>
                    <img src={Tendency} alt=""/>


                </div>
            </section>
        </>
    )
}

export default Looks
