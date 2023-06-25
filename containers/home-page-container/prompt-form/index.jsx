"use client"
import { useState } from 'react'
import styles from "./styles.module.scss"

function PromptForm() {
  const [prompt, setPrompt] = useState("")
  const handleFormSubmit = (e) => {
    setPrompt(e.target.value) 
   }

  return (
    <div className={styles.promptForm}>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <textarea
          className={styles.promptTextarea}
          rows={2}
          type="text"
          required
          value={prompt}
          onChange={handleFormSubmit}
          placeholder="An orchestra of characters playing instruments on fire in a chapel + surrounded by ghosts made out of chiseled marble"
        />

        <button className={styles.generateButton} type='submit'>Generate</button>
      </form>
    </div>
  )
}

export default PromptForm