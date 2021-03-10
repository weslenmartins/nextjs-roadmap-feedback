import { AppProps } from 'next/app'
import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'

import siteSetup from '../utils/setup'

import Header from '../components/Header'
import Footer from '../components/Footer'

import GlobalStyles from '../styles/globals'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Roadmap Feedback</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color={siteSetup.colorTheme}
        />
        <meta name="msapplication-TileColor" content={siteSetup.colorTheme} />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <GlobalStyles />
      <NextNprogress
        color={siteSetup.colorTheme}
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
      />
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default App
