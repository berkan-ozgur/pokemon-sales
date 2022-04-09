import React from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import "../assests/css/Header.scss"
import logo from "../assests/logo/PokemonLogo.png"
import { Link } from 'react-router-dom';


const Header = () => {
    const leftContents = (
        <React.Fragment>
            <div>
                <Link to="/">
                    <img src={logo} alt="" className="logo" />
                </Link>
            </div>
            <div className="button-demo">
                <Link to="/pokemon-list">
                    <Button label="Pokemon List" className="p-button-help p-button-text" />
                </Link>
                <Link to="/about">
                    <Button label="About" className="p-button-warning p-button-text" />
                </Link>
                <Button label="Contact" className="p-button-info p-button-text" />
            </div>
        </React.Fragment>
    );

    const rightContents = (
        <React.Fragment>
            <div className="icon-demo">
                <Button icon="pi pi-search" className="p-button-rounded p-button-success p-button-text" />
                <Link to="/login">
                    <Button icon="pi pi-user" className="p-button-rounded p-button-info p-button-text" />
                </Link>
                <Button icon="pi pi-bell" className="p-button-rounded p-button-warning p-button-text" />
                <Button icon="pi pi-heart" className="p-button-rounded p-button-help p-button-text" />
            </div>
        </React.Fragment>
    );

    return (
        <div>
            <Toolbar left={leftContents} right={rightContents} />
        </div>
    );
}


export default Header;