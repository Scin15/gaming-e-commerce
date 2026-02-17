import { createSlice } from "@reduxjs/toolkit";

const initialState = {error: false, status: null, message: null};

const errorSlice = createSlice({
    name: "error",
    initialState: initialState,
    reducers: {
        setError: (state, action) => {
            console.log(action);
            const { error, status, message } = action.payload;
            if (!error || !status) {
                throw new Error("parametri error o status non trovati");
            }
            return {error, status, message};
        },
        resetError: () => initialState
    }
});

export const { setError, resetError } = errorSlice.actions;

export default errorSlice.reducer;
