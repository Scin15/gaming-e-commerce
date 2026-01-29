
const getSubstrings = (str, minLength) => {

    const substrings = [];
    const normalized = str.toLowerCase();

    for (let i = 0; i <= normalized.length - minLength; i++) {

        substrings.push(normalized.slice(i, i + minLength));

    }

    return substrings;
}

const fetchProducts = async (id) => {

    const url = id ? "http://localhost:3000/product?id=" + id : "http://localhost:3000/product";
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
    const result = await fetch("http://localhost:3000/product/all", {
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
        const result = await fetch("http://localhost:3000/order", {
            method: "GET",
            credentials : "include",
            headers: {
                "content-type" : "application/json",
                authorization: `Bearer ${accessToken}`
            }
        })

        const order = await result.json();
        
        console.log("Risposta:", result);
        console.log("Body risposta", order);
        return order;

    } catch (err) {
        throw new Error(err);
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
}