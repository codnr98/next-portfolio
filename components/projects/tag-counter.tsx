type Tags = {
  [index: string]: number
}

const TagCounter = ({ tagCount }: Tags) => {
  const sortObject = (obj: number) => {
    return Object.entries(obj).sort((a, b) => {
      return b[1] - a[1]
    })
  }
  console.log(sortObject(tagCount))
  return <div />
}

export default TagCounter
