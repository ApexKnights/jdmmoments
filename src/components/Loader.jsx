import React from 'react'
import jdmlogo from "../assets/jdmmomentslogo.png"
import { Puff } from 'react-loader-spinner'

const Loader = () => {
    return (
        <div className='h-[100vh] w-[100%] flex items-center justify-center gap-6 flex-col bg-[#222222]'>
            <img src={jdmlogo} alt="" className='h-[100px]' />

            <Puff
                visible={true}
                height="80"
                width="80"
                color="#ffcb34"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}

export default Loader
