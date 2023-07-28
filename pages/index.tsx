import Head from 'next/head'
import Layout from '@/components/layout'

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>codnr 포트폴리오</title>
        <meta name="description" content="codnr의 포트폴리오 입니다." />
      </Head>
      <h1 className="text-3xl">홈입니다.</h1>
    </Layout>
  )
}

export default Home
