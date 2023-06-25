"use client"
import React from 'react'
import styles from "./styles.module.scss"

function Tag({title, onClick}) {
    const handleClick = () => {
        if (onClick) {
            onClick(title)
        }
    }

  return (
    <button className={styles.tag} onClick={handleClick}>{title}</button>
  )
}

export  {Tag}