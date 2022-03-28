import React from 'react'
import styles from './UserCard.module.css'

const UserCard = () => {
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
        <button>Daily</button>
        <button>Weekly</button>
        <button>Monthly</button>
      </div>
    </div>
  )
}

export default UserCard