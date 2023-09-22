import { Results } from '@/types/project-data'
import Image from 'next/image'

import React, { useEffect, useRef } from 'react'

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
  const tags = projectsDates.properties.태그.multi_select
  const { url } = projectsDates

  const sliderRef = useRef<HTMLDivElement>(null)

  const handleWheel = (e: WheelEvent) => {
    e.preventDefault()
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += e.deltaY
    }
  }

  const handleClick = () => {
    window.location.assign(url)
  }

  const handleEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      window.location.assign(url)
    }
  }

  useEffect(() => {
    const slider = sliderRef.current
    if (slider) {
      // Add event listener with passive option set to false
      slider.addEventListener('wheel', handleWheel, {
        passive: false,
      })

      // Clean up on unmount
      return () => {
        slider.removeEventListener('wheel', handleWheel)
      }
    }
    return undefined
  }, [])

  return (
    <div
      className="project-card"
      onClick={handleClick}
      onKeyDown={handleEnter}
      role="button"
      tabIndex={0}
    >
      <div className="h-48 relative overflow-hidden">
        <Image
          className="rounded-t-xl object-cover"
          src={imageUrl}
          alt="cover-image"
          fill
          sizes="100vh"
          loading="eager"
        />
      </div>

      <div className="flex flex-col p-3 w-full gap-1">
        <h1>{title}</h1>

        <div>
          <p>{description}</p>
          <a className="underline" href={githubUrl}>
            깃허브 바로가기
          </a>

          <div className="flex gap-1">
            <p>{startDate}</p>
            <p>→</p>
            <p>{endDate}</p>
          </div>

          <div
            ref={sliderRef}
            className="flex gap-1 overflow-auto scrollbar-hide"
          >
            {tags.map((tag) => (
              <div className="tag" key={tag.id}>
                {tag.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
