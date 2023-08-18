import Layout from '@/components/layout'
import Head from 'next/head'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import loadProjects from '@/apis/load-projects'

type Repo = {
  results: []
}

export const getStaticProps: GetStaticProps<{
  projects: Repo
}> = async () => {
  const res = await loadProjects()
  const projects = await res
  return { props: { projects } }
}

const Projects = ({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <Head>
        <title>codnr 포트폴리오</title>
        <meta name="description" content="codnr의 포트폴리오 입니다." />
      </Head>
      <h1>프로젝트</h1>
      <p>총 프로젝트 : {projects.results.length}</p>
    </Layout>
  )
}

export default Projects
