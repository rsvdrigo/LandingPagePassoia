import "./Header.scss";
import Logo from "../../assets/imgs/Logo Passoia.png";
import { useState } from "react";

function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return(
        <>
            <div className="container">
                <img src={Logo} alt="imagem do logo passoia" />
                <nav className="navbar">
                    <ul>
                        <li><a href="#">LOOKS</a></li>
                        <li><a href="#">LANÇAMENTOS</a></li>
                        <li><a href="#">NOVIDADE</a></li>
                    </ul>
                </nav>
                <div 
                    className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                <button className="close-menu" onClick={closeMenu}>×</button>
                <ul>
                    <li><a href="#" onClick={closeMenu}>LOOKS</a></li>
                    <li><a href="#" onClick={closeMenu}>LANÇAMENTOS</a></li>
                    <li><a href="#" onClick={closeMenu}>NOVIDADE</a></li>
                </ul>
            </div>
        </>
    )
}

export default Header;