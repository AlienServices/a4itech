"use client"
import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Image from "next/image";
import Sliver from '../components/sliverr'
import { Metadata } from 'next'
// import Form from "./Form";
import { PatternFormat } from "react-number-format";
import Head from "next/head";
import ReCAPTCHA from "react-google-recaptcha";
// import Menu from "../Photos/menu.png";
// import Repair from "../Photos/repair.jpg";
import styles from "../styles/cart.module.css";

import Footer from "../components/Footer";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const cart = (props) => {
    // const SITE_KEY = process.env.RECAPTCHA_SITE_KEY;
    // const SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

    const [recaptchaResponse, setRecaptchaResponse] = useState(false);
    const [quoteToggle, setQuoteToggle] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");
    const [cart, setCart] = useState();
    const [cash, setCash] = useState(true);
    const [finance, setFinance] = useState(false);
    const [rent, setRent] = useState(false);
    const tawkMessengerRef = useRef();
    const captchaRef = useRef(null);



    useEffect(() => {
        // setCart(JSON.parse(localStorage.getItem("cart")))
        setCart(localStorage.getItem("cart"))
        console.log(cart,"this is cart")
    },[])

    const sendEmail = (e) => {
        e.preventDefault();
        console.log("Sending");

        fetch("https://api.smtp2go.com/v3/email/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                api_key: "api-DC44EBDEE45411ED847EF23C91C88F4E",
                to: [`<info@copiersutah.com>`],
                sender: "<info@copiersutah.com>",
                subject: `This is${name}'s quote form. Her number is ${number}`,
                text_body: `${message}`,
                html_body: `<h1>${message}</h1>`,
                template_id: "5120871",
                template_data: {
                    message: message,
                    from: "buy a copier",
                    number: number,
                    name: name,
                },
            }),
        }).then((res) => {
            console.log(res);
            if (res.status === 200) {
                console.log("Response succeeded!");
                // setSubmitted(true);
                // setName("");
                // setEmail("");
                // setBody("");
            }
        });
    };

    var verifyCallback = function (response) {
        setRecaptchaResponse(response);
    };

    const handleMinimize = () => {
        tawkMessengerRef.current.minimize();
    };
    const onLoad = () => {
        console.log("onLoad works!");
    };

    
    return (
        <div className={styles.main}>
            <Sliver />
            <Head>
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://copiersutah.com/buy/" />
                <title>
                    Get a Quote for High-Quality New and Refurbished Copiers | Copiers Utah
        </title>
                <meta
                    name="description"
                    content="Looking for a high-quality copier for your office? Copiers Utah offers a range of advanced copy machines for sale, including new and refurbished options. Fill out our easy form to get a personalized quote today."
                />
                <meta
                    name="keywords"
                    content="office copiers, copiers for sale, refurbished copiers, get a quote, copiers Utah, copiers for sale, copier rentals, office copy machines, affordable copiers, copiers shop, copiers near me, copier sales, rent a copier machine, used copiers, used copiers near me, used copiers for sale, used copiers for rent, used copiers utah"
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Product",
                            name: "New and Refurbished Copiers",
                            description:
                                "High-quality copiers for your office, including new and refurbished options.",
                            brand: "Copiers Utah",
                            url: "https://copiersutah.com/home",
                            image: "https://copiersutah.com/static/logo.webp",
                            offers: {
                                "@type": "AggregateOffer",
                                priceCurrency: "USD",
                                availability: "https://schema.org/InStock",
                                lowPrice: "Your Lowest Price",
                                highPrice: "Your Highest Price",
                                offerCount: "Number of Copiers Available",
                                seller: {
                                    "@type": "LocalBusiness",
                                    name: "Copiers Utah",
                                    telephone: "(801) 261-0510",
                                    email: "info@copiersutah.com",
                                    address: {
                                        "@type": "PostalAddress",
                                        streetAddress: "554 W 8360 S",
                                        addressLocality: "Sandy",
                                        addressRegion: "Utah",
                                        postalCode: "84070",
                                        addressCountry: "USA",
                                    },
                                },
                            },
                        }),
                    }}
                />
            </Head>

            <div>
                <TawkMessengerReact
                    onLoad={onLoad}
                    propertyId="5abd4931d7591465c7090c65"
                    widgetId="default"
                    useRef={tawkMessengerRef}
                />
            </div>
            <div className={styles.logoSpaceContainer}>
                <div className={styles.logoSpace}>
                    <Image
                        src="/static/logo.webp"
                        alt="buy a used or new business copier"
                        width={150}
                        height={100}
                    />
                    <div className={styles.columnContainer}>
                        <div />
                        <div className={styles.infoBig}>Copiers Utah</div>
                        <div className={styles.mediumColumn}>
                            <div className={styles.infoMedium}>Ph: (801) 261-0510</div>
                            <div className={styles.infoSmall}>info@copiersutah.com</div>
                        </div>
                    </div>
                </div>
            </div>
            <Header />
            <div className={styles.main}>
                    
                    

                
            </div>

            <Footer />
        </div>
    );
};

export default cart;