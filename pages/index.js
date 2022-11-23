import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'


export default function Home() {
    return <Layout home>
        <Head>
            <title> { siteTitle } </title>
        </Head>
        <section className={ utilStyles.headingMd }>
            <p>Hello, I'm Bunny. I'm a junior web developer ...</p>
            <p>(this is a sample website - you'll be building a site like this on { ' ' }
                <a href="https://nextjs.org/learn">our next.js tutorial</a>.)
            </p>
        </section>
    </Layout>
}