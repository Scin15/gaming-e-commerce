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
export {
    addItem,
    removeItem,
    removeAllItem,
}
