"use client"
import React from 'react'
import styles from "./styles.module.scss"
import PromptForm from './prompt-form'
import PromptSuggestions from './prompt-suggestions'
import Examples from './examples'
import { useHomePage } from './useHomePage'
import { ResultImage } from './result-image'


function HomePageContainer() {

  const test = useHomePage()

  console.log(test);
  return (
    <div className={styles.homePageContainer}>
      <h1 className={styles.title}>You just imagine,<br />we handle the rest</h1>
      <p>Tell us a prompt and we&apos;ll generate a story for you.</p>
      <PromptForm />
      <ResultImage/>
      <PromptSuggestions />
      <Examples />
    </div>
  )
}

export default HomePageContainer