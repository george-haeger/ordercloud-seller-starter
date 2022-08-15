import Head from 'next/head'

import Container from '../components/Container';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Grid from '../components/Grid';
import Card from '../components/Card';

import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>OrderCloud React/Next Starter Kit</title>
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="description"
          content="Create a custom UI/UX for our HeadStart application"
        ></meta>
      </Head>

      <Main>
        <h1 className={styles.title}>
          OrderCloud React/Next Starter Kit
        </h1>

        <p className={styles.description}>
          Create a custom UI/UX for our HeadStart application
        </p>

        <Grid>
        <Card>
            <a href="/login">
              <h2>Admin Seller Login &rarr;</h2>
              <p>Log into the the HeadStart Seller Application</p>
            </a>
          </Card>

          <Card>
            <a href="https://nextjs.org/docs">
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </Card>

          <Card>
            <a href="https://nextjs.org/learn">
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>
          </Card>

          <Card>
            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            >
              <h2>Deploy &rarr;</h2>
              <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
            </a>
          </Card>
        </Grid>
      </Main>

      <Footer />
    </Container>
  )
}
