import React from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import "../assests/css/Header.scss"
import logo from "../logo/PokemonLogo.png"


const Header = () => {


    const leftContents = (
        <React.Fragment>
            <div>
                <img src={logo} alt="" className="logo" />
            </div>
            <div className="button-demo">
                <Button label="Pokemon List" className="p-button-help p-button-text" />
                <Button label="About" className="p-button-warning p-button-text" />
                <Button label="Contact" className="p-button-info p-button-text" />
            </div>
        </React.Fragment>
    );

    const rightContents = (
        <React.Fragment>
            <div className="icon-demo">
                <Button icon="pi pi-search" className="p-button-rounded p-button-success p-button-text" />
                <Button icon="pi pi-user" className="p-button-rounded p-button-info p-button-text" />
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