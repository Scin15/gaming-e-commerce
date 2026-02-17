import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

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
            state.role = action.payload.role;
            state.order = action.payload.order
        },
        logout: () => initialState,
        update: (state, action) => {
            const {name, surname, address} = action.payload;
            // console.log("Nomi passati alla funzione update:", action)
            state.name = name || state.name;
            state.surname = surname || state.surname;
            state.address = address || state.address;
        }
    },
});

export const { login, logout, update } = userSlice.actions;

export default userSlice.reducer;
