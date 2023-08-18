import axios from 'axios'

const DATABASE_ID = process.env.NOTION_DATABASE_ID
const { NOTION_TOKEN } = process.env

const options = {
  method: 'POST',
  url: `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${NOTION_TOKEN}`,
    'Notion-Version': '2022-06-28',
    'content-type': 'application/json',
  },
  data: { page_size: 100 },
}

const loadProjects = async () => {
  const res = await axios.request(options)
  return res.data
}

export default loadProjects
