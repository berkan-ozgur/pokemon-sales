import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import BackgroundImage from "../assests/footerImage/pokemon-list.jpg"

type Props = {
    title?: string;
    children: React.ReactNode
};

const Layout = ({ children, title = "Pokemon Sales" }: Props) => {
    return (
        <>
            <Header />
            <head>
                <title>{title}</title>
            </head>
            <body>
                <img src={BackgroundImage} alt="" className="background-image" />
            </body>
            <main>
                <div>{children}</div>
            </main>
            <Footer />
        </>
    )
}

export default Layout;