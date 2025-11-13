import "./Header.scss";
import Logo from "../../assets/imgs/Logo Passoia.png"

function Header(){
    return(
        <>
        <div className="container">
        <img src={Logo} alt="imagem do logo passoia" />
        <nav className="navbar">
            <ul>
                <li><a href="#">LOOKS</a></li>
                <li><a href="">LANÇAMENTOS</a></li>
                <li><a href="#">NOVIDADE</a></li>
            </ul>
        </nav>
        </div>
        </>
    )
}

export default Header;

