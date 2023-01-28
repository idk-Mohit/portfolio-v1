import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import SectionHeader from '../SectionHeader'
import sr, { srConfig } from '../../../utils/srConfig'
import emailjs from '@emailjs/browser'
import ButtonLoader from './ButtonLoader'
import Button from '../../../UI/Button'

const Contact = () => {
    const formRef = useRef();
    const revealBtn = useRef(null);
    const revealContainer = useRef(null)
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [buttonText, setButtonText] = useState('Send Message')

    const submitHandler = (e) => {
        e.preventDefault();
        setButtonText(<ButtonLoader />)
        emailjs.sendForm(
            process.env.GATSBY_service_Id,
            process.env.GATSBY_template_Id,
            formRef.current,
            process.env.GATSBY_application_Id)
            .then((result) => {
                setButtonText('Message Sent.')
            }, (error) => {
                setButtonText('Message not Sent.')
            });
        setTimeout(() => setButtonText('Send Message'), 5000)
    }

    const inputChangeHandler = (event) => {
        const { name, value } = event.target;
        setFormData((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };
    useEffect(() => {
        sr.reveal(revealContainer.current, srConfig(300))
        sr.reveal(revealBtn.current, srConfig(400))
    }, [])
    return (
        <Container ref={revealContainer} className='section-container flex-column' id="contact">
            <SectionHeader num={4}>Get In Touch</SectionHeader>
            <ContactForm ref={formRef} className='flex-column' onSubmit={submitHandler}>
                <input type="text" name='name' value={formData.name} onChange={inputChangeHandler} placeholder={'Enter your name'} required />
                <input type="email" name='email' value={formData.email} onChange={inputChangeHandler} placeholder={'Enter your email'} required />
                <textarea name='message' onChange={inputChangeHandler} placeholder={'Enter your message'} required></textarea>
                <Button type='submit'>
                    <span ref={revealBtn} className='submitBtn'>{buttonText}</span>
                </Button>
            </ContactForm>
        </Container >
    )
}

export default Contact

const Container = styled.section`
    width: 100%;
    max-width: 500px;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    gap: 6rem;

    @media (max-width:768px) {
        gap:3rem;   
    }
`
const ContactForm = styled.form`
   gap:1rem; 
   width: 100%;
   padding: 2rem 0;
   max-width:500px;

   input,textarea{
    transition: 300ms ease;
    &:focus{
        &::placeholder{
            color:rgba(100, 255, 218, 0.5);
            transition: 300ms ease;
        }
        border-color: var(--bg-green);
        transition: 300ms ease;
    }
   }

   button{
    margin-top: 2rem;
   }
`
