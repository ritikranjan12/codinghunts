import '../styles/globals.scss'
import {Layout} from '../components'
import React, {useEffect,useState} from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
