import React from 'react'
import styles from "./styles.module.scss"
import { SUGGESTIONS } from './constants'
import {Tag} from '@/components/tag'

function PromptSuggestions() {
    return (
        <div className={styles.promptSuggestions}>
            <h3 className={styles.title}>
                Nothing in mind? Try one of these prompts:
            </h3>
            <div className={styles.suggestions}>
                {SUGGESTIONS.map((suggestions) => (
                    <Tag title={suggestions.title} key={suggestions.id}/>
                ))}
            </div>
        </div>
    )
}

export default PromptSuggestions