import React from 'react'
import './maincontianer.css'
import Aos from 'aos'
import Banner from '../banner/Banner'

const MainContainer = () => {
  return (
    <>
      <Banner />
      <div className="main-home" >
        <section className="little-quote">
          <div className="container">
            <span className="quote-container">
              Experience the maelstrom of energy as we command the stage - a sonic onslaught of headbanging rhythms, blistering guitars, and an atmosphere uniting metalheads in celebration.
            </span>
          </div>
        </section>
        <section className="our-music">
          <div className="container">
            <div className="our-music-heading">
              Get a Taste of Our Music
            </div>
            <div className="our-music-desc">
              Prepare to be swept away by a sonic storm of crushing guitar solos, bone-shaking basslines, and vocals that alternate between haunting melodies and guttural screams. Our music delves into themes of darkness, inner struggles, and the human experience, reflecting the raw emotions that fuel the fire of heavy metal.
            </div>
            <div className="our-music-video">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/pUsqq6wkMZI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default MainContainer
