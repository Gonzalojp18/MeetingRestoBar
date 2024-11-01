import React from 'react'
import './CategoryDelicious.css'

const CategoryDelicious = ({ category, items }) => {
    return (
        <section>
                <h2 className="text-3xl font-semibold py-8">{category}</h2>
            <div className="mt-0 grid gap-2 sm:grid-cols-4 lg:grid-cols-6">
                {items.map((item) => (
                    <div key={item.id} className="p-4 flex box-dessert box-items">
<<<<<<< HEAD
                        <h3 className="text-xl font-bold mb-2 entrada">{item.name}</h3>
                        <p className="mb-2 font-bold">{item.description}</p>
=======
                        <h3 className="text-1xl font-semibold mb-2 entrada">{item.name}</h3>
                        <p className="mb-2">{item.description}</p>
>>>>>>> 6d3630d76748cfd9716cebc9d384f80e8e1686d6
                        <p className="text-amber-800 text-base font-extrabold">${item.price.toFixed(3)}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CategoryDelicious