import React from 'react'
import styles from './UserCard.module.css'

const UserCard = ({ handlePeriodChange, period }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={require('../../images/image-jeremy.png')} />
        <div>
          <p>Report for</p>
          <p>Jeremy Robson</p>
        </div>
      </div>
      <div className={styles.menu}>
        <button 
          onClick={() => handlePeriodChange('daily')}
          className={period === 'daily' && styles.activeBtn}
        >
          Daily
        </button>
        <button 
          onClick={() => handlePeriodChange('weekly')}
          className={period === 'weekly' && styles.activeBtn}
        >
          Weekly
        </button>
        <button 
          onClick={() => handlePeriodChange('monthly')}
          className={period === 'monthly' && styles.activeBtn}
        >
          Monthly
        </button>
      </div>
    </div>
  )
}

export default UserCard