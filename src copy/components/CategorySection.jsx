

const CategorySection = ({ category, items }) => {

    return (
        <div className="mb-8 text-center">
                <h2 className="text-xl font-semibold">{category}</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item) => (
                        <div key={item.id} className="p-4 rounded box-lunch">
                            <h3 className="text-xl font-bold mb-1 entrada">{item.name}</h3>
                            <p className="text-1xl font-semibold mb-1">{item.description}</p>
                            <p className="text-amber-600 text-xl font-extrabold">${item.price.toFixed(3)}</p>
                        </div>
                    ))}
                </div>
        </div>
    );
};

export default CategorySection;