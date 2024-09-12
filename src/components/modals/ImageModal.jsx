import React from 'react'
import { RxCross2 } from "react-icons/rx";


const ImageModal = ({ mimg, setImgModal, modalColor, free }) => {
    return (
        <div className='fixed z-10 top-[0] left-[0] w-[100%] h-[100%]   flex items-center justify-center'>

            <div className={`w-[90%] h-50% md:h-[90%] md:w-[70%]  flex items-center justify-center bg-[${modalColor}] relative`}>
                <div className='absolute top-2 right-2 z-10' onClick={() => setImgModal(false)}><RxCross2 className='text-[24px] text-white' /></div>
                {
                    !free ? <div className=' absolute z-10  bg-white w-[70%] py-6 px-2 text-center '>
                        <h2 className='text-[30px] font-[800]'>Buy this product, To see the full image</h2>
                    </div> : null
                }

                <img src={mimg} alt="" className={`w-[90%] h-[90%] object-contain ${!free ? "blur-sm" : null} `} />
                <h1 className='absolute text-[30px] md:text-[50px] opacity-30  top-20'>JDM MOMENTS </h1>
            </div>
        </div>
    )
}

export default ImageModal
