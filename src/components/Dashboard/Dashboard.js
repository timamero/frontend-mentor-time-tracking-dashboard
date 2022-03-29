import React from 'react'
import styles from './Dashboard.module.css'
import UserCard from '../UserCard'
import TimeCard from '../TimeCard'

const Dashboard = () => {
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