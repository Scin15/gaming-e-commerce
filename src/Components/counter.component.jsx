import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../state/counter/counterSlice";

const Counter = () => {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <>
            <div>
                <h2>{count}</h2>
                <div>
                    <button onClick={() => dispatch(increment())}>Increment</button>
                    <button onClick={() => dispatch(decrement())}>Decrement</button>
                </div>
            </div>
        </>
    )
}

export default Counter;