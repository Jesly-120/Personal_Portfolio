import React from 'react';
import Modal from 'react-modal';
import emailjs from 'emailjs-com';
import './ContactForm.css';  // Your CSS file for styling

Modal.setAppElement('#root');  // For accessibility

const ContactForm = ({ modalIsOpen, setModalIsOpen }) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_w3z8i3a',  // Replace with your EmailJS service ID
      'template_rp94cgi',  // Replace with your EmailJS template ID
      e.target,
      'D6hv6OIqCiu9PqMxC'    // Replace with your EmailJS public key
    )
    .then(() => {
      // alert('Message sent successfully!');
      document.getElementById('message-status').innerHTML = 'Message sent successfully!';
      // setModalIsOpen(false);  
    })
    .catch(() => {
      // alert('Failed to send message. Please try again.');
      document.getElementById('message-status').innerHTML = 'Failed to send message. Please try again.';
    });

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      contentLabel="Contact Form"
      className="contact-modal"
      overlayClassName="contact-overlay"
    >
      <h2>Contact Me</h2>
      <form onSubmit={sendEmail}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <p id='message-status'></p>
        <div className='buttonContainer'>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
          <button type="submit">Send</button>
        </div>
        
      </form>
      
    </Modal>
  );
};

export default ContactForm;
