import React from 'react'
import "./HeroContent.css"

const HeroContent=()=> {
  return (
    <main className='hero'>
        <h1 className='hero-title'>
        Summarizer
        </h1>
        <h4 className="hero-header">
        Summarize your favourite Podcasts and more with just a click!
        </h4>
        <div className='cta-container'>
            <button className='cta-btn-primary'>Summarize</button>
            <button className='cta-btn-secondary'>Upload</button>
        </div>
        
    </main>
  )
}

export default HeroContent