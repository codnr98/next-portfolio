## 소개
### codnr Portfolio
Notion API를 활용한 NextJS 기반 포트폴리오 사이트 입니다.

<br/>

## 기술스택

![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=flat) ![Next.js Badge](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=flat) ![Axios Badge](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=fff&style=flat) ![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat) ![Chart.js Badge](https://img.shields.io/badge/Chart.js-FF6384?logo=chartdotjs&logoColor=fff&style=flat)
![Vercel Badge](https://img.shields.io/badge/Vercel-000?logo=vercel&logoColor=fff&style=flat) ![npm Badge](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=fff&style=flat)

<br/>

## 배포 URL

[next-portfolio-lyart-pi.vercel.app](https://next-portfolio-lyart-pi.vercel.app/)

<br/>

## 구현기능
### Dark Mode 구현
next-themes 라이브러리를 사용하여 Dark Mode를 구현하였다.

`_app.tsx`파일의 `<Component>`태그의 상위에 `<ThemeProvider>` 태그를 위치시켜 프로젝트 어디에서든 Theme을 사용할 수 있도록 설정한다.
```jsx
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
```

next-themes에서 제공하는 `useTheme()` 훅을 사용하여 theme의 상태를 관리하고 접근할 수 있다.
```jsx
const DarkModeToggleButton = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
    >
      Button
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  )
}
```

### Notion API를 통해 프로젝트 데이터 불러오기
이 프로젝트에서는 Notion에서 제공하는 Notion API를 통해서 포트폴리오의 정보를 담을 DB와 API를 구현하였다.

먼저 프로젝트와 Notion Databases를 연동을 위해 Notion 토큰과 해당 포트폴리오의 Database의 ID 값을 환경변수로 받아와 REST API 요청을 인증하는데 사용한다.
```jsx
const options = {
  method: 'POST',
  url: `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${NOTION_TOKEN}`,
    'Notion-Version': '2022-06-28',
    'content-type': 'application/json',
  },
  data: {
    page_size: 100,
    sorts: [{ property: 'workPeriod', direction: 'descending' }],
  },
}
```
API 요청의 Body Params에 데이터를 받아오는 조건을 담을 수 있다.

### Chart.js를 통해 프로젝트에 사용된 기술스택을 그래프로 표시
Notion API를 통해 받은 포트폴리오의 데이터에서 기술스택 태그의 정보만 가져와 객체에 담은 후 내림차순으로 정렬하였다.
```jsx
const getTags = (list: Results[]) => {
    const result: Tags = {}
    list.forEach((project) => {
      const tags = project.properties.태그.multi_select
      tags.forEach((element) => {
        const tag = element.name
        if (!result[tag]) {
          result[tag] = 0
        }
        result[tag] += 1
      })
    })
    return result
  }

...

const sortObject = (obj: { [index: string]: number }) => {
    return Object.entries(obj).sort((a, b) => b[1] - a[1])
  }
```

기술스택의 이름은 그래프의 y축의 labels에 담고 막대로 표시할 데이터에 기술스택의 사용횟수를 담아 그래프를 구현하였다.
```jsx
const labels = tags?.map((e) => e[0])

  const data = {
    labels,
    datasets: [
      {
        color: 'rgb(186 230 253)',
        label: '',
        fill: true,
        data: tags?.map((e) => e[1]),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  }
```
