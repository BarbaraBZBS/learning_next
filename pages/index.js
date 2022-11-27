import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export const getStaticProps = async () => {

    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}


///// EXAMPLES
//example when fetching from external api endpoint:
// export async function getSortedPostsData() {
//     // Instead of the file system,
//     // fetch post data from an external API endpoint
//     const res = await fetch( '..' );
//     return res.json();
// }

//example when querying database directly:
// import someDatabaseSDK from 'someDatabaseSDK'

// const databaseClient = someDatabaseSDK.createClient( ...)

// export async function getSortedPostsData() {
//     // Instead of the file system,
//     // fetch post data from a database
//     return databaseClient.query( 'SELECT posts...' )
// }


export default function Home( { allPostsData } ) {
    return <Layout home>
        <Head>
            <title> { siteTitle } </title>
        </Head>
        <section className={ `${ utilStyles.headingMd } ${ utilStyles.padding1px }` }>
            <h2 className={ utilStyles.headingLg }>Blog</h2>
            <ul className={ utilStyles.list }>
                { allPostsData.map( ( { id, date, title } ) => (
                    <li className={ utilStyles.listItem } key={ id }>
                        <Link href={ `/posts/${ id }` }>{ title }</Link>
                        <br />
                        <small className={ utilStyles.lightText }>
                            <Date dateString={ date } />
                        </small>
                    </li> ) ) }
            </ul>
            {/* <p>Hello, I'm Bunny. I'm a junior web developer ...</p>
            <p>(this is a sample website - you'll be building a site like this on { ' ' }
                <a href="https://nextjs.org/learn">our next.js tutorial</a>.)
            </p> */}
        </section>
    </Layout>
}