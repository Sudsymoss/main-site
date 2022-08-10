import Head from 'next/head'
import styles from '../../styles/Projects.module.css'
import { Footer } from '../../compnents/footer'
import { Nav } from '../../compnents/nav'

export default function Goog({ project }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>{project.id}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <main className={styles.main}>
                <h1 className={styles.title}>
                    {project.name}
                </h1>
                <div id={styles.arrowDownFade}>
                    <img src="/downArrow.svg" class={styles.arrowDown}></img>
                </div>
            </main>
            <div className={styles.body}>
                <h1>
                    {project.name}
                </h1>
                {project.about}
                <br />
                <div className={styles.website}>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export async function getServerSideProps({ params }) {
    const req = await fetch(`http://192.168.1.221/api/${params.id}`)
    const data = await req.json()
    console.log(data)
    return {
        props: { project: data },
    }
}
