"use client"
import React, { useRef, useState } from 'react'
import Header from '../components/Header'
import Head from 'next/head'
import BreadCrumbs from "../components/BreadCrumbs";
import Sliver from '../components/sliverr'
import Section from "../components/Section";
import { Metadata } from 'next'
import Image from 'next/image'
import Footer from '../components/Footer'
import { useRouter } from 'next/navigation'
import Link from "next/link";
import styles from '../styles/Stuff.module.css'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react'
const Refurbished = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [message, setMessage] = useState('this is the test message')
  const [copiers, setCopiers] = useState([
    {
      model: "Konica Minolta BizHub C658",
      image: "c658.webp",
      PagesPerMinute: "65",
      paperSize: "12 x 18",
      ScanSpeed: "240 sides per minute",
      timeOut: "4.0",
      type: "Refurbished",
      brand: "Konica",
      description:
        "The C658 is a heft workforce copier-printer with a footpring only a couple inches larger than a typical copier. Its internal parts are more robust to handle higher speeds, volume, and longevity.",
    },
    {
      model: "Konica Minolta BizHub C758",
      image: "c758.webp",
      PagesPerMinute: "75",
      brand: "Konica",
      paperSize: "12 x 18",
      ScanSpeed: "240 sides per minute",
      timeOut: "3.6",
      description:
        "The C758 is a heft workforce copier-printer with a footpring only a couple inches larger than a typical copier. Its internal parts are more robust to handle higher speeds, volume, and longevity.",
      type: "Refurbished",
    },
    {
      model: "Konica Minolta BizHub C558",
      image: "c558.webp",
      brand: "Konica",
      PagesPerMinute: "55",
      paperSize: "12 x 18",
      ScanSpeed: "240 sides per minute",
      timeOut: "4.4",
      type: "Refurbished",
      description:
        "The C558 is a speedy workhorse copier, offering a robust platform fit for high volumes or longevity in smaller offices",
    },
    {
      model: "Konica Minolta BizHub C368",
      image: "c368.webp",
      PagesPerMinute: "36",
      brand: "Konica",
      paperSize: "12 x 18",
      ScanSpeed: "160 sides per minute",
      timeOut: "6.9",
      type: "Refurbished",
      description:
        "The C368 is a meduium sized office copier-printer with premier color quality and all the functionality of a large office copier. ",
    },
    {
      model: "Konica Minolta BizHub C258",
      image: "c258.webp",
      PagesPerMinute: "25",
      brand: "Konica",
      paperSize: "12 x 18",
      ScanSpeed: "160 sides per minute",
      timeOut: "7.5",
      type: "Refurbished",
      description:
        "The C258 is a small office copier-printer with all the functionality and options of a large office copier. This is our most cost effective 12x18-capable rebuilt machine that does not sacrifice any color quality.",
    },
    {
      model: "Konica Minolta BizHub C308",
      image: "c308.webp",
      PagesPerMinute: "30",
      paperSize: "12 x 18",
      ScanSpeed: "160 sides per minute",
      brand: "Konica",
      timeOut: "7.3",
      type: "Refurbished",
      description:
        "The C308 is a small-medium sized office copier-printer with premier color quality and all the functionality of a large office copier.",
    },
    {
      model: "Konica Minolta BizHub C458",
      PagesPerMinute: "45",
      image: "c458.webp",
      brand: "Konica",
      paperSize: "12 x 18",
      ScanSpeed: "240 sides per minute",
      timeOut: "5.1",
      type: "Refurbished",
      description:
        "The C458 is out most popular copier-printer. It is ideal for most sized offices, provides top color quality, and full functionality and speed to handel every office need.",
    },
    {
      model: "Konica Minolta BizHub C250I",
      PagesPerMinute: "25",
      image: "C250i.webp",
      brand: "Konica",
      paperSize: "12 x 18",
      ScanSpeed: "200 sides per minute",
      timeOut: "6.1",
      type: "Refurbished",
      description:
        "Enjoy the bizhub C250 i-Series with the 25 page per minute speed, the 7 inch tablet-like panel, the best User Experience of the market, the number one Security features with the embedded Bitdefender® anti-virus scan engine (optional), Remote Services, Konica Minolta IT Services and much more... ",
    },
    {
      model: "Konica Minolta BizHub C360I",
      PagesPerMinute: "36",
      image: "C360i.webp",
      brand: "Konica",
      paperSize: "12 x 18",
      ScanSpeed: "200 sides per minute",
      timeOut: "6.1",
      type: "Refurbished",
      description:
        "Enjoy the bizhub C360 i-Series with the 36 page per minute speed, the 7 inch tablet-like panel, the best User Experience of the market, the number one Security features with the embedded Bitdefender® anti-virus scan engine (optional), Remote Services, Konica Minolta IT Services and much more... ",
    },
    {
      model: "Konica Minolta BizHub C450I",
      PagesPerMinute: "45",
      image: "C450i.webp",
      brand: "Konica",
      paperSize: "12 x 18",
      ScanSpeed: "280 sides per minute",
      timeOut: "5.0",
      type: "Refurbished",
      description:
        "Enjoy the bizhub C450 i-Series with the 45 page per minute speed, the 7 inch tablet-like panel, the best User Experience of the market, the number one Security features with the embedded Bitdefender® anti-virus scan engine (optional), Remote Services, Konica Minolta IT Services and much more... ",
    },
    {
      model: "Lexmark XC6152",
      PagesPerMinute: "52",
      image: "xc6152.webp",
      paperSize: "8.5 X 14",
      ScanSpeed: "120 sides per minute",
      brand: "Lexmark",
      type: "Refurbished",
      timeOut: "7.5",
      description:
        "The Lexmark XC6152 workgroup color letter MFP prints up to 52 pages per minute and has business-class features like pre-installed software solutions and an inline staple finisher.",
    },
    {
      model: "Lexmark XC8160",
      PagesPerMinute: "60",
      image: "8160.png",
      paperSize: "8.5 X 14",
      ScanSpeed: "120 sides per minute",
      brand: "Lexmark",
      type: "Refurbished",
      timeOut: "7.0",
      description:
        "The Lexmark XC8160 color letter/A4 MFP is the right combination of A3 level speed and features to maximize your profitability in high usage placements.",
    },
    {
      model: "Lexmark XC9225",
      PagesPerMinute: "25",
      image: "XC9225.png",
      paperSize: "12 X 18",
      ScanSpeed: "160 sides per minute",
      brand: "Lexmark",
      type: "Refurbished",
      timeOut: "7.9",
      description:
        "Loaded with standard features, the 25-ppm, SRA3/12x18 Lexmark XC9225 supports demanding workloads through a powerful combination of printing, copying, scanning, faxing and optional finishing.",
    },
    {
      model: "Lexmark XC9235",
      PagesPerMinute: "35",
      image: "XC9235.jpg",
      paperSize: "12 X 18",
      ScanSpeed: "160 sides per minute",
      brand: "Lexmark",
      type: "Refurbished",
      timeOut: "7.9",
      description:
        "Loaded with standard features, the 35-ppm, SRA3/12x18 Lexmark XC9235 supports demanding workloads through a powerful combination of printing, copying, scanning, faxing and optional finishing.",
    },
    {
      model: "Lexmark XC9245",
      PagesPerMinute: "45",
      image: "9245.png",
      paperSize: "12 X 18",
      ScanSpeed: "160 sides per minute",
      brand: "Lexmark",
      type: "Refurbished",
      timeOut: "5.8",
      description:
        "Loaded with standard features, the 45-ppm, SRA3/12x18 Lexmark XC9245 supports demanding workloads through a powerful combination of printing, copying, scanning, faxing and optional finishing.",
    },
    {
      model: "Lexmark XC9265",
      PagesPerMinute: "65",
      image: "9245.png",
      paperSize: "12 X 18",
      ScanSpeed: "160 sides per minute",
      brand: "Lexmark",
      type: "Refurbished",
      timeOut: "5.5",
      description:
        "Standard tray input of 1,000 sheets enhances the multi-format 65-ppm MFP that also offers SRA3/12x18 output, copying, scanning, faxing and optional finishing.",
    },
    // {
    //   model: 'Lexmark XC8160',
    //   modelNumber: ' 7563-197',
    //   PagesPerMinute: '52',
    //   image: 'xc6152.webp',
    //   paperSize: '44.8 x 25.54',
    //   ScanSpeed: '120',
    //   brand: 'lexmark',
    //   type: 'Refurbished',
    //   timeOut: '6.5 ',
    //   description:
    //     'The XC6253 was designed for pure efficiency and includes a stapler and three drawers in a standard mass-produced package suited for virtually every office needs. This is one of our top performers in a budget friendly package. ',
    // },
    // {
    //   model: 'Lexmark XC4140',
    //   modelNumber: ' 7563-197',
    //   PagesPerMinute: '52',
    //   image: 'xc4140.webp',
    //   paperSize: '44.8 x 25.54',
    //   ScanSpeed: '120',
    //   brand: 'lexmark',
    //   type: 'Refurbished',
    //   timeOut: '6.5 ',
    //   description:
    //     'The XC6253 was designed for pure efficiency and includes a stapler and three drawers in a standard mass-produced package suited for virtually every office needs. This is one of our top performers in a budget friendly package. ',
    // },
    // {
    //   model: 'Lexmark C4150',
    //   modelNumber: ' 7563-197',
    //   PagesPerMinute: '52',
    //   image: 'xc4150.webp',
    //   paperSize: '44.8 x 25.54',
    //   ScanSpeed: '120',
    //   brand: 'lexmark',
    //   type: 'Refurbished',
    //   timeOut: '6.5 ',
    //   description:
    //     'The XC6253 was designed for pure efficiency and includes a stapler and three drawers in a standard mass-produced package suited for virtually every office needs. This is one of our top performers in a budget friendly package. ',
    // },
    // {
    //   model: 'Lexmark M1246',
    //   modelNumber: ' 7563-197',
    //   PagesPerMinute: '52',
    //   image: 'm1246.webp',
    //   paperSize: '44.8 x 25.54',
    //   ScanSpeed: '120',
    //   brand: 'lexmark',
    //   type: 'Refurbished',
    //   timeOut: '6.5 ',
    //   description:
    //     'The XC6253 was designed for pure efficiency and includes a stapler and three drawers in a standard mass-produced package suited for virtually every office needs. This is one of our top performers in a budget friendly package. ',
    // },
    // {
    //   model: 'Lexmark M5163',
    //   modelNumber: ' 7563-197',
    //   PagesPerMinute: '52',
    //   image: 'm1246.webp',
    //   paperSize: '44.8 x 25.54',
    //   ScanSpeed: '120',
    //   brand: 'lexmark',
    //   type: 'Refurbished',
    //   timeOut: '6.5 ',
    //   description:
    //     'The XC6253 was designed for pure efficiency and includes a stapler and three drawers in a standard mass-produced package suited for virtually every office needs. This is one of our top performers in a budget friendly package. ',
    // },
    // {
    //   model: 'Lexmark XM7155',
    //   modelNumber: ' 7563-197',
    //   PagesPerMinute: '52',
    //   image: 'm1246.webp',
    //   paperSize: '44.8 x 25.54',
    //   ScanSpeed: '120',
    //   brand: 'lexmark',
    //   type: 'Refurbished',
    //   timeOut: '6.5 ',
    //   description:
    //     'The XC6253 was designed for pure efficiency and includes a stapler and three drawers in a standard mass-produced package suited for virtually every office needs. This is one of our top performers in a budget friendly package. ',
    // },


  ])
  const router = useRouter()

  const tawkMessengerRef = useRef()

  const handleMinimize = () => {
    tawkMessengerRef.current.minimize()
  }
  const onLoad = () => {
    console.log('onLoad works!')
  }
  const sendEmail = (e) => {
    e.preventDefault()
    console.log('Sending')
    let data = {
      name,
      email,
      message,
      number,
    }
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        // setSubmitted(true);
        // setName("");
        // setEmail("");
        // setBody("");
      }
    })
  }
  const breadCrumbs = [
    { name: "Home", url: "/" },
  ]

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
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <div className={styles.section}>
        <div className={styles.center}>
          <h1 style={{ display: "flex", alignItems: "center", paddingBottom: "10px", justifyContent: "center" }}>
            <div className={styles.titleBig}>Our Top</div>
            <div className={styles.titleBigBlue}>Refurbished Machines</div>
          </h1>
          <div className={styles.paragraph}>Discount Copier is the home to the premier copier remanufacturing facility in the state of Utah. We rebuild copiers to the highest standards anywhere in the state and beyond. We have developed a 33-step process to evaluate all machines and we provide a full replacement warranty with our service agreements. Check out our refurbished copiers below!</div>
          <div className={styles.grid}>
            {copiers.map((copier) => {
              return (
                <div key={copier.modelNumber} className={styles.box}>
                  <div className={styles.titleBlackSmall}>{copier.model}</div>
                  <div>
                    <Image
                      src={`/static/${copier.image}`}
                      width={200}
                      height={200}
                      alt={"Discount Copier"}
                    ></Image>
                  </div>
                  <div className={styles.somethingContainer}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Link href={'/product'}>
                        <button
                          onClick={() => {
                            localStorage.setItem('Image', `${copier.image}`)
                            localStorage.setItem('Model', `${copier.model}`)
                            localStorage.setItem(
                              'PagesPerMinute',
                              `${copier.PagesPerMinute}`,
                            )
                            localStorage.setItem('paperSize', `${copier.paperSize}`)
                            localStorage.setItem('brand', `${copier.brand}`)
                            localStorage.setItem('timeOut', `${copier.timeOut}`)
                            localStorage.setItem('type', `${copier.type}`)
                            localStorage.setItem(
                              'description',
                              `${copier.description}`,
                            )
                          }}
                          className={styles.buttonBlue}
                        >
                          See Details
                        </button>
                      </Link>
                    </div>
                    <div className={styles.fifty}>
                      <div className={styles.rowNumber}>
                        <div>{copier.modelNumber}</div>
                      </div>
                      <div className={styles.rowNumber}></div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className={styles.flex}>
            <h1 style={{ display: "flex", alignItems: "center", paddingBottom: "10px" }}>
              <div className={styles.titleBig}>Our Remanufactoring </div>
              <div className={styles.titleBigBlue}>Process</div>
            </h1>

          </div>
          <div className={styles.paragraph}>
            <div>We do not just refurbish or recondition our copiers, we rebuild them to specifications as close to as new as possible. That is why we can include a full replacement warranty with all our service agreements. Try getting a full replacement guarantee with one of our competitors on even a brand-new machine. That is unlikely at best, more likely impossible. But we offer it as standard addition to all our service agreements on our rebuilt copiers. Why? Because we know these multifunction copiers inside and out. They’ve been tested and restored. We are confident in our work and we can fix everything. In the rare instance something terrible goes wrong, we simply replace the copier, no hassles, no worries!</div>
          </div>
          <ol className={styles.something}>
            <div className={styles.list}>
              <div className={styles.title}>-Receiving the Copiers</div>
              <li className={styles.listItem}>Before rebuilding any machines, we select the best performing models from the top copier manufacturers.</li>
              <li className={styles.listItem}>We source the best quality copier machines with the lowest meters from numerous sources around the nation.</li>
              <li className={styles.listItem}>We check all incoming inventory for any frame damage or any component problems. We set any problematic copiers aside. We only rebuild the best copiers to start with.</li>
              <li className={styles.listItem}>We do a full review of any known issues from the computers within the copiers. Any major problems are addressed or if there was an unrepairable problem the machine is set aside. Again, we only rebuild the best machines.</li>
              <li className={styles.listItem}>We remove any previous customer information from the hard drives, with a military-grade wipe.</li>
            </div>
            <div className={styles.list}>
              <div className={styles.title}>-Rebuilding the Copiers</div>
              <li className={styles.listItem}>At this point we begin our 33-step copier rebuilding process. These steps include checking, reconditioning, and/or replacing any mechanical components and any consumable components such as drums and toner.</li>
              <li className={styles.listItem}>Then we test and test and test, all drawers, all components, and make any adjustments or repairs as needed.</li>
              <li className={styles.listItem}>We then prepare the internal applications and settings for placement</li>
              <li className={styles.listItem}>Once the copier passes all phases of the rebuild process the proper documentation is placed on the copier and it is inventoried for sale.</li>
            </div>
            <div className={styles.list}>
              <div className={styles.title}>-Final Inspection and Placement</div>
              <li className={styles.listItem}>We always have our top copier technicians review the checklist and run a final battery of tests to make sure the copier is running perfectly. Every copier gets two sets of eyes.</li>
              <li className={styles.listItem}>Once we receive final placement instructions, we preset the copier with the customer’s information either prior to delivery or at the customer’s site.</li>
              <li className={styles.listItem}>Delivery is handled by the same in-house technicians who rebuilt the machines. We want every multifunction copier machine to be placed in the top condition without any damage from vibrations or movement in shipping.</li>
            </div>
          </ol>
        </div>

      </div>
      <Section></Section>
      <Footer />
    </div>
  )
}

export default Refurbished
