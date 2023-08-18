import Layout from '@/components/layout'
import Head from 'next/head'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import loadProjects from '@/apis/load-projects'
import { Repo } from '@/types/project-data'

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
        <div key={projectsDates.id}>
          <h1>{projectsDates.properties.이름.title[0]?.text.content}</h1>
          <p>
            {projectsDates.properties.Description.rich_text[0]?.text.content}
          </p>
          <p>{projectsDates.properties.Github.url}</p>
          <p>{projectsDates.properties.workPeriod.date?.start}</p>
          <p>{projectsDates.properties.workPeriod.date?.end}</p>
        </div>
      ))}
    </Layout>
  )
}

export default Projects
