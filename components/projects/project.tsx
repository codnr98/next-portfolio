import { Results } from '@/types/project-data'
import Image from 'next/image'

type Props = {
  projectsDates: Results
}
const Project = ({ projectsDates }: Props) => {
  const title = projectsDates.properties.이름.title[0]?.text.content
  const imageUrl =
    projectsDates.cover?.external?.url || projectsDates.cover?.file?.url
  const description =
    projectsDates.properties.Description.rich_text[0]?.text.content
  const githubUrl = projectsDates.properties.Github.url
  const startDate = projectsDates.properties.workPeriod.date?.start
  const endDate = projectsDates.properties.workPeriod.date?.end

  return (
    <div className="flex flex-col p-6 m-3 bg-slate-700 rounded-md">
      <Image src={imageUrl} alt="cover-image" width={100} height={60} />
      <h1>{title}</h1>
      <p>{description}</p>
      <a href={githubUrl}>깃허브 바로가기</a>
      <p>{startDate}</p>
      <p>{endDate}</p>
    </div>
  )
}

export default Project
