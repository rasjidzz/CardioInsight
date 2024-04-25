import React from "react";
import linkedinIcon from "../assets/linkedin.png";
import instagramIcon from "../assets/instagram.png";
import twitterIcon from "../assets/twitter.png";
import logo2 from "../assets/logo2.png"

function Footer() {
    return (
        <div className="bg-custom-green p-4 w-full h-60 flex justify-between items-center">
            <img src={logo2} alt="Logo" className="h-14 m-4" />
            <div className="flex items-center m-28">
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={linkedinIcon}
                        alt="LinkedIn"
                        className="h-8 w-8 mx-5"
                    />
                </a>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={instagramIcon}
                        alt="Instagram"
                        className="h-8 w-8 mx-5"
                    />
                </a>
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={twitterIcon}
                        alt="Twitter"
                        className="h-8 w-8 mx-5"
                    />
                </a>
            </div>
        </div>
    );
}

export default Footer;
