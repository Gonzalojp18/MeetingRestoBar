import React from 'react'
import CategoryInfo from './CategoryInfo';
import enterMenu from '../data/dataSecondary';
import brusqueta from '../source/bigtoast/brusqueta.webp'

const Brusquetas = () => {
    const toastData = {
    "Exquitos pan de Campo" : enterMenu["Brusquetas"]
    };

return (
    <section id="brusquetas" className='pb-10'>
            <article className='brusquetas-section'>
            <img className='mx-6 my-4' src={brusqueta} alt="" />
                <article className='title-brusquetas'>
                    <h2 className='text-5xl'>Brusquetas</h2>
                </article>
            </article>
    {Object.entries(toastData).map(([category, items]) => (
        <CategoryInfo key={category} category={category} items={items} />
    ))}
    </section>
)
}

export default Brusquetas