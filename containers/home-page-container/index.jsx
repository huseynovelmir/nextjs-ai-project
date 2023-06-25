import React from 'react'
import styles from "./styles.module.scss"
import PromptForm from './prompt-form'
import PromptSuggestions from './prompt-suggestions'

function HomePageContainer() {
  return (
    <div className={styles.homePageContainer}>
      <h1 className={styles.title}>You just imagine,<br/>we handle the rest</h1>
      <p>Tell us a prompt and we&apos;ll generate a story for you.</p>
      <PromptForm/>
      <PromptSuggestions/>
    </div>
  )
}

export default HomePageContainer