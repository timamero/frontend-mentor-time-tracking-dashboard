import React from 'react'
import styles from './Dashboard.module.css'
import UserCard from '../UserCard'
import TimeCard from '../TimeCard'

const Dashboard = () => {
  return (
    <div>
      <UserCard />
      <TimeCard />
      
    </div>
  )
}

export default Dashboard