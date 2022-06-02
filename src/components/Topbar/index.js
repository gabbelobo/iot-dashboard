import React from 'react'
import styles from './Topbar.module.scss'
const Topbar = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.title}>
            <h2>IoT Dashboard</h2>
        </div>
        <div className={styles.profile}>
            <div className={styles.picture}></div>
        </div>
    </div>
  )
}

export default Topbar