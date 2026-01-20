import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // id: 0,
    // name: "Marco",
    // surname: "Scinetti",
    // email: "marco.scinetti@gmail.com",
    // address: "Via valeriana 69, 23015",
    // accessToken: "0490dsfadaa",
    // refreshToken: null,
    // orders: [
    //     {
    //         id: 0,
    //         product_id: 0,
    //         product_title: "Resident Evil",
    //         price: 50,
    //         platform_id: 0,
    //         platform_desc: "Steam",
    //         date: new Date("04/16/2024"),
    //         state: "Received",
    //         payment_method: "VISA",
    //         address: "Via Valeriena 69, Dubino, 23015"
    //     },
    //     {
    //         id: 1,
    //         product_id: 2,
    //         product_title: "Donkey Kong Bananza",
    //         price: 79.99,
    //         platform_id: 4,
    //         platform_desc: "Switch 2",
    //         date: new Date("04/16/2024"), 
    //         state: "Received",
    //         payment_method: "VISA",
    //         address: "Via Valeriena 69, Dubino, 23015"
    //     },
    // ]
};

// Devo loggare l'utente. 
// Cosa uso? Id univoco, nome, cognome, email, indirizzo
// Ordini da inserire qui con informazioni utente?

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            if(!action.payload.accessToken) {
                console.log("Autenticazione non riuscita");
                return;
            }
            state.id = action.payload._id;
            state.name = action.payload.name;
            state.surname = action.payload.surname;
            state.email = action.payload.email;
            state.address = action.payload.address;
            state.accessToken = action.payload.accessToken;
            state.discount = action.payload.discount;
        },
        logout: (state, action) => {
           
        },
        modify: (state, action) => {
            state[action.payload.name] = action.payload.value;
        }
    },
});

export const { login, logout, modify } = userSlice.actions;

export default userSlice.reducer;
