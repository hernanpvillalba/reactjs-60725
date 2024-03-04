const productos = [
    {
        id: 1,
        title: "Alfajores",
        description: "Alfajores",
        price: 1500,
        stock:10,
        categoria:"dulces",
        pictureURL:'../imagenes/Alfajores.jpg'
    },
    {
        id: 2,
        title: "Brownies",
        description: "Brownies de chocolate",
        price: 2500,
        stock:10,
        categoria:"dulces",
        pictureURL:'../imagenes/Brownies.jpg'
    },
    {
        id: 3,
        title: "Huevos Rellenos",
        description: "Huevos Rellenos",
        price: 3000,
        stock:10,
        categoria:"antojos",
        pictureURL:'../imagenes/HuevosRellenos.jpg'
    },
    {
        id: 4,
        title: "Torta Marquise",
        description: "Torta Marquise",
        price: 5000,
        stock:10,
        categoria:"tortas",
        pictureURL:'../imagenes/Marquise.jpg'
    },
    {
        id: 5,
        title: "Pastafrola",
        description: "Pastafrola",
        price: 4000,
        stock:10,
        categoria:"tortas",
        pictureURL:'../imagenes/Pastafrola.jpg'
    },
    {
        id: 6,
        title: "Tortas de Fiestas",
        description: "Tortas para fiestas",
        price: 5000,
        stock:10,
        categoria:"eventos",
        pictureURL:'../imagenes/eventos.jpg'
    },
];


export default productos;

export const getProducts = () => {
    return new Promise ((res) => {
        setTimeout(() => {
            res(productos);
        }, 2000);
    });
};

export const getProductsByCategory = (category) =>{
    return new Promise ((resolve) =>{
        const productosFiltrados = productos.filter((prod) => prod.categoria === category);
        setTimeout (() =>{
            resolve (productosFiltrados);
        },2000);
    });
};

export const getProductsByID = (id) =>{
    return new Promise ((resolve) =>{
        const productosFiltrados = productos.find((el) => el.id === parseInt (id));
        setTimeout (() =>{
            resolve (productosFiltrados);
        },2000);
    });
};