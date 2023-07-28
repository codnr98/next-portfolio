import Head from 'next/head'
import Layout from '@/components/layout'

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>codnr 포트폴리오</title>
        <meta name="description" content="codnr의 포트폴리오 입니다." />
      </Head>
      <h1>오늘도 빡코딩</h1>
    </Layout>
  )
}

export default Home
