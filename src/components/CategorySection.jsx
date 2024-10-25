<<<<<<< HEAD
=======

>>>>>>> siriusblack

const CategorySection = ({ category, items }) => {

    return (
        <div className="mb-8">
                <h2 className="text-xl font-semibold">{category}</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item) => (
<<<<<<< HEAD
                        <div key={item.id} className="bg-white p-4 rounded shadow box-lunch">
                            <h3 className="text-2xl font-semibold mb-2 entrada">{item.name}</h3>
                            <p className="mb-2">{item.description}</p>
                            <p className="text-pink-890 text-base font-extrabold">${item.price.toFixed(3)}</p>
=======
                        <div key={item.id} className="p-2 rounded-lg shadow box-lunch">
                            <h3 className="text-1xl font-semibold mb-2 entrada">{item.name}</h3>
                            <p className="mb-2">{item.description}</p>
                            <p className="text-pink-900 text-base font-extrabold">${item.price.toFixed(3)}</p>
>>>>>>> siriusblack
                        </div>
                    ))}
                </div>
        </div>
    );
};

export default CategorySection;