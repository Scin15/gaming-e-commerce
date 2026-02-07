import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

// Se clicco aggiungi al carrello, deve aggiungere il prodotto all'array. 
// Se già presente deve aumentare la quantità.
// Se viglio rimuovere un prodotto ho due casistiche: rimuovo il prodotto con quantità 1: rimuovo del tutto il prodotto. Riduco la quantità che prima era maggiore di 1. Il prodotto rimane nel carrello e viene diminuita solamente la quantità.

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        add: (state, action) => {
            // logica per capire se c'è già il prodotto
            const product = { ...action.payload};
            product.quantity = 1;
            console.log("Prodotto: ", product);
            const productIndex = state.findIndex((element) => {
                return (element.id == product.id);
            })
            console.log("Indice trovato:", productIndex);

            if (productIndex != -1) {
                state[productIndex].quantity ++;
                console.log("Aggiunto prodotto già presente");
                return;
            }


            state.push(product);
            console.log("Aggiunto prodotto per la prima volta");

        },
        remove: (state, action) => {
            // logica per capire se c'è già il prodotto
            const id = action.payload;
            console.log("Id prodotto: ", id);
            const productIndex = state.findIndex((element) => {
                return (element.id == id);
            })
            console.log("Indice trovato:", productIndex);

            if (productIndex == -1) {
                console.log("Prodotto non presente nel carrello");
                return;
            }

            if (state[productIndex].quantity > 1) {
                state[productIndex].quantity --;
                console.log("Diminuita la quantità");
                return;
            }

            state.splice(productIndex, 1);
            console.log("Eliminato prodotto dal carrello");

        },
        removeAll: (state) => {
            console.log("Resetto il carrello...");
            state.splice(0, state.length);
        },
    },
});

export const { add, remove, removeAll } = cartSlice.actions;

export default cartSlice.reducer;