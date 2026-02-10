import { increment, decrement, reset } from "../state/counter/counterSlice";
import { add, remove, removeAll } from "../state/cart/cartSlice";

const addItem = (item, dispatch) => {
    dispatch(increment());
    dispatch(add(item));
}

const removeItem = (id, dispatch) => {
    dispatch(remove(id));
    dispatch(decrement());
}

const removeAllItem = (dispatch) => {
    dispatch(removeAll());
    dispatch(reset());
}

const addOrder = async (element, user) => {
    let result = null;

    try {
    result = await fetch("http://localhost:3000/order", {
        method: "POST",
        credentials : "include",
        headers: {
            "content-type" : "application/json",
            authorization: `Bearer ${user.accessToken}`
        },

        body: JSON.stringify(element)
    });

    if (result.status != 200) {
        console.log("Qualcosa non è andato");
        const response = await result.json();
        throw new Error(response.error);
    }

    const response = await result.json();
    return response;    
    } catch (err) {
        throw new Error(err.message);
    }    
}

const createOrderArray = (products, user, address, payment) => {

    const order = [];

    for (const i in products) {

        order.push({
            _id: user.id,
            order: {
                title: products[i].name,
                price: products[i].price,
                quantity: products[i].quantity,
                state: {
                    tag: "acc",
                    desc: "Accettato"
                },
                address: address,
                payment: {
                    tag: payment,
                    desc: payment
                }
            }
        })
    }

    return order;
}

export {
    addItem,
    removeItem,
    removeAllItem,
    addOrder,
    createOrderArray,
}
