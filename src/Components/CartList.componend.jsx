import { remove } from "../state/cart/cartSlice";
import { decrement } from "../state/counter/counterSlice";
import { useDispatch } from "react-redux";
import DecrementIcon from "./Icons/DecrementIcon.component.";

    const CartList = ( {list, className } ) => {

        const dispatch = useDispatch();

        const handleClick = (id) => {
            dispatch(remove(id));
            dispatch(decrement());
        }

        if (!list || list.length == 0) {
            return (
                <div className={`border-1 flex flex-col gap-[24px] p-[24px] rounded-[18px] bg-black/10 border-[2px] border-black ${className}`}>
                    <h5>Prodotti</h5>
                    <p>Carrello vuoto</p>
                </div>
            )
        }

        return (
            <div className={`border-1 flex flex-col gap-[24px] p-[24px] rounded-[18px] bg-black/10 border-[2px] border-black ${className}`}>
                <h5>Prodotti</h5>
                <div className="grid grid-cols-4 gap-[24px]">
                    {list.map(element => {
                        return (
                            <>
                                <div>
                                    <p>{element.title}</p>
                                </div>
                                <div>
                                    <p>{element.price ? `${element.price} €` : ""}</p>
                                </div>
                                <div>
                                    <p>{element.quantity ? `x ${element.quantity}`: ""}</p>
                                </div>
                                <div>
                                    <button className="shadow-xl border-[1px] border-black/25 text-black text-h6 hover:shadow-xl rounded-full bg-white hover:bg-black/10 active:opacity-50" onClick={() => handleClick(element.id)}>
                                        <DecrementIcon />
                                    </button>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        )
    }

    export default CartList;