import React from 'react'
import CategoryLicuados from './CategoryLicuados';
import drinkData from '../data/dataDrink';
import './CategoryLicuados.css'

const Licuados = () => {
    const licuadosData = {
    "Nuestras Opciones" : drinkData["Licuados y Exprimidos"],
    };

return (
    <section id="licuados"  className="section-licuados">
            <section className='flex'>
                <article className='title-postre'>
                    <h2 className='text-4xl py-4'>Licuados & Exprimidos</h2>
                </article>
            </section>
    {Object.entries(licuadosData).map(([category, items]) => (
        <CategoryLicuados key={category} category={category} items={items} />
    ))}
    </section>
)
}

export default Licuados