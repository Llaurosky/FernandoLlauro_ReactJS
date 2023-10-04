const lista_productos = [
    {
        id: '1',
        name: 'Cookies Gelato',
        price: 2500,
        category: 'THC',
        img:"https://www.royalqueenseeds.es/494-3018-medium/cookies-gelato.jpg",
        stock: 500,
        description: 'La Cookies Gelato es la hija de dos cepas de cannabis legendarias. Hereda una potencia demencial, un sabor dulce y una productividad impresionante'
    },
    { id: '2', name: 'Royal Gorilla', price: 2300, category: 'THC', img: "https://www.royalqueenseeds.es/370-3447-medium/royal-gorilla.jpg", stock:600, description: 'La galardona Royal Gorilla es nuestro homenaje a la extraordinaria GG4. Prepárate para cosechar unos cogollos super pegajosos, cargados de THC y terpenos deliciosos, que son dignos del mostrador de un coffeeshop' },
    { id: '3', name: 'HulkBerry', price: 2300, category: 'THC', img: "https://www.royalqueenseeds.es/417-3837-medium/hulkberry.jpg", stock: 300, description: 'La Hulkberry es el alter-ego del Increible Hulk. Este superheroe cannabico ha llegado para salvar la marihuana de efecto mental. En algún lugar de las Montañas Rocosas de Colorado, la potencia de la OG Kush y la calidad de la Strawberry Diesel chocaron entre si. Ahora, esta onda expansiva de THC está arransando por toda Europa.' },
    { id: '4', name: 'Amnesia Haze', price: 2600, category: 'CBD', img: "https://www.royalqueenseeds.es/115-2125-medium/amnesia-haze.jpg", stock: 800, description: 'La Amnezia haze es otro gran ejemplo de genetica Sativa ganadora de premios. Desde que arrasó en los coffeeshops en los años 90, nuestra Amnesia Haze sigue conquistando los corazones y pulmones de los fumetas de todo el mundo con su colocón psicodélico y sus deliciosos sabores' },
    { id: '5', name: 'Gomitas', price: 1000, category: 'Consumibles', stock: "No dispobnile", description: 'Consumibles de mari' },

]

/* export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)
    })
} */



// export default getProducts;


export const getProductos = () => {

    return new Promise((resolve) => {

        setTimeout(() => {

            //let cantidad  = Math.floor(Math.random() * lista_productos.length);
            //console.log("Cantidad de productos devueltos en el asyncMock:", cantidad);
            resolve(lista_productos);

        }, 500)
    })
}

export const getProductById = (idProduct) => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(lista_productos.find(prod => prod.id === idProduct))
        }, 500);

    })

}

export const getProductsByCategory = (category) => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(lista_productos.filter(prod => prod.category === category))
        }, 500);
    })

}