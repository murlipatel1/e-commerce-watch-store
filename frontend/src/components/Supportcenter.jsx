import './supportcenter.css'
import React, { useState } from 'react';

function SupportCenter() {
    const [showContactForm, setShowContactForm] = useState(false);

    const handleShowContactForm = () => {
        setShowContactForm(true);
    };

    const handleCloseContactForm = () => {
        setShowContactForm(false);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Your message has been submitted successfully! We will contact you via email.');
        setShowContactForm(false);
    };

    return (
        <div className="container">
            <h1>Support Center</h1>
            <div className="support-section">
                <img src="./img/supportcentre.jpg" alt="Support Center Image" style={{ width: '100%', maxWidth: '400px', display: 'block', margin: '0 auto 20px' }} />
                <h2>How can we help you?</h2>
                <p>If you have any questions, concerns, or feedback, please feel free to contact our support team. We are here to assist you!</p>
                <button className="contact-button" onClick={handleShowContactForm}>Contact Us</button>
                {showContactForm && (
                    <div className='container'>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <input type="text" placeholder="Your Name" required />
                            <input type="email" placeholder="Your Email" required />
                            <textarea placeholder="Your Message" required></textarea>
                            <button type="submit" className="submit-button">Submit</button>
                        </form>
                        <button className="contact-button" onClick={handleCloseContactForm}>Close</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SupportCenter;
