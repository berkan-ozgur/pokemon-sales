import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import BackgroundImage from "../assests/images/pokemon-list.jpg"

type Props = {
    title?: string;
    children: React.ReactNode
};

const Layout = ({ children, title = "Pokemon Sales" }: Props) => {
    return (
        <>
            <Header />
            <div>
                <title>{title}</title>
            </div>
            <div>
                <img src={BackgroundImage} alt="" className="background-image" />
            </div>
            <main>
                <div>{children}</div>
            </main>
            <Footer />
        </>
    )
}

export default Layout;