import Head from 'next/head'
import Layout from '@/components/layout'
import Hero from '@/components/home/hero'
import Script from 'next/script'

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>codnr 포트폴리오</title>
        <meta name="description" content="codnr의 포트폴리오 입니다." />
      </Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-3VEEJKFBEW" />
      <Script id="google-analytics">
        {`  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-3VEEJKFBEW');`}
      </Script>
      <section className="flex min-h-screen flex-col items-center justify-start text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Hero />
        </div>
      </section>
    </Layout>
  )
}

export default Home
