import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Newsletter = () => {
    return (
        <section className="newsletter-section">
            <div className="modal-container row ">
                <div className="modal-inner row col-12 pb-3 pt-3">
                    <div className="modal-image text-center col-lg-4 col-12 ">
                        <img src="assets/images/logo/about-logo.WebP" alt="Modal Image" className="modal-img" />
                    </div>
                    <div className="col-lg-2 col-12"></div>
                    <div className="content-modal col-lg-6 col-12">
                        <h1 className="heading">Subscribe Newsletter</h1>
                        <p className="">Join the thousands of people who are already benefiting from our newsletter. Subscribe to emails now to get unique content and the latest information.</p>
                        <div className='colNews'>
                            
                            <form action="https://formspree.io/f/xoqoddrr" method="POST">
                                <FontAwesomeIcon icon={faEnvelope} className='logoNewsletter'></FontAwesomeIcon>
                                <input type='email' name='Enter Email' placeholder='Enter Email' required />
                                <button type='submit' value="Subscribe" ><FontAwesomeIcon icon={faArrowRight} className='loh'></FontAwesomeIcon></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter;