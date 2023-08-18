import Layout from '@/components/layout'
import Head from 'next/head'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'

type Repo = {
  name: string
  stargazers_count: number
}

export const getStaticProps: GetStaticProps<{
  repo: Repo
}> = async () => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const repo = await res.json()
  return { props: { repo } }
}

const Projects = ({ repo }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <Head>
        <title>codnr 포트폴리오</title>
        <meta name="description" content="codnr의 포트폴리오 입니다." />
      </Head>
      <h1>프로젝트</h1>
    </Layout>
  )
}

export default Projects
