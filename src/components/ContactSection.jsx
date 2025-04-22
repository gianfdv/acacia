import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from "styled-components";

const ContactSection = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_971qsc7', 'template_ha0yfwb', form.current, {
        publicKey: 'uD3jKm-YmVBY15kzZ',
      })
      .then(
        () => {
          setSuccessMessage('Your message has been sent successfully!');
          setErrorMessage('');
          e.target.reset();
        },
        (error) => {
          setErrorMessage('Oops! Something went wrong. Please try again later.');
          setSuccessMessage('');
          console.log('Error sending the message!', error.text);
        }
      );
  };

  return (
    <StyledContactSection>
      <div className="left">
        <img src="https://res.cloudinary.com/dxvkewdcn/image/upload/q_auto,f_auto,w_1000/albums/erika-austin/image46.jpg" alt="Contact"/>
      </div>
      <div className="right">
        <form ref={form} onSubmit={sendEmail}>
          <label>Full Name</label>
          <input type="text" name="name" required />
          <label>Email</label>
          <input type="email" name="email" required />
          <label>Event Date</label>
          <input type="text" name="date" required />
          <label>Let us know what you're looking for</label>
          <textarea name="message" required />
          <input type="submit" value="Send" />
        </form>

        {/* Feedback Messages */}
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </StyledContactSection>
  );
};

export default ContactSection;


const StyledContactSection = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1000px;
  margin: 3rem auto;
  gap: 2rem;
  padding: 1rem;

  .left {
    flex: 0.4;
  }

  .left img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  .right {
    flex: 0.6;
  }

  form {
    display: flex;
    flex-direction: column;
    font-size: 16px;

    label {
      margin-top: 1rem;
    }

    input, textarea {
      padding: 10px;
      margin-top: 0.5rem;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      outline: none;

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      min-height: 100px;
      resize: vertical;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: #0b3425;
      color: white;
      border: none;
      height: 35px;
      padding: 0 16px;
      font-size: 14px;
      width: 50%;
      border-radius: 5px;
      align-self: center;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .left, .right {
      flex: 1;
    }

    .left img {
      height: auto;
    }
  }

  .success-message {
  margin-top: 1rem;
  color: green;
  text-align: center;
}

.error-message {
  margin-top: 1rem;
  color: red;
  text-align: center;
}
`;