import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import ImageModal from './ImageModal';
import { Link } from 'react-router-dom';


const ProductModal = ({ subs, title, setModal, head }) => {
    const [imgModal, setImgModal] = useState(false)

    return (
        <div className='absolute z-10 top-[0] left-[0] w-[100%] min-h-[100%]   flex items-center justify-center'>
            <div className='flex items-center flex-col justify-center bg-[#969984] relative'>
                <RxCross2 className='text-[24px] absolute top-5 right-5 mb-5' onClick={() => setModal(false)} />
                <h1 className='py-10 px-4 text-center text-[24px] font-bold text-white'>Explore the Collections of {head}</h1>
                <div className="w-[90%]  md:w-[70%] h-[500px] flex items-center justify-center flex-wrap bg-[#969984] mb-4 gap-5  relative py-10 px-6 overflow-scroll overflow-x-hidden productModal">
                    {
                        subs.map((e) => (
                            <div key={e.id} className='w-[90%]  md:w-[300px] h-[400px] bg-[#222222] rounded-md'>
                                {imgModal && <ImageModal mimg={e.img} setImgModal={setImgModal} modalColor={"#222222"} />}
                                <div className='h-[80%] w-[100%] bg-none flex  items-center justify-center'>
                                    <img src={e.img} alt="" className='w-[100%] h-[100%] object-cover' onClick={() => setImgModal(true)} />
                                </div>
                                <div className='h-[20%] w-full bg-[#ffcb34] flex items-center justify-center text-white '>
                                    <h2 className='text-[20px] font-bold'>{e.name}</h2>
                                </div>
                            </div>
                        ))

                    }

                </div>
                <Link to={`${title}`.toLowerCase()} onClick={() => window.scrollTo(0)} className='mb-10 bg-[#ffcb34] py-3 px-6 rounded-lg text-white'>Browse Details</Link>
            </div>
        </div>
    )
}

export default ProductModal
