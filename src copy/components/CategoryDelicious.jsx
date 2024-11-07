import React from 'react'
import './CategoryDelicious.css'

const CategoryDelicious = ({ category, items }) => {
    return (
        <section>
                <h2 className="text-3xl font-semibold py-8">{category}</h2>
            <div className="grid gap-2 sm:grid-cols-4 lg:grid-cols-6">
                {items.map((item) => (
                    <div key={item.id} className="p-4 flex box-dessert box-items">
                        <h3 className="text-xl font-bold mb-2 entrada">{item.name}</h3>
                        <p className="mb-2 font-bold">{item.description}</p>
                        <p className="text-amber-800 text-base font-extrabold">${item.price.toFixed(3)}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CategoryDelicious