import '../styles/globals.scss'
import {Layout} from '../components'
import Script from 'next/script'
import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4947463072730532"
     crossorigin="anonymous"></Script>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp
