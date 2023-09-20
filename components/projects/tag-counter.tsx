import React, { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { useTheme } from 'next-themes'

type Props = {
  tagCount: { [index: string]: number }
}

const TagCounter = ({ tagCount }: Props) => {
  const [tags, setTags] = useState<[string, number][]>([])
  const { theme, setTheme } = useTheme()

  const sortObject = (obj: { [index: string]: number }) => {
    return Object.entries(obj).sort((a, b) => b[1] - a[1])
  }

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  )

  const options = {
    indexAxis: 'y' as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    scales: {
      x: {
        ticks: {
          stepSize: 1,
          color: theme === 'dark' ? 'white' : 'rgb(100 116 139)',
        },
      },
      y: {
        ticks: {
          color: theme === 'dark' ? 'white' : 'rgb(100 116 139)',
          beginAtZero: true,
        },
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  }

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

  useEffect(() => {
    setTags(sortObject(tagCount))
    console.log(tags)
  }, [tagCount])

  return <Bar options={options} data={data} />
}

export default TagCounter
