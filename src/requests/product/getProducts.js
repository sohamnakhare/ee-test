const getProducts = () => {
    const products =  [
        {
            name: "Product 1",
            descrition: "desc",
            price: 100,
            units: 20,
            currencyCode: "INR"
        },
        {
            name: "Product 2",
            descrition: "desc",
            price: 100,
            units: 0,
            currencyCode: "INR"
        },
        {
            name: "Product 3",
            descrition: "desc",
            price: 100,
            units: 20,
            currencyCode: "INR"
        },
        {
            name: "Product 4",
            descrition: "desc",
            price: 100,
            units: 20,
            currencyCode: "INR"
        }
    ];

    return Promise.resolve(products);
};

export default getProducts;