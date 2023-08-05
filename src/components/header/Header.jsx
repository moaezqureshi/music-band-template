import React, { useEffect, useState } from 'react'
import './header.css'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { BiLogoFacebook } from 'react-icons/bi'
const Header = () => {


    const [show, setShow] = useState(false)
    console.log(show)

    useEffect(() => {
        // what should we do when scrolling occurs
        function runOnScroll(element) {
            // not the most exciting thing, but a thing nonetheless
            console.log(window.pageYOffset);
            if (window.pageYOffset > 99) {
                setShow(true)
            }else {
                setShow(false)
            }
        };

        return () => {
            window.addEventListener("scroll",() => runOnScroll());
        }
    }, [])
    return (
        <>
            <nav>

                <section className="header">
                    <div className="container">
                        <div className="header-elements">

                            <div className="logo-container">
                                <span
                                    data-aos-duration='3000'
                                    data-aos-offset="200"
                                    data-aos="fade-up-left"
                                    className='logo'
                                >Logo</span>
                            </div>

                            <div className="social-menu">
                                <ul className="social-items">
                                    <li className="menu-item">
                                        <span>
                                            <AiOutlineInstagram size={22} />
                                        </span>
                                        <span>
                                            Instagram
                                        </span>
                                    </li>
                                    <li className="menu-item">
                                        <span>
                                            <BiLogoFacebook size={22} />
                                        </span>
                                        <span>
                                            FaceBook
                                        </span>
                                    </li>
                                    <li className="menu-item">
                                        <span>
                                            <AiOutlineTwitter size={22} />
                                        </span>
                                        <span>
                                            Twitter
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={`headerSticky header ${show  ? 'show':''}`}>
                    <div className="container">
                        <div className="header-elements">

                            <div className="logo-container">
                                <span
                                    data-aos-duration='3000'
                                    data-aos-offset="200"
                                    data-aos="fade-up-left"
                                    className='logo'
                                >Logo</span>
                            </div>



                        </div>
                    </div>
                </section>
            </nav>
        </>
    )
}

export default Header
