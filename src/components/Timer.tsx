import { useEffect, useLayoutEffect, useState } from 'react'

const primaryDate = new Date('2022-10-01T14:00:00')

const round = (n: number): string => {
  return n < 10 ? `0${n}` : n.toString()
}

const printDate = (date: Date): string => {
  const diff = new Date(primaryDate.valueOf() - date.valueOf());
  const seconds = round(diff.getSeconds())
  const minutes = round(diff.getMinutes())
  const hours = round(diff.getHours())
  const days = round(diff.getDate())
  return `${days} ДНЕЙ ${hours}:${minutes}:${seconds}`
}

export const Timer = () => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return <>{printDate(date)}</>
}