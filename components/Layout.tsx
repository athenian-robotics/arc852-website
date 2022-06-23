import Head from "next/head";
import { Container } from "react-bootstrap";
import React from "react";
import MyNavbar from "./MyNavbar";
import Footer from "./Footer";

type Props = {
    title?: string
    children: React.ReactNode
}

const Layout = ({ title, children }: Props) => {
    return (
        <>
            <Head>
                <title>{ title || "ARC 852 Website" }</title>

                <link rel="apple-touch-icon" sizes="180x180" href="/public/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/public/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/public/favicon-16x16.png"/>
                <link rel="manifest" href="/public/site.webmanifest"/>

                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#0e122e"/>
            </Head>
            <body className="d-flex flex-column min-vh-100">
                <MyNavbar/>
                <Container>
                    <main>{ children }</main>
                </Container>
                <Footer/>
            </body>
        </>
    )
}

export default Layout