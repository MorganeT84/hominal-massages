import Head from 'next/head' 
import { Inter } from '@next/font/google' 
import Layout from '@/components/Layout/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Lieux() {
  return (
    <>
      <Head>
        <title>Les différents lieux où se faire masser par Isabelle</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Layout>
        <h1>Lieux d&apos;exercice</h1>
      </Layout>
    </>
  )
}
