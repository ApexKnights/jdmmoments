import React, { useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import Filter from '../components/modals/Filter'
import Products from '../components/Products'
import { pvksubs } from '../data/subCollections'

const PVK = () => {
    const [filterModal, setFilterModal] = useState(false)
    const allProductTypes = pvksubs.map((t) => (t))
    const [fetchedItems, setFetchedItems] = useState(allProductTypes)

    const filterWithProducts = (e) => {
        const filterProducts = pvksubs.filter(f => f.name === e)
        setFetchedItems(filterProducts)
        setFilterModal(false)
    }
    const filterWithPrice = (price) => {
        const filterProducts = pvksubs.filter(f => f.price === price)
        setFetchedItems(filterProducts)
        setFilterModal(false)
    }
    return (
        <section className='min-h-[90vh] bg-[#222222] py-20 px-6 md:px-20'>
            <div className='flex items-center justify-between sm:flex-row flex-col text-white mb-10 relative gap-8 md:gap-0'>
                <h1 className='text-[25px] md:text-[45px] font-bold text-center md:text-start'>Polki Kundan and Victorian Collections</h1>
                <div className='flex items-center gap-4 cursor-pointer' onClick={() => setFilterModal(!filterModal)}>
                    <FaFilter />
                    <span>Filter Designs</span>
                </div>
                {
                    filterModal ? <Filter
                        filterWithPrice={filterWithPrice}
                        filterWithProducts={filterWithProducts}
                        setFilterModal={setFilterModal}
                        subs={pvksubs}
                    /> : null
                }

            </div>
            <div>
                {
                    fetchedItems.map((e) => (
                        <div key={e.name}>
                            <h1 className='text-white my-10 text-[30px] font-bold text-center md:text-start'>{e.name}</h1>
                            <div className='flex w-[100%] my-6 items-start gap-6 flex-wrap'>
                                <Products img={e.img} obj={e?.obj} price={e.price} name={e.name} />
                            </div>

                        </div>
                    ))
                }
                <Products />
            </div>
        </section>
    )
}

export default PVK
