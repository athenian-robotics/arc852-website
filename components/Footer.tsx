import React from "react";

const Footer = () => {
    return (
        <footer className="cntr-footer mt-auto">
            <a
                href="https://vercel.com?filter=next.js&utm_source=github&utm_medium=example&utm_campaign=next-example"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{ ' ' }
                <img src="/vercel.svg" alt="Vercel Logo" className="sml-logo"/>
            </a>
        </footer>
    )
}

export default Footer