import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from "react-scroll"



const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <>
            <div className='sticky top-0 z-10 min-h-[100px] bg-[#1b1a18] hidden md:flex justify-center items-center gap-20 text-white'>
                <Link to={"/"} href="#" className='text-[20px] font-semibold'>Home </Link>
                <LinkScroll to='about' spy={true} smooth={true} offset={50} duration={500} className='text-[20px] font-semibold cursor-pointer'> About</LinkScroll>
                <Link to={"/"} className='text-4xl font-bold'>JDM <span className='text-sm text-[#ffcb34]'>Moments</span></Link>
                <Link to={"/pvk"} className='text-[20px] font-semibold cursor-pointer'> PVK</Link>
                <Link to={"/diamond"} className='text-[20px] font-semibold cursor-pointer'> Diamonds</Link>

            </div>
            <div className='sticky top-0 z-10 min-h-[120px] bg-[#1b1a18] px-10 flex md:hidden justify-between items-center gap-20 text-white'>
                <Link to={"/"} className='text-4xl font-bold'>JDM <span className='text-sm text-[#ffcb34]'>Moments</span></Link>
                <div>
                    <CiMenuBurger className='text-[30px] font-bold' onClick={() => setShowMenu(!showMenu)} />
                </div>
                {
                    showMenu ? <div className='p-10 absolute right-0 top-[120px] h-[100vh] w-[75%] sm:w-[50%] bg-[#1b1a18] transition duration-100' >
                        <RxCross1 className='text-[24px]' onClick={() => setShowMenu(false)} />
                        <div className='h-[60%] flex justify-center flex-col items-center gap-12 '>
                            <Link onClick={() => setShowMenu(false)} to={"/"} className='text-[20px] font-semibold'>Home </Link>
                            <LinkScroll onClick={() => setShowMenu(false)} to='about' spy={true} smooth={true} offset={50} duration={500} className='text-[20px] font-semibold cursor-pointer'> About</LinkScroll>
                            <Link to={"/pvk"} className='text-[20px] font-semibold cursor-pointer' onClick={() => setShowMenu(false)}> PVK</Link>
                            <Link to={"/diamond"} className='text-[20px] font-semibold cursor-pointer' onClick={() => setShowMenu(false)}> Diamonds</Link>
                            <LinkScroll onClick={() => setShowMenu(false)} to='custom' spy={true} smooth={true} offset={50} duration={500} className='text-[20px] font-semibold cursor-pointer'> Contact</LinkScroll>
                        </div>
                    </div> : null
                }

            </div>
        </>
    )
}

export default Navbar
