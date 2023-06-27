"use client"
import React from 'react'
import styles from "./styles.module.scss"
import { EXAMPLES } from './constants'
import { Tag } from '@/components/tag'
import Image from 'next/image'
import { useHomePage } from '../useHomePage'

function Examples() {
    const {changePrompt} = useHomePage()

    return (
        <div className={styles.examples}>
            {EXAMPLES.map(ex =>
                <div key={ex.id} className={styles.example}>
                    <h4>{ex.prompt}</h4>
                    <Tag title='Copy' onClick={() => changePrompt(ex.prompt)} />
                    <Image src={ex.image} alt={ex.prompt} fill/>
                </div>
            )}
        </div>
    )
}

export default Examples