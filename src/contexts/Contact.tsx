"use client"

import React, { useEffect, useState } from 'react'
import Textinput from '@/components/Contact/Textinput'
import { Button } from '@/components/ui/button'
import ButtonDecor from '@/components/Hero/Button'
import Mail from '@/assets/images/maill.webp'
import Image from 'next/image'
import emailjs from 'emailjs-com'
import Textarea from '@/components/Contact/Textarea'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface ButtonProps {
  text: string
  icon_name: string
  height: string
  width: string
}

const Contact = (): JSX.Element => {

  const button: ButtonProps = {
    text: "Send",
    icon_name: "fa-envelope",
    height: "h-[45px]",
    width: "w-[120px]"
  }

  const [loading, setLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [formData, setFormData] = useState({
    sender: '',
    senderEmail: '',
    message: '',
  });
  
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldName: string
  ) => {
    setFormData({
      ...formData,
      [fieldName]: e.target.value,
    });
  };
  

  useEffect(() => {
    emailjs.init('DEXvcP7d3OqBBj7Kf');
  }, []);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const serviceId = "service_ixq68b7";
    const templateId = "template_56fv14n";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, formData);
      console.log(formData);
      setSubmitSuccess(true)
      setFormData({
        sender: '',
        senderEmail: '',
        message: '',
      });
      toast.success('Email sent successfully!', {
        position: 'bottom-right',
      });

    } catch (error) {
      console.log(error);

      toast.error('Error sending email. Please try again.', {
        position: 'bottom-right',
      });

    } finally {
      setLoading(false);
    }
  }

  return (

    <div className='flex justify-center items-center overflow-hidden font-mulish px-[150px] py-[150px]' id='Contact'>
      <div  className='px-10 py-10 rounded-2xl border-[3px] bg-gray-100 bg-opacity-10'>
        <div className='flex flex-row justify-center items-center overflow-hidden gap-20'>
          <div className='flex flex-col gap-7'>
            <div>
              <h1 className='text-[34px] xl:text-[50px] font-bold mb-[5px]'>
                  Get in Touch
              </h1>
              <hr className='border-[4px] w-[100px] rounded border-foreground'/>
            </div>
            <form onSubmit={sendEmail}>
                <div className='flex flex-col gap-2 min-w-[200px] mb-[20px]'>
                  <Textinput
                    id="Name"
                    title="Name"
                    placeholder="Enter your name here..."
                    type="text"
                    value={formData.sender}
                    onChange={(e) => handleInputChange(e, 'sender')}
                    required
                  />
                  <Textinput
                    id="Email"
                    title="Email"
                    placeholder="Enter your email here..."
                    type="email"
                    value={formData.senderEmail}
                    onChange={(e) => handleInputChange(e, 'senderEmail')}
                    required
                  />
                  <Textarea
                    id="Message"
                    title="Message"
                    placeholder="Enter your message here..."
                    rows = {4}
                    value={formData.message}
                    onChange={(e) => handleInputChange(e, 'message')}
                    required
                  />
                </div>
                <Button type='submit' className='flex flex-row justify-center items-center overflow-hidden py-5 hover:translate-y-[-4px] font-mulish rounded bg-foreground drop-shadow-button hover:animate-pulse cursor-pointer' disabled={loading}>
                  <span className='mr-[10px] font-semibold text-background'>Send</span>
                  <i className={`fas fa-envelope text-background`}></i>
                </Button>
            </form>
          </div>
          <div className='lg:block hidden'>
            <Image
              src={Mail}
              alt="Email Illustration"
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Contact