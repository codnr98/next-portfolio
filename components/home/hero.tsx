import Link from 'next/link'
import Animation from './animation'

const Hero = () => {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요. 프론트엔드 개발자 이채욱입니다.
          <br className="hidden lg:inline-block" />
        </h1>
        <p className="mb-8 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam,
          officia laboriosam? Hic, magnam deleniti. Ea odit repudiandae qui
          impedit culpa. Quaerat magnam corporis a odio voluptatem consectetur
          cum asperiores exercitationem! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Quidem aut provident veniam fugit accusantium eius,
          quia illo repellat, quaerat eaque sunt vitae architecto facilis cum
          explicabo corrupti facere eveniet doloremque.
        </p>
        <div className="flex justify-center">
          <Link href="projects" className="btn-project">
            프로젝트 보러가기
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  )
}

export default Hero
