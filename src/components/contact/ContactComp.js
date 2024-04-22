const ContactComp = () => {
    return (
        <section className="Contact">
            {/* <div className="container">
                <div className="contact-box row">
                    <div className="left col-lg-6 col-12">
                        <iframe className=" maps mt-3" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253741.41689444406!2d106.49425108671875!3d-6.431333699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e906913915c7%3A0x1de9ddf653d9736f!2sIYSA!5e0!3m2!1sid!2sid!4v1689664084076!5m2!1sid!2sid" width="400" height="500" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <form className="right col-lg-6 col-12" action="https://formspree.io/f/mbjvlnjv" method="POST">
                        <h2>Contact Us</h2>
                        <input type="text" className="field" placeholder="Full Name" />
                        <input type="email" className="field" placeholder="Email" />
                        <input type="text" className="field" placeholder="Phone" />
                        <textarea placeholder="Message" className="field"></textarea>
                        <button className="btn-contact" type="submit" value="">Send</button>
                    </form>
                </div>
            </div> */}

            <div className="contact-in">
                <div className="contact-map">
                <iframe className=" maps mt-3" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253741.41689444406!2d106.49425108671875!3d-6.431333699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e906913915c7%3A0x1de9ddf653d9736f!2sIYSA!5e0!3m2!1sid!2sid!4v1689664084076!5m2!1sid!2sid" width="400" height="500" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="contact-form">
                    <h1 className="text-center">Contact Us</h1>
                    <form className="form" action="https://formspree.io/f/mbjvlnjv" method="POST">
                        <input type="text" name="Full Name" placeholder="Full Name" className="contact-form-txt" required autoComplete="off"/>
                        <input type="Email" name="Email" placeholder="Email" className="contact-form-txt " required autoComplete="off"/>
                        <input type="text" name="Phone" placeholder="Phone" className="contact-form-txt" required autoComplete="off"/>
                        <textarea  name="Message" placeholder="Message" className="contact-form-txtarea" required autoComplete="off"></textarea>
                        <input type="submit" name="Submit" value="Send" className="contact-form-btn"/>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactComp
