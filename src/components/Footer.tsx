import React from "react";
import footerImage from "../footerImage/pokemon-list.jpg"

const Footer = () => {

    return (
        <div className="footer">
            <p className="Copyright">Copyrighted© by Berkan Özgür</p>
            <ul className="aboutUs">
                <p>Pokemon is a Japanese media franchise managed by The Pokemon Company,
                    a company founded by Nintendo, Game Freak and Creatures.</p>
            </ul>
            <img src={footerImage} alt="" className="footerImage" />
        </div>
    );
}

export default Footer;