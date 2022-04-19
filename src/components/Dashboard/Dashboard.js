import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './Dashboard.module.css'
import UserCard from '../UserCard'
import TimeCard from '../TimeCard'

const Dashboard = () => {
  const [period, setPeriod] = useState('daily')
  const [timeData, setTimeData] = useState(null)

  useEffect(() => {
    console.log('getting data from period: ', period)
    axios({method: 'get', url: `http://localhost:3001/${period}`})
    .then(response => setTimeData(response.data))
  }, [period])

  if (timeData) {
    console.log('time data', timeData)
  }

  const changePeriod = (newPeriod) => {
    setPeriod(newPeriod)
  }

  return (
    <div className={styles.dashboard}>
      <UserCard />
      <TimeCard />
      <TimeCard />
      <TimeCard />
      <TimeCard />
      <TimeCard />
      <TimeCard />
    </div>
  )
}

export default Dashboard