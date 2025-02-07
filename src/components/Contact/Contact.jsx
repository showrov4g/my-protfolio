import React from 'react';
import themePattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import './contact.css'
const Contact = () => {
    return (
        <div id="contact" className='flex flex-col items-center justify-center gap-20 my-20 pb-24'>
            <div className='relative'>
                <h1 className='py-0 px-7 text-7xl font-semibold'>Get in touch</h1>
                <img className='absolute bottom-0 right-0 -z-10' src={themePattern} alt="" />
            </div>
            {/* contact section */}
            <div className='md:flex gap-7'>
                {/* contact left */}
                <div className='flex flex-col items-center md:items-start space-y-6 gap-7'>
                    <h1 className='title text-7xl font-semibold  ' >Let's talk</h1>
                    <p className='md:w-[550px] text-[#d8d8d8]'>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                    <div className='flex flex-col gap-7 text-[#d8d8d8] text-2xl'>
                        <div className='flex items-center gap-5'>
                            <img src={mail_icon} alt="" />
                            <p>showrovg00@gmail.com</p>
                        </div>
                        <div  className='flex items-center gap-5'>
                            <img src={call_icon} alt="" />
                            <p>+8801746767631</p>
                        </div>
                        <div  className='flex items-center gap-5'>
                            <img src={location_icon} alt="" />
                            <p>Jheniadah, Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>
                {/* contact right  */}
                <div>
                    <form className='flex flex-col items-start gap-7'>
                        <label className="text-[#d8d8d8] text-xl font-medium">Your name</label>
                        <input className='border-none md:w-[600px] h-[78px] pl-5 rounded-3xl bg-[#32323c]' type="text" placeholder='Enter your name' name='name'/>
                        <label className="text-[#d8d8d8] text-xl font-medium">Your Email</label>
                        <input className='border-none md:w-[600px] h-[78px] pl-5 rounded-3xl bg-[#32323c]' type="email" name="email" placeholder='Enter your Email' />
                        <label className="text-[#d8d8d8] text-xl font-medium">Write your message</label>
                        <textarea className='border-none md:w-[600px]  pl-5 rounded-3xl bg-[#32323c]' name="message" rows={8} placeholder='Write your message'></textarea>
                        <button className='py-3 px-7 rounded-full bg-linear-to-r from-[#DF8908] to-[#B415FF] cursor-pointer transition-all duration-75 hover:border-2 hover:border-white' type='submit'>Submit now</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;