import React from 'react'
import styles from './TimeCard.module.css'

const TimeCard = () => {
  const headerBackgroundColor = getComputedStyle(document.body).getPropertyValue('--lightRed1')

  return (
    <div className={styles.card}>
      <div 
        className={styles.background}
        style={{backgroundColor: headerBackgroundColor}}
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