import React, { useState } from 'react'
import about from "../assets/about.jpg"
import Slider from 'react-slick';
import { collections, latestProducts } from '../data/data';
import LatestProduct from '../components/LatestProduct';
import Collections from '../components/Collections';
import Feedback from '../components/Feedback';
import { aboutData } from '../data/contentData';
import { settings } from '../data/sliderData';
import ImageModal from '../components/modals/ImageModal';
import { Link } from 'react-router-dom';



const Home = () => {
    const [imgModal, setImgModal] = useState(false)
    const [image, setImage] = useState([])
    const [imgfree, setImgFree] = useState(false)

    const openModal = async (p) => {
        // Getting the images from data
        const productimages = await latestProducts.map((i) => (i.img))

        // filtering and matching with image
        const modalImage = await productimages.filter(f => f === p?.img)
        setImage(modalImage.toString())
        setImgModal(true)
        setImgFree(p?.free)
    }
    return (
        <section >
            {/* Hero section */}
            <section className="min-h-[80vh] md:min-h-[90vh] px-6 md:px-20 hero flex flex-col justify-center items-center gap-10">
                <h4 className='text-white font-[800]'>JDM Moments Presents</h4>
                <h1 className='text-white text-[30px] sm:text-[40px] md:text-[55px] text-center font-bold' >LATEST MANUAL JEWELLERY <br /> DESIGNS</h1>
                <span className='text-[#B9B9B9] text-center font-[500]'>
                    JDM Moments is a creative jewellery studio specializing in handcrafted luxury designs. <br />  From traditional to contemporary styles, our unique pieces in diamond, polki, Victorian, and kundan capture elegance and artistry.
                </span>
                <Link to={"/pvk"} className='px-8 py-2 border-[1px] border-solid border-[#FFCB34] text-white hover:bg-[#FFCB34]'>
                    Explore Now
                </Link>
            </section>
            {/* Collection section */}
            <section id='collection' className=' bg-[#222222] flex justify-center flex-col gap-16 px-6 md:px-20 py-24 relative'>
                <h1 className='text-white font-bold pb-4 text-[30px] sm:text-[40px] md:text-[54px] '>Collections</h1>
                <div className='flex items-center justify-center gap-16 flex-wrap'>
                    {
                        collections.map((c) => (
                            <Collections c={c} key={c.id} />
                        ))
                    }

                </div>
            </section>
            {/* About Us */}
            <section id='about' className='about min-h-[80vh] py-24 px-6 md:px-20'>
                <h1 className='text-[30px] sm:text-[40px] md:text-[55px] text-white font-bold mb-20'>{aboutData.title}</h1>
                <div className='w-[95%] flex items-center justify-between flex-col md:flex-row gap-6 md:gap-2'>
                    <p className='w-[100%] md:w-[40%]  text-[14px] md:text-[16px] text-white'>{aboutData.desc}</p>
                    <div className='w-[95%] md:w-[40%] h-[70%]'>
                        <img src={about} alt="" className='w-[100%] h-[100%]' />
                    </div>
                </div>
            </section>
            {/* Latest Products Section */}
            <section id='product' className='min-h-[90vh] py-24 px-6 md:px-20 bg-[#32332D]'>
                <h1 className='text-white  font-bold text-[30px] sm:text-[40px] md:text-[55px] mb-24'>OUR LATEST PRODUCTS</h1>
                {
                    imgModal ? <ImageModal modalColor={'#969984'} setImgModal={setImgModal} mimg={image} free={imgfree} /> : null
                }
                <div className='flex justify-center items-center'>
                    <div className='w-[90%] md:w-[80%] '>
                        <Slider {...settings}>
                            {
                                latestProducts.map((prod) => (
                                    <LatestProduct prod={prod} key={prod.id} openModal={() => openModal(prod)} />

                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </section>
            {/* Custom Design Section */}
            <section id='custom' className=' min-h-[90vh] bg-[#222222] py-28 px-6 md:px-20 flex flex-col md:flex-row gap-12 md:gap-0 items-center justify-between'>
                <div className='w-[100%] md:w-[55%] h-[100%]'>
                    <h1 className='text-[35px]  sm:text-[45px] md:text-[55px]  lg:text-[85px] font-bold text-white mb-16'>Want a custom Design?</h1>
                    <h3 className='text-[18px] md:text-[24px] text-white'>Contact Us, fill Up the details We will contact you <br /> within 24 hours.</h3>
                </div>
                <div className='w-[100%] md:w-[35%]'>
                    <form action="#" className='flex flex-col gap-8'>
                        <input type="text" className='bg-transparent border-[#575757] border-[1px] py-3 px-2' placeholder='Company Name' />
                        <input type="number" className='bg-transparent border-[#575757] border-[1px] py-3 px-2' placeholder='Contact Number' />
                        <textarea placeholder='Details' cols="30" rows="10" className='bg-transparent border-[#575757] border-[1px] py-3 px-2'></textarea>
                        <button className='bg-[#ffcb34] py-2 px-3 w-[150px] text-white'>Submit</button>
                    </form>
                </div>
            </section>
            {/* FeedBack Section */}
            {/* <section id='feedback' className='min-h-[90vh] bg-[#32332d] py-28 px-6 md:px-20'>
                <h1 className='text-[25px] sm:text-[40px] md:text-[55px] text-white font-bold mb-20'>Customer Feedback</h1>
                <div className='flex items-center justify-center'>
                    <div className='flex gap-12 justify-center items-center w-[90%] flex-wrap'>
                        <Feedback />
                        <Feedback />

                    </div>
                </div>
            </section> */}
            {/* Map */}
            <div className='min-h-[60vh] w-[100%] bg-[#222222] px-6 md:px-20 flex flex-col md:flex-row gap-10 md:gap-0'>
                <div className=" w-[100%] md:w-[30%] flex items-start flex-col justify-center gap-6">
                    <h2 className='text-[30px] text-white font-[800]'>Jewellery Designer Monoj</h2>
                    <h3 className='text-lg text-white font-[800]'>Phone - +918074855484</h3>
                    <h3 className='text-lg text-white font-[800]'>Email - manojpatra615@gmail.com</h3>
                    <h3 className='text-lg text-white font-[800]'>
                        Location - Kali Kaman, Charminar, HYD-500002
                    </h3>
                </div>
                <div className="w-[100%] md:w-[70%]"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.0153951758875!2d78.4776294!3d17.3629922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9820d10b8e01%3A0x35706d97979fefc6!2sKali%20Kaman%20Rd%2C%20Pathar%20Gatti%2C%20Hyderabad%2C%20Telangana%20500002!5e0!3m2!1sen!2sin!4v1726131844051!5m2!1sen!2sin" className='min-h-[60vh] w-[100%] invert rounded-2xl'></iframe></div>

            </div>


        </section>
    )
}

export default Home
