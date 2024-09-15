import React, { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import ImageModal from './modals/ImageModal'
import SingleBuyProduct from './modals/SingleBuy'

const Products = ({ img, price, name, obj }) => {
    const [imgModal, setImgModal] = useState(false)
    const [imgfree, setImgFree] = useState(false)
    const [buyproductModal, setBuyProductModal] = useState(false)
    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const openImageModal = (i) => {
        setImage(i?.img)
        setImgModal(true)
        setImgFree(i?.free)
    }
    const openBuyModal = (e) => {
        setImage(e.img);
        setTitle(e.prod)
        setImgFree(e?.free)
        setBuyProductModal(true)
    }
    return (
        <div>

            <div className='flex gap-10 relative flex-wrap items-center justify-center lg:justify-start'>

                {
                    obj?.map((e) => (
                        <div className='h-[350px] w-[100%] sm:w-[70%] md:w-[300px] bg-[#32332D] flex gap-10 flex-col mb-5' key={e.img}>
                            {
                                imgModal ? <ImageModal mimg={image} modalColor={"#222222"} setImgModal={setImgModal} free={imgfree} /> : null
                            }
                            <div className='h-[75%] w-[100%] flex items-center justify-center gap-4 flex-wrap relative'>
                                {
                                    e?.free === true ? <div className="px-3 py-1 bg-[#ffcb34] absolute top-5 left-4 rounded-2xl font-[800]">
                                        <span>Free</span>
                                    </div> : <div className="px-3 py-1 bg-[#fc3838] absolute top-5 left-4 rounded-2xl font-[800]">
                                        <span className='text-white'>Paid</span>
                                    </div>
                                }

                                <img src={e?.img} alt="" className={`w-[200px] h-[200px] object-contain ${!e?.free ? "blur-md" : null}`} onClick={() => openImageModal(e)} />
                            </div>
                            <div className='h-[25%] w-[100%] bg-[#1b1a18] px-4 flex justify-between items-center'>
                                <div className="flex flex-col gap-2">
                                    <span className='text-[#fff] font-bold text-[13px] md:text-[15px]'>{e?.prod} Designs</span>
                                    <span className='text-[#ffcb34] font-bold text-[13px] md:text-[15px]'>Rs- {price}</span>
                                </div>
                                <div>
                                    <FaWhatsapp className='text-[24px] text-[#ffcb34]' onClick={() => openBuyModal(e)} />
                                </div>

                            </div>

                        </div>
                    ))
                }

                {
                    buyproductModal ? <SingleBuyProduct price={price} pimg={image} title={title} free={imgfree} setBuyProductModal={setBuyProductModal} /> : null
                }

            </div>

        </div>
    )
}

export default Products
