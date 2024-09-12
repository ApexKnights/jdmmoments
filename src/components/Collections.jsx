import React, { useState } from 'react'
import ImageModal from './modals/ImageModal'
import ProductModal from './modals/ProductModal'

const Collections = ({ c }) => {
    const [modal, setModal] = useState(false)
    const openSubProducts = () => {
        setModal(true)
    }
    return (
        <div className='w-[100%] md:w-[45%]  xl:w-[20%] bg-[#2e2e29] h-[400px] '>
            {
                modal ? <ProductModal subs={c.subs} head={c.head} title={c.title} setModal={setModal} /> : null
            }
            <div className="h-[80%] w-[100%]">
                <img src={c.img} alt="" className='h-[100%] w-[100%] object-cover' />
            </div>
            <button onClick={openSubProducts} className='w-[100%] flex justify-center items-center text-white bg-[#FFCB34] h-[20%] text-[20px] font-bold'>
                Browse {c.title}
            </button>
        </div>

    )
}

export default Collections
