import React from 'react'
import feed1 from "../assets/feedb.png"
import { IoStarOutline, IoStarSharp } from 'react-icons/io5'

const Feedback = () => {
    return (
        <div className="w-[90%] md:w-[200px] min-h-[300px]  flex flex-col gap-4 justify-center items-center">
            <div className='w-[150px] h-[150px] '>
                <img src={feed1} alt="" className='w-[100%] h-[100%] rounded-full' />
            </div>
            <h1 className='text-white text-[25px] font-bold'>Souparna Shee</h1>
            <span className='text-[#b1b1b1] text-[13px] text-center'>Quality is beautiful, love the work and want to work more</span>
            <div className='flex gap-2 text-[#ffcb34] text-[24px]'>
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarOutline />
            </div>
        </div>
    )
}

export default Feedback
