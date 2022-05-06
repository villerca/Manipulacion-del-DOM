/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app";

const appNode = document.querySelector('#app');

// Intl  internacionalizacion
// 1 - formato fechas
// 2 - formato moneda
const formatPrice = (price) => {

    const newPrice = new window.Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "USD",
    }).format(price);

    return newPrice;
};






//web api
// Conectarnos al servidor
window
    .fetch(`${baseUrl}/api/avo`)
// Procesar la respuesta, y convertirla en JSON
    .then((respuesta)=> respuesta.json())
// JSON -> Data -> Renderizar info browser
    .then((responseJson) => {
        const todosLosItem = []
    responseJson.data.forEach((item) => {
        // crear imagen
        const imagen = document.createElement('img');
        imagen.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";
        imagen.src = `${baseUrl}${item.image}`;
        
        // url de la imagen
        // crear titulo
        const title = document.createElement('h2');
        title.textContent = item.name;
        title.className = "text-2xl text-pink-600";
        // crear precio
        const price = document.createElement('div');
        price.textContent = formatPrice(item.price);
        price.className = "text-gray-600";

        const priceAndTitle = document.createElement("div");
        priceAndTitle.className = "text-center md:text-left";

        priceAndTitle.appendChild(title);
        priceAndTitle.appendChild(price);

        const container = document.createElement('div');
        container.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";
        container.appendChild(imagen);
        container.appendChild(priceAndTitle);

        todosLosItem.push(container);
        
    });

    appNode.append(...todosLosItem);
    
});


