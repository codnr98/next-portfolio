import Layout from '@/components/layout'
import Head from 'next/head'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import loadProjects from '@/apis/load-projects'
import { Repo } from '@/types/project-data'
import Project from '@/components/projects/project'

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
      <h1>총 프로젝트 : {projects.results.length}</h1>
      {projects.results.map((projectsDates) => (
        <Project key={projectsDates.id} projectsDates={projectsDates} />
      ))}
    </Layout>
  )
}

export default Projects
