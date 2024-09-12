import React from 'react'
import { RxCross2 } from "react-icons/rx";

const SingleBuyProduct = ({ pimg, title, setBuyProductModal, price, free }) => {
    return (
        <>
            <div className='fixed top-10 left-2 md:left-10 min-h-[90%] w-[90%] bg-[#32332D] z-10 px-5 flex items-center justify-around flex-col md:flex-row gap-10'>
                <div className="cross absolute top-2 right-5 text-white text-end">
                    <RxCross2 className='text-white text-[18px]' onClick={() => setBuyProductModal(false)} />
                </div>
                <div className=' mt-6 md:mt-0 w-[90% ]md:w-[50%] relative'>
                    <img src={pimg} alt="" className={`w-[95%] md:w-[80%] h-[100%] ${!free ? "blur-sm" : null}`} />
                    <h1 className='absolute text-[30px] md:text-[50px] opacity-30  top-20 left-5 text-center'>JDM MOMENTS </h1>
                </div>
                <div className='flex flex-col gap-6 text-white items-start py-4'>
                    <h2 className='text-[30px] font-[800]'>{title}</h2>
                    <span>In order to buy this product click on the enquiry below and we will have a chat about your interests, this products are free to watch and we will start on site selling very soon, THANK YOU💗</span>
                    {/* <span>Rs - {price}</span> */}
                    <a href='https://wa.me/+918074855484' className='py-2 px-4 bg-[#ffcb34] text-black rounded-xl'>Enquiry Now</a>
                </div>
            </div>
        </>
    )
}

export default SingleBuyProduct
