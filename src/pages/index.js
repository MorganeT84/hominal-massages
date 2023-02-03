import Head from 'next/head' 
import { Inter } from '@next/font/google' 
import Layout from '@/components/Layout/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Layout>
        <h1>Home page</h1>
      </Layout>
    </>
  )
}
