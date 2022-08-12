import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/About.module.css'
import Link from 'next/link'
import { Footer } from '../compnents/footer'
import { Nav } from '../compnents/nav'

export default function Src() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Src</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Source Code
                </h1>
                <div id={styles.arrowDownFade}>
                    <img src="/downArrow.svg" className={styles.arrowDown}></img>
                </div>
            </main>
            <section className={styles.body} id={styles.main}>
                <h1>GitHub</h1>
                <p><Link href="https://github.com/Sudsymoss" passHref><a>github.com/Sudsymoss</a></Link></p>
                <p>^ CLICK ^</p>
            </section>
            <Footer />
        </div>
    )
}