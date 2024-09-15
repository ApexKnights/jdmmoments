import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <footer className='bg-[#222222] '>
            <div className='py-24 px-6 md:px-24 flex justify-between items-start flex-wrap flex-col md:flex-row gap-6 lg:gap-0'>
                <div className='w-[100%] md:w-[80%] lg:w-[25%] text-white'>
                    <h2 className='mb-6 text-[25px] font-bold text-[#ffcb34]'>JDM (Jewellery Designer Manoj)</h2>
                    <span className='text-[15px]'> Welcome to JDM Moments, where every piece of jewellery tells a story of elegance, artistry, and tradition. Our handmade collections are crafted with passion and precision, offering you timeless designs across categories like diamond, polki, Victorian, and kundan. From stunning necklaces to exquisite earrings, jhumkas, and more, we create unique pieces that bring luxury and beauty to every occasion.</span>
                </div>
                <div className='w-[100%] md:w-[80%] lg:w-[25%] text-white flex flex-col gap-4 '>
                    <h1 className='text-[#ffcb34] text-[25px] font-bold'>Collections</h1>
                    <Link to={"/pvk"} className='text-[15px]'>Polki & Kundan & Victorian</Link>
                    <Link to={"/diamond"} className='text-[15px]'>Diamond</Link>

                </div>
                <div className='w-[100%] md:w-[80%] lg:w-[25%] flex flex-col gap-6 '>
                    <h2 className='text-[#ffcb34] text-[25px] font-bold'>Contact Us</h2>
                    <div className='flex items-center gap-4'>
                        <FaPhoneAlt className='text-[24px] text-[#ffcb34]' />
                        <div className='flex flex-col gap-0 text-white'>
                            <span>Phone Number</span>
                            <span className='text-[#8a8a8a]'>+918074855484</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <IoMailSharp className='text-[24px] text-[#ffcb34]' />
                        <div className='flex flex-col gap-0 text-white'>
                            <span>Email-Id</span>
                            <span className='text-[#8a8a8a]'>manojpatra615@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-6 text-center text-white'>
                <h1 className='text-[12px] md:text-[15px] px-4'>Designed and Developed by <a href="https://souparnashee.com/" className='text-[#ffcb34]'>Souparno</a> © All rights reserved 2024</h1>
            </div>
        </footer>
    )
}

export default Footer
