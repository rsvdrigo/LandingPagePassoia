import "./News4u.scss"
import BannerNews from "../../assets/imgs/makeBanner.png"

function News4u() {
    return (
        <>
            <section className="News4u-container">
                <h2>NOVIDADES PARA VOCÊ</h2>
                <img src={BannerNews} alt="imagem de maquiagens espalhadas" />
            </section>
        </>
    )
}

export default News4u;
