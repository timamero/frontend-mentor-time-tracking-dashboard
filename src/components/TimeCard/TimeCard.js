import React, { useState } from 'react'
import styles from './TimeCard.module.css'
import workIcon from '../../images/icon-work.svg'
import playIcon from '../../images/icon-play.svg'
import studyIcon from '../../images/icon-study.svg'
import exerciseIcon from '../../images/icon-exercise.svg'
import socialIcon from '../../images/icon-social.svg'
import selfCareIcon from '../../images/icon-self-care.svg'

const TimeCard = ({ title, current, previous }) => {
  const [mainBGColor, setMainBGColor] = useState('var(--darkBlue)')
  let headerBackground
  let icon
  switch (title) {
    case 'Work':
      headerBackground = 'var(--lightRed1)'
      icon= 'work'
      break
    case 'Play':
      headerBackground = 'var(--softBlue)'
      icon= 'play'
      break
    case 'Study':
      headerBackground = 'var(--lightRed2)'
      icon= 'study'
      break
    case 'Exercise':
      headerBackground = 'var(--limeGreen)'
      icon= 'exercise'
      break
    case 'Social':
      headerBackground = 'var(--violet)'
      icon= 'social'
      break
    default:
      headerBackground = 'var(--softOrange)'
      icon= 'self-care'
      break
  }

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

  const iconSrc = `../../images/icon-${icon}.svg`
  
  return (
    <div className={styles.card}>
      <div 
        className={styles.background}
        style={{backgroundColor: headerBackground}}
      >
        <div className={styles.iconWrapper}>
          <img src={require(iconSrc)} />
        </div>
        <div 
          className={styles.main}
          style={{backgroundColor: mainBGColor }}
          onMouseEnter={handleMainEnter}
          onMouseLeave={handleMainLeave}
        >
          <div className={styles.flexGrid}>
            <div className={styles.title}>{title}</div>
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
            <div className={styles.hours}>{current}hrs</div>
            <div className={styles.lastHours}>Last Week - {previous}hrs</div>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default TimeCard