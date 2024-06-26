"use client"
import React, { useRef, useState } from 'react'
import Header from '../components/Header'
import Head from 'next/head'
import BreadCrumbs from "../components/BreadCrumbs";
import Sliver from '../components/sliverr'
import Image from 'next/image'
import Footer from '../components/Footer'
import { useRouter } from 'next/navigation'
import Link from "next/link";
import styles from '../styles/Stuff.module.css'
import { Metadata } from 'next'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react'
const Multicolor = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [message, setMessage] = useState('this is the test message')
  const [copiers, setCopiers] = useState([
    {
      model: 'Konica Minolta C658',
      modelNumber: '21K0300',
      image: 'c658.webp',
      PagesPerMinute: '65',
      paperSize: '12 x 18',
      ScanSpeed: '240 per minute',
      timeOut: '6.5 ',
      type: 'Multicolor',
      brand: 'konica',
      description:
        'The C658 is a heft workforce copier-printer with a footpring only a couple inches larger than a typical copier. Its internal parts are more robust to handle higher speeds, volume, and longevity.',
    },
    {
      model: 'Konica Minolta C758',
      modelNumber: 'Bizhub C758',
      image: 'c758.webp',
      PagesPerMinute: '75',
      brand: 'konica',
      paperSize: '12 x 18',
      ScanSpeed: '120',
      timeOut: '3.6 ',
      description:
        'The C758 is a heft workforce copier-printer with a footpring only a couple inches larger than a typical copier. Its internal parts are more robust to handle higher speeds, volume, and longevity.',
      type: 'Multicolor',
    },
    {
      model: 'Konica Minolta C558',
      modelNumber: 'Bizhub C458',
      image: 'c558.webp',
      brand: 'konica',
      PagesPerMinute: '55',
      paperSize: '12 x 18',
      ScanSpeed: '80',
      timeOut: '4.4 ',
      type: 'Multicolor',
      description:
        'The C558 is a speedy workhorse copier, offering a robust platform fit for high volumes or longevity in smaller offices',
    },
    {
      model: 'Konica Minolta C368',
      modelNumber: 'Bizhub C350i',
      image: 'c368.webp',
      PagesPerMinute: '43',
      brand: 'konica',
      paperSize: '12 x 18',
      ScanSpeed: '160',
      timeOut: '6.5 ',
      type: 'Multicolor',
      description:
        'The C368 is a meduium sized office copier-printer with premier color quality and all the functionality of a large office copier. ',
    },
    {
      model: 'Konica Minolta C258',
      modelNumber: 'Bizhub C258',
      image: 'c258.webp',
      PagesPerMinute: '25',
      brand: 'konica',
      paperSize: '12/ x 18',
      timeOut: '7.3 ',
      type: 'Multicolor',
      description:
        'The C258 is a small office copier-printer with all the functionality and options of a large office copier. This is our most cost effective 12x18-capable rebuilt machine that does not sacrifice any color quality.',
    },
    {
      model: 'Konica Minolta C308',
      modelNumber: 'Bizhub C300i',
      image: 'c308.webp',
      PagesPerMinute: '30',
      paperSize: '8.3 x 11.7',
      brand: 'konica',
      timeOut: '6 ',
      type: 'Multicolor',
      description:
        'The C308 is a small-medium sized office copier-printer with premier color quality and all the functionality of a large office copier.',
    },
    {
      model: 'Konica Minolta C458',
      PagesPerMinute: '45',
      modelNumber: 'Bizhub C458',
      image: 'c458.webp',
      brand: 'konica',
      paperSize: '12 x 18',
      ScanSpeed: '120',
      timeOut: '5.1 ',
      type: 'Multicolor',
      description:
        'The C458 is out most popular copier-printer. It is ideal for most sized offices, provides top color quality, and full functionality and speed to handel every office need.',
    },

    {
      model: 'Lexmark XC6152',
      modelNumber: ' 7563-197',
      PagesPerMinute: '52',
      image: 'xc6152.webp',
      paperSize: '44.8 x 25.54',
      ScanSpeed: '120',
      brand: 'lexmark',
      type: 'Multicolor',
      timeOut: '6.5 ',
      description:
        'The XC6253 was designed for pure efficiency and includes a stapler and three drawers in a standard mass-produced package suited for virtually every office needs. This is one of our top performers in a budget friendly package. ',
    },
    {
      model: 'Lexmark XC9325',
      modelNumber: ' XC9325',
      PagesPerMinute: '25',
      image: '9325.webp',
      paperSize: '11.69 x 17 ',
      ScanSpeed: '120',
      brand: 'lexmark',
      type: 'Multicolor',
      timeOut: '8.5 ',
      description:
        'The XC9325 is a budget-friendly brand new model from Lexmark. It offers the same award-winning applications and full-featured application software in the industry.',
    },
    {
      model: 'Lexmark XC9335',
      modelNumber: '32D0600',
      PagesPerMinute: '35',
      image: '9335.webp',
      paperSize: '11.69 x 17 ',
      ScanSpeed: '120',
      brand: 'lexmark',
      type: 'Multicolor',
      timeOut: '9',
      description:
        'The XC9335 is a budget-friendly brand new model suited for small to medium sized offices. At 35 pages per minute, the machine handles medium volume workflows in a durable, werkstable package.',
    },
    {
      model: 'Lexmark XC9445',
      modelNumber: 'XC944',
      PagesPerMinute: '45',
      image: '9445.webp',
      paperSize: '12.9 x 19.02',
      ScanSpeed: '120',
      brand: 'lexmark',
      type: 'Multicolor',
      timeOut: '4.7',
      description:
        'The XC9445 is an upgraded brand new model from Lexmark. The XC9445 is a popular workhorse model suited for most office environments',
    },
    {
      model: 'Lexmark XC9455',
      modelNumber: '7580-698',
      PagesPerMinute: '50',
      image: '9335.webp',
      paperSize: '11.69 x 16.54 ',
      ScanSpeed: '120',
      brand: 'lexmark',
      type: 'Multicolor',
      timeOut: '6.1',
      description:
        'The XC9455 is a fast workhorse copier offering upgraded performance suited to larger volumes or highly productive workplace environments, where there is no time to waste.',
    },
    {
      model: 'Lexmark XC9465',
      modelNumber: '327580-898D0600',
      PagesPerMinute: '50',
      image: '9465.webp',
      paperSize: '11.69 x 16.54',
      ScanSpeed: '120',
      brand: 'lexmark',
      type: 'Multicolor',
      timeOut: '6.5',
      description:
        'The XC9335 is a budget-friendly brand new model suited for small to medium sized offices. At 35 pages per minute, the machine handles medium volume workflows in a durable, werkstable package.',
    },
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
    { name: `Products Sold`, url: `/products` },
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
          <h1 className={styles.title}>Our Top Multicolor Machines</h1>
          <div className={styles.line}></div>
        </div>
        <div className={styles.grid}>
          {copiers.map((copier) => {
            return (
              <div key={copier.modelNumber} className={styles.box}>
                <div>
                  <Image
                    src={`/static/${copier.image}`}
                    width={200}
                    height={200}
                    alt={'Discount Copier'}
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
                          localStorage.setItem(
                            'modelNumber',
                            `${copier.modelNumber}`,
                          )
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
                      <div className={styles.numberContainer}>
                        Model Number:
                      </div>
                      <div>{copier.modelNumber}</div>
                    </div>
                    <div className={styles.titleBlackSmall}>{copier.model}</div>
                    <div className={styles.rowNumber}></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Multicolor
