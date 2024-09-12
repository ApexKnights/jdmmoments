import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const LatestProduct = ({ prod, openModal }) => {
    return (
        <div className='h-[350px] w-[300px] mx-4 relative'>
            {
                prod.new && <span className='px-4 py-1 bg-[#ffcb34] rounded-xl text-white text-[12px] absolute top-3 left-2'>New</span>
            }
            {
                prod.offer && <span className='px-4 py-1 bg-[#7d7d7d] rounded-xl text-white text-[12px] absolute top-12 left-2'>{prod.offer}</span>
            }

            <div className='h-[75%] bg-[#222222] flex items-center justify-center'>
                <img src={prod.img} alt="" className='w-[150px] h-[150px] object-contain' onClick={openModal} />
            </div>
            <div className='h-[25%] w-[100%] bg-[#1b1a18] px-4 flex justify-between items-center'>
                <div className="flex flex-col gap-2">
                    <span className='text-[#fff] font-bold text-[13px] md:text-[15px]'>{prod.title}</span>
                    <span className='text-[#ffcb34] font-bold text-[13px] md:text-[15px]'>Rs- {prod.price}</span>
                </div>
                <div>
                    {/* <FaWhatsapp className='text-[24px] text-[#ffcb34]' /> */}
                </div>
            </div>
        </div>
    )
}

export default LatestProduct
