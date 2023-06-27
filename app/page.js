import React from 'react'
import HomePageContainer from '@/containers/home-page-container'
import { HomePageProvider } from '@/containers/home-page-container/useHomePage'

function HomePage() {
  return (
    <div>
        <HomePageProvider>
           <HomePageContainer/>
        </HomePageProvider>
    </div>
  )
}

export default HomePage