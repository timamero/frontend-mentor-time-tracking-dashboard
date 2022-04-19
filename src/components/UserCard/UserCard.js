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
          className={period === 'daily' ? styles.activeBtn : undefined}
        >
          Daily
        </button>
        <button 
          onClick={() => handlePeriodChange('weekly')}
          className={period === 'weekly' ? styles.activeBtn : undefined}
        >
          Weekly
        </button>
        <button 
          onClick={() => handlePeriodChange('monthly')}
          className={period === 'monthly' ? styles.activeBtn : undefined}
        >
          Monthly
        </button>
      </div>
    </div>
  )
}

export default UserCard