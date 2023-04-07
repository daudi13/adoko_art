import React from 'react'
import styles from '@/styles/Footer.module.scss'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className={styles.footer}>
      <p>&copy;Adoko Arts {year}</p>
    </div>
  )
}

export default Footer