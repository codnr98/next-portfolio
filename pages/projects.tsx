import Layout from '@/components/layout'
import Head from 'next/head'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import loadProjects from '@/apis/load-projects'
import { Repo, Results } from '@/types/project-data'
import Project from '@/components/projects/project'
// import { useEffect, useState } from 'react'
// import TagCounter from '@/components/projects/tag-counter'

export const getStaticProps: GetStaticProps<{
  projects: Repo
}> = async () => {
  const res = await loadProjects()
  const projects = await res
  return { props: { projects } }
}

// type Tags = {
//   [index: string]: number
// }

const Projects = ({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  // const [tagCount, setTagCount] = useState<Tags>({})

  // const getTags = (list: Results[]) => {
  //   const result: Tags = {}
  //   list.forEach((project) => {
  //     const tags = project.properties.태그.multi_select
  //     tags.forEach((element) => {
  //       const tag = element.name
  //       if (!result[tag]) {
  //         result[tag] = 0
  //       }
  //       result[tag] += 1
  //     })
  //   })
  //   // console.log(result)
  //   return result
  // }

  // useEffect(() => {
  //   // setTagCount(getTags(projects.results))
  // }, [projects])

  return (
    <Layout>
      <Head>
        <title>codnr 포트폴리오</title>
        <meta name="description" content="codnr의 포트폴리오 입니다." />
      </Head>
      <div className="flex flex-col justify-start items-start min-h-screen">
        <h1 className="mb-4 text-xl">
          총 프로젝트 : {projects.results.length}
        </h1>
        {/* 
        <div className="flex mb-5 w-full md:h-80">
          <TagCounter tagCount={tagCount} />
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {projects.results.map((projectsDates) => (
            <Project key={projectsDates.id} projectsDates={projectsDates} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Projects
