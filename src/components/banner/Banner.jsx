
import React from 'react'
import './banner.css'
import bannerImg from '../../utils/images/bannerImage.jpg'
const Banner = () => {
    return (
        <>
            <section className="banner">
                <div className="banner-container">
                    <img src={bannerImg} alt="" />
                </div>
                <div className="banner-detail">
                    <div className="desc">
                        <h1>
                            Unleash the Fury
                        </h1>
                        <h3>
                            Join the Metal Revolution with Mass Punishment - Where Darkness and Sound Collide!
                        </h3>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner
