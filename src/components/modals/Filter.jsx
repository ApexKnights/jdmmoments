import React, { useState } from 'react'
import { FaMoneyBillWave } from 'react-icons/fa'
import { RiShoppingCart2Fill } from 'react-icons/ri'
import { RxCrossCircled } from 'react-icons/rx'

const Filter = ({ filterWithProducts, filterWithPrice, setFilterModal, subs }) => {
    const [products, setProducts] = useState(false)
    const [prices, setPrices] = useState(false)
    const allPrices = subs.map(p => (p.price))
    const filteredPrices = allPrices.filter((item, index) => allPrices.indexOf(item) === index)
    return (
        <div className='w-[200px] sm:w-[300px] py-2 px-4 bg-[#111] absolute right-5 top-20 z-10'>
            <div className='py-1 flex justify-end'>
                <RxCrossCircled className='text-right' onClick={() => setFilterModal(false)} />
            </div>
            <div
                className='py-4 px-3 mb-2 hover:bg-white hover:text-black cursor-pointer flex gap-2 items-center rounded-md'
                onClick={() => setProducts(!products)}
            >
                <RiShoppingCart2Fill />
                <h2>Filter with Products</h2>

            </div>
            {
                products ? <div>
                    {
                        subs.map(e => (
                            <h3 className='py-1 px-1 hover:bg-white my-1 hover:text-black font-bold rounded-sm cursor-pointer' onClick={() => filterWithProducts(e.name)}>{e.name}</h3>
                        ))
                    }
                </div> : null
            }

            <div
                className='py-4 px-3 mb-2 hover:bg-white hover:text-black cursor-pointer flex gap-2 items-center rounded-md'
                onClick={() => setPrices(!prices)}
            >
                <FaMoneyBillWave />
                <h2>Filter with Prices</h2>
            </div>
            {
                prices ? <div>
                    {

                        filteredPrices.map(e => (
                            <h3 className='py-1 px-1 hover:bg-white my-1 hover:text-black font-bold rounded-sm cursor-pointer' onClick={() => filterWithPrice(e)}>{e}</h3>
                        ))
                    }
                </div> : null
            }
        </div>
    )
}

export default Filter
