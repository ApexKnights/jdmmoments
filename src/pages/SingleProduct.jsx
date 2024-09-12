import React from 'react'
import polki from '../assets/polki.jpg'

const SingleProduct = () => {
    return (
        <div className='min-h-[80vh] bg-[#32332D] p-6 md:p-20 flex flex-col md:flex-row gap-16'>
            <div className='w-[100%] md:w-[45%]'>
                <img src={polki} alt="" className="w-[100%] h-[100%] object-contain" />
            </div>
            <div className='flex flex-col gap-6'>
                <h1 className='text-[45px] text-white font-bold'>Title of the Product</h1>
                <span className='text-[#b9b9b9] text-[16px]'>Price Of the Product</span>
                <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quo est earum quibusdam, recusandae cupiditate id error odio iusto nam sit possimus nihil aut eveniet quaerat expedita, inventore facilis numquam?
                </p>
                <div className='bg-[#1b1a18] p-4 flex flex-col gap-2 rounded-md'>
                    <span className='text-white font-bold'>WhatsApp Me!</span>
                    <h2 className='text-white font-bold'>Hii, There I like your design, lets talk about this product.</h2>
                </div>
                <button className='bg-[#FFCB34] p-3 rounded-lg text-white font-bold'>Send Whatsapp Message</button>
            </div>
        </div>
    )
}

export default SingleProduct
