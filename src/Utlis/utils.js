
const getSubstrings = (str, minLength) => {

    const substrings = [];
    const normalized = str.toLowerCase();

    for (let i = 0; i <= normalized.length - minLength; i++) {

        substrings.push(normalized.slice(i, i + minLength));

    }

    return substrings;
}

async function readGames(_id) {
    const idString = _id ? "/" + _id : "";
    const urlString = `https://api.rawg.io/api/games${idString}?key=${import.meta.env.VITE_RAWG_KEY}`;
    try {
        const response = await fetch(urlString);
        if (!response.ok) {
            throw new Error(response.status);
        }
        let data = await response.json();
        console.log(data);
        // se sto cercando per id restituisco comunque un array, altrimenti estraggo la proprietà result (array type)
        data = _id ? Array(data) : data.results;
        // aggiungo la prop price con un numero random perchè non la restituisce l'API
        data = data.map((e) => {
            e.price = Number((Math.random()*100).toFixed(2));
            return e;
            })
        console.log("Trovati i giochini!", data);
        return data;
    } catch (e) {
        throw e;
    }
}

const fetchProducts = async (id) => {

    const url = id ? `${import.meta.env.VITE_END_POINT}/product?id=` + id : `${import.meta.env.VITE_END_POINT}/product`;
    let result = null;

    try {
        result = await (await fetch(url)).json();
    } catch (err) {
        throw err;
    }

    if (result) {
        console.log("Prodotti trovati:", result);
        return(result);
    } else {
        console.log("Prodotti non trovati");
        return([]);
    }
}

const deleteProducts = async () => {
    const result = await fetch(`${import.meta.env.VITE_END_POINT}/product/all`, {
        method: "DELETE"
    });
    if (result) {
        window.alert("Prodotti cancellati con successo!");
        setLoad(true);
    } else {
        window.alert("Errore nella cancellazione dei prodotti");
    }
}

const fetchOrders = async (accessToken) => {
    try {
        const result = await fetch(`${import.meta.env.VITE_END_POINT}/order`, {
            method: "GET",
            credentials : "include",
            headers: {
                "content-type" : "application/json",
                authorization: `Bearer ${accessToken}`
            }
        })

        const order = await result.json();
        
        // console.log("Risposta:", result);
        // console.log("Body risposta", order);
        return order;

    } catch (err) {
        throw err;
    }

}

const getTotalPrice = (products) => {
    let sum = 0;
    for (let i=0; i<products.length; i++) {
        sum += products[i].price * products[i].quantity;
    }
    return sum;
}

export {
    getSubstrings,
    fetchProducts,
    fetchOrders,
    getTotalPrice,
    readGames,
}
