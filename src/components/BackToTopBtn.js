import React from "react"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import '../css/backToTopBtn.css'

const BackToTopBtn = () => {
    const [backToTopButton, setBackToTopButton] = useState(false)

    useEffect(() =>{
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top : 0,
            behavior :"smooth"
        })
    }

    return(
        <section className="section-backToTopBtn"> 
            {backToTopButton && (
                <button style={{
                }}
                onClick={scrollUp              }
                ><FontAwesomeIcon icon={faArrowUp} className="backToTop-icon" /></button>
            )}
        </section>
    )
}

export default BackToTopBtn