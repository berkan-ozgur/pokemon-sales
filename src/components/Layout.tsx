import React from "react";
import Footer from "./Footer";
import Header from "./Header";

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
            <main>
                <div>{children}</div>
            </main>
            <Footer />
        </>
    )
}

export default Layout;