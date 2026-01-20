import { increment, decrement } from "../state/counter/counterSlice";
import { add, remove } from "../state/cart/cartSlice";

const addItem = (item, dispatch) => {
    dispatch(increment());
    dispatch(add(item));
}

const removeItem = (id, dispatch) => {
    dispatch(remove(id));
    dispatch(decrement());
}

export {
    addItem,
    removeItem,
}
