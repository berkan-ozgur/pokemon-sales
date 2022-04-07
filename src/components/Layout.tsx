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
            <h1>{title}</h1>
            <main>
                <div>{children}</div>
            </main>
            <Footer />
        </>
    )
}

export default Layout;