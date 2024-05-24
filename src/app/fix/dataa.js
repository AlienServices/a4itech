"use client"
import React, { useRef, useState, useEffect } from "react";
import Header from "../components/Header";
import Sliver from '../components/sliverr'
import Section from "../components/Section";
import Head from "next/head";
import Axios from "axios";
import { Metadata } from 'next'
import { PatternFormat } from "react-number-format";
import Image from "next/image";
import styles from "../styles/Fix.module.css";
import Footer from "../components/Footer";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import ReCAPTCHA from "react-google-recaptcha";

const Fix = () => {
  const tawkMessengerRef = useRef();
  const [recaptchaResponse, setRecaptchaResponse] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [quoteToggle, setQuoteToggle] = useState(false);
  const [SuccessMsg, setSuccessMsg] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [ErrorMsg, setErrorMsg] = useState("");
  const [valid_token, setValidToken] = useState([]);
  const [token, setToken] = useState();
  const captchaRef = useRef(null);

  const SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY;
  const SECRET_KEY = process.env.REACT_APP_RECAPTCHA_SECRET_KEY;

  async function sendEmail() {
    debugger
    const requestOptions =
    {
      method: "POST",
      body: JSON.stringify({

        from: "Buy A Copier",
        name: name,
        message: message,
        number: number,
        email: email,
      }),
    }
    try {

      const response = await fetch('/api/pay/quote', requestOptions);
      debugger
      const data1 = await response.json();
      console.log(data1, "this is the response")
    } catch (err) {
    }
  }
  useEffect(() => {
    if (message.length > 1 && number.length > 1 && name.length > 1 && email.length > 1 && recaptchaResponse !== false) {
      setToggle(true)
    }

  }, [message, number, name, email, recaptchaResponse])
  var verifyCallback = function (response) {
    setRecaptchaResponse(response);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let token = captchaRef.current.getValue();
    setToken(token);
    captchaRef.current.reset();

    if (token) {
      let valid_token = await verifyToken(token);
      setValidToken(valid_token);

      if (valid_token[0].success === true) {
        console.log("verified");
        setSuccessMsg("Hurray!! you have submitted the form");
      } else {
        console.log("not verified");
        setErrorMsg(" Sorry!! Verify you are not a bot");
      }
    }
  };
  const verifyToken = async (token) => {
    let APIResponse = [];

    try {
      let response = await Axios.post(`http://localhost:8000/verify-token`, {
        reCAPTCHA_TOKEN: token,
        Secret_Key: SECRET_KEY,
      });

      APIResponse.push(response["data"]);
      return APIResponse;
    } catch (error) {
      console.log(error);
    }
  };

  const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
  };
  const onLoad = () => {
    console.log("onLoad works!");
  };



  return (
    <div className={styles.main}>
      <div>
        <TawkMessengerReact
          onLoad={onLoad}
          propertyId="5abd4931d7591465c7090c65"
          widgetId="default"
          useRef={tawkMessengerRef}
        />
      </div>
      <Header />
      <div style={{ display: "flex" }} className={styles.column}>
        <div style={{ display: "flex", height: "fit-content", padding: "15px" }} className={styles.row}>
          <div className={styles.mainSpace}>
            <div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
                className={styles.black}
              >
                We work with all brands, including!{" "}
              </div>
              <div className={styles.smallBlack}>But not limited to</div>
            </div>
            <div className={styles.line}></div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "100%",
              }}
            >
              <div className={styles.epson}></div>
              <div className={styles.Konika}></div>
              <div className={styles.lexmark}></div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "100%",
              }}
            >
              <div className={styles.kycotera}></div>
              <div className={styles.xerox}></div>
              <div className={styles.hp}></div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "100%",
              }}
            >
              <div className={styles.ricoh}></div>
              <div className={styles.sharp}></div>
              <div className={styles.canon}></div>
            </div>
          </div>

          {quoteToggle ? (
            <div>
              <div>Awesome, your next in line</div>
            </div>
          ) : (
              <div style={{ width: "fit-content" }}>
                <div className={styles.container}>
                  <h2 className={styles.black}>Get Your Quote!</h2>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                      height: "50%",
                      alignItems: "center",
                    }}
                  >
                    <div className={styles.space}>

                      <input
                        style={{ marginRight: "10px" }}
                        className={styles.inputSingle}
                        placeholder="Full name"
                        type="text"
                        name=""
                        id=""
                        required={true}
                        onChange={() => {
                          setName(event.target.value);
                        }}
                      />
                      <input
                        className={styles.inputSingle}
                        placeholder="Email"
                        type="text"
                        name=""
                        id=""
                        required={true}
                        onChange={() => {
                          setEmail(event.target.value);
                        }}
                      />
                    </div>
                    <div className={styles.space}>

                      <PatternFormat
                        format="+1 (###) ### ####"
                        allowEmptyFormatting
                        mask="_"
                        className={styles.phoneNumber}
                        onChange={(event) => {
                          setNumber(event.target.value);
                        }}
                      />
                    </div>

                    <div className={styles.space}>

                      <input
                        onChange={() => {
                          setMessage(event.target.value);
                        }}
                        className={styles.inputSingle}
                        placeholder="Comments"
                        type="text"
                      />
                    </div>
                  </div>
                  <div
                    style={{ height: "25%", display: "flex" }}
                    className={styles.padding}
                  >
                    <ReCAPTCHA
                      style={{
                        marginBottom: "10px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                      className="recaptcha"
                      sitekey={"6LcIYucpAAAAALcp08wt1hde46dyQNFlmz0VBcjo"}
                      ref={captchaRef}
                      onChange={verifyCallback}
                    />
                  </div>
                  <button
                    onClick={(e) => {
                      setQuoteToggle(!quoteToggle);
                      sendEmail(e);
                    }}
                    className={styles.buttonBlue}
                    disabled={!toggle}
                  >
                    Get My Quote
                </button>
                </div>
              </div>
            )}
        </div>
        <div>
          <div className={`${styles.fifty} ${styles.pic} ${styles.hidden}`}>            
              <div style={{ width: "90%" }}>
                <div className={styles.paragraph}>At Discount Copier, our commitment to exceptional service extends beyond just offering reliable copiers. We take immense pride in providing top-notch maintenance services that go the extra mile to keep your office running smoothly and efficiently. Our dedicated team of friendly and skilled technicians is here to ensure that your copiers are always in optimal condition, delivering consistent performance and minimizing any disruptions to your workflow.<div />
                  <div className={styles.paragraph}>What sets us apart is our unparalleled ability to work seamlessly with all major copier brands. We understand the unique equipment needs of every business, and our unwavering support is available to you, regardless of the copier brand you use. Our experienced technicians possess comprehensive knowledge and expertise to handle maintenance and repairs for a wide range of copier models, including renowned brands like Konica Minolta, Lexmark, Epson, and more. Rest assured, we have the expertise and resources to meet your copier requirements with utmost precision and care.</div>
                </div>
              </div>
          </div>
        </div>
      </div>
      <Section />

      <Footer />
    </div>
  );
};

export default Fix;
