import React from 'react'
import styles from './Card.module.scss'
const Card = ({ children, size, image }) => {
    return (
        <div className={styles.wrapper + ' ' + styles[size]} >
            <div className={styles.card + ' ' + (image ?? styles.default_bg) }>
                {image && <img src={image} alt="" srcSet="" />}
                {children}
            </div>
        </div>
    )
}

export default Card