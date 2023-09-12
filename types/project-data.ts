export type Repo = {
  results: Results[]
}

type Cover = {
  type: string
  file: { url: string }
  external: {
    url: string
  }
}

export type Results = {
  id: string
  created_time: string
  last_edited_time: string
  cover: Cover
  properties: Properties
  url: string
}

type Properties = {
  태그: MultiselectProperty
  workPeriod: WorkPeriod
  Description: Description
  Github: UrlProperty
  이름: TitleProperty
}

type MultiselectProperty = {
  multi_select: MultiselectOption[]
}
type MultiselectOption = {
  id: string
  name: string
  color: string
}

type WorkPeriod = {
  date: {
    start: string
    end: string
  }
}

type Description = {
  rich_text: RichText[]
}

type RichText = {
  text: {
    content: string
  }
}

type UrlProperty = {
  url: string
}

type TitleProperty = {
  id: string
  type: string
  title: RichText[]
}
