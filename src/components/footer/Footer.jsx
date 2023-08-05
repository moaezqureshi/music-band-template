import React, { useEffect } from 'react'
import './footer.css'
const Footer = () => {

    useEffect(()=>{
        return()=>{
            window.addEventListener(scroll, ()=>{

            })
        }
    },[])
    return (
        <>
            <section className='footer'>
                    <div className="footer-header">
                        <div className="image-container">
                            <span>
                                Logo
                            </span>
                        </div>
                    </div>
                    <div className="footer-menu">
                        <div className="menu">
                            <ul>
                                <li>Link 1</li>
                                <li>Link 1</li>
                                <li>Link 1</li>
                                <li>Link 1</li>
                            </ul>
                        </div>
                        <div className="menu">
                            <ul>
                                <li>Link 1</li>
                                <li>Link 1</li>
                                <li>Link 1</li>
                                <li>Link 1</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="copyright">
                            All copyrights are reserved to <a href="https://www.instagram.com/developoland/" target='_blank'>Moaez Qureshi</a>
                        </div>
                    </div>
            </section>
        </>
    )
}

export default Footer
