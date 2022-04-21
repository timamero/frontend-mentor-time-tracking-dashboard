import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './Dashboard.module.css'
import UserCard from '../UserCard'
import TimeCard from '../TimeCard'

const Dashboard = () => {
  const [period, setPeriod] = useState('daily')
  const [timeData, setTimeData] = useState(null)

  useEffect(() => {
    axios({method: 'get', url: `http://localhost:3001/${period}`})
    .then(response => setTimeData(response.data))
  }, [period])

  const changePeriod = (newPeriod) => {
    setPeriod(newPeriod)
  }

  return (
    <div className={styles.dashboard}>
      <UserCard handlePeriodChange={changePeriod} period={period}/>
      {timeData?.map(data => {
        return (
          <TimeCard 
            key={data.id}
            title={data.title}
            current={data.timeframe.current}
            previous={data.timeframe.previous}
          />
        )
      })}
    </div>
  )
}

export default Dashboard