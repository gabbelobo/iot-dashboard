import React from 'react'
import Card from '../Card'
import styles from './Stat.module.scss'
const Stat = ({ title, description, value, unit, children }) => {
    return (
        <Card size={'small'}>
            <div className={styles.stat}>
                <div  className={styles.left}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <h3>{value}{unit}</h3>
                </div>
                <div className={styles.graph}>
                    {children}
                </div>
            </div>
        </Card>
    )
}

export default Stat