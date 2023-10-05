import React from 'react'
import Header from '../components/Header'
import DefaultPage from '../components/Default_Page'

function LandingPage() {
  return (
    <div>
        <Header prop={true} />
        <DefaultPage />
    </div>
  )
}

export default LandingPage