import React, { useState } from 'react'
import styles from './TimeCard.module.css'

const TimeCard = () => {
  const [mainBGColor, setMainBGColor] = useState('var(--darkBlue)')
  const handleMainEnter = (e) => {
    setMainBGColor('var(--desaturatedBlue)')
  }
  const handleMainLeave = (e) => {
    setMainBGColor('var(--darkBlue)')
  }
  const handleSVGEnter = (e) => {
    setMainBGColor('var(--darkBlue)')
  }
  const handleSVGLeave = (e) => {
    setMainBGColor('var(--desaturatedBlue)')
  }

  return (
    <div className={styles.card}>
      <div 
        className={styles.background}
        style={{backgroundColor: 'var(--lightRed1)'}}
      >
        <div className={styles.iconWrapper}>
          <img src={require('../../images/icon-work.svg')} />
        </div>
        <div 
          className={styles.main}
          style={{backgroundColor: mainBGColor }}
          onMouseEnter={handleMainEnter}
          onMouseLeave={handleMainLeave}
        >
          <div className={styles.ellipsisWrapper}>
            <svg
              className={styles.ellipsisSVG}
              onMouseEnter={handleSVGEnter}
              onMouseLeave={handleSVGLeave}
              width="21"
              height="5" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"/>
            </svg>
          </div>
          <div className={styles.flexGrid}>
            <div className={styles.title}>Work</div>
            
            <div className={styles.hours}>32hrs</div>
            <div className={styles.lastHours}>Last Week - 36hrs</div>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default TimeCard