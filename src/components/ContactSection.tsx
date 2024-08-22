import { useState } from 'react'

function ContactSection(sectionId: {id: string}) {

    const [emailText, setEmailText] = useState(" Send an email")

    const emailClicked = () => {
        setEmailText("rubin.igal.w@gmail.com");
    }

    return(
    <section id={sectionId.id} className="contact-section">
        <h1>How to contact me...</h1>
        <div>
            <a href="https://www.linkedin.com/in/igal-rubin/" target="_blank" className="btn"><i className="fab fa-linkedin"></i> Linkedin</a>
            <a href="https://github.com/rubinigal" target="_blank" className="btn"><i className="fab fa-github"></i> GitHub</a>
            <a href="mailto:rubin.igal.w@gmail.com" onClick={emailClicked} className="btn"><i className="fas fa-at"></i>{emailText}</a>
            <a href="tel:050-200-7895" target="_blank" className="btn"><i className="fas fa-mobile-alt"></i> Call me</a>
        </div>
    </section>
    );
}

export default ContactSection