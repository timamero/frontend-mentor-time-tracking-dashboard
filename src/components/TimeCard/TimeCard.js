import React from 'react'
import styles from './TimeCard.module.css'

const TimeCard = () => {
  const headerBackgroundColor = getComputedStyle(document.body).getPropertyValue('--lightRed1')
  // console.log('color: ', headerBackgroundColor)
  return (
    <div className={styles.card}>
      <div 
        className={styles.header}
        style={{backgroundColor: headerBackgroundColor}}
      >
        <img src={require('../../images/icon-work.svg')} />
      </div>
      <div>
        <div>
          <div>Work</div>
          <div>menu</div>
        </div>
        <div>32hrs</div>
        <div>LastWeek - 36hrs</div>
      </div>
    </div>
  )
}

export default TimeCard