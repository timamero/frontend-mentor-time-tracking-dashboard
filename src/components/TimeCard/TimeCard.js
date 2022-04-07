import React from 'react'
import styles from './TimeCard.module.css'

const TimeCard = () => {
  return (
    <div className={styles.card}>
      <div 
        className={styles.background}
        style={{backgroundColor: 'var(--lightRed1)'}}
      >
        <div className={styles.iconWrapper}>
          <img src={require('../../images/icon-work.svg')} />
        </div>
        <div className={styles.main}>
          <div className={styles.flexGrid}>
            <div className={styles.title}>Work</div>
            <div className={styles.ellipsis}>
              <img src={require('../../images/icon-ellipsis.svg')} />
            </div>
            <div className={styles.hours}>32hrs</div>
            <div className={styles.lastHours}>Last Week - 36hrs</div>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default TimeCard