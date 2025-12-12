import React, { useState } from 'react';
import Swal from 'sweetalert2';
import "./CSS/Contact_page.css";


import Contentlogo from "./Assets/Images/UserPNG.png"


const Contact = () => {
    // 1. STATE: To hold form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    // 2. STATE: To handle the loading status for UX
    const [isSubmitting, setIsSubmitting] = useState(false);

    // 3. LOGIC: Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // 4. LOGIC: Handle Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // UX: Start loading state

        // Telegram Credentials (Replace these with your actual keys)
        const botToken = '8207459416:AAEzF7Xg05JQycT_Ih1BypXKIwWxAK5j4xQ';
        const chatId = '1822757519';

        // Formatting the message for Telegram
        const text = `
    🚀 *New Portfolio Contact*
    -----------------------------
    👤 *Name:* ${formData.name}
    📧 *Email:* ${formData.email}
    📝 *Subject:* ${formData.subject}
    -----------------------------
    *Message:* ${formData.message}
        `;

        try {
            // Sending to Telegram API
            const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: text,
                    parse_mode: 'Markdown', // This makes the bold text work
                }),
            });

            if (response.ok) {
                // UX: Success Alert
                Swal.fire({
                    title: 'Message Sent!',
                    text: 'Thanks for reaching out. I will get back to you soon.',
                    icon: 'success',
                    confirmButtonColor: '#d9534f',
                    background: '#333', // Dark theme to match your site
                    color: '#fff'
                });

                // Reset Form
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                throw new Error('Telegram API failed');
            }

        } catch (error) {
            // UX: Error Alert
            Swal.fire({
                title: 'Oops!',
                text: 'Something went wrong. Please try again later.',
                icon: 'error',
                confirmButtonColor: '#d9534f'
            });
            console.error("Error sending message:", error);
        } finally {
            setIsSubmitting(false); // UX: Stop loading state
        }
    };

    // 5. RENDER: The JSX (HTML)
    // Styles are inline here for simplicity, but you should use your CSS file
    return (
        <div className="contactPage" style={{ maxWidth: '800px', margin: '0 auto', color: 'white' }}>
            <h1 className="contactTitle title" >Say Hi!</h1>

            <form onSubmit={handleSubmit} className="contactForm" >
                <div className='sub_1_Container' >
                    <img src={Contentlogo} alt="" className="Contentlogo" />
                    <div className="sub_1Text_Container">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name*"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className='inputArea'
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Your e-mail address*"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className='inputArea'
                        />

                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className='inputArea'
                        />

                    </div>
                </div>
                <textarea
                    name="message"
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={8}
                    required
                    className="inputArea mainText_container"
                ></textarea>

                {/* UX: Dynamic Button Text */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className='ContentButton'
                    style={{
                        opacity: isSubmitting ? 0.7 : 1,
                        cursor: isSubmitting ? 'not-allowed' : 'pointer'
                    }}
                >
                    {isSubmitting ? 'SENDING...' : 'SEND!'}
                </button>

            </form>
        </div >
    );
};


export default Contact;