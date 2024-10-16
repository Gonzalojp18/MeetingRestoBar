import React from 'react'
import CategoryInfo from './CategoryInfo';
import enterMenu from '../data/dataSecondary';
import bigToast from '../source/bigtoast/btsinbg.webp'

const BigToast = () => {
    const toastData = {
    "Pan de Campo" : enterMenu["Big Toast"],
    };

return (
    <section id="toast" className='py-10'>
            <section className='flex toast-section'>
                <article className='title-toast'>
                    <h2 className='text-5xl'>Big Toast</h2>
                    <p className='text-1x1'>con exprimido o infusión a elección</p>
                </article>
                <img className='img-toast' src={bigToast} alt="bigtoast" />
            </section>
    {Object.entries(toastData).map(([category, items]) => (
        <CategoryInfo key={category} category={category} items={items} />
    ))}
    </section>
)
}

export default BigToast