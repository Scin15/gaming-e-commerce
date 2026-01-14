import { useDispatch } from "react-redux";
import DecrementIcon from "../Icons/DecrementIcon.component.";
import { removeItem } from "../../Utils/cartManagement";

    const CartList = ( {list, className } ) => {

        const dispatch = useDispatch();

        if (!list || list.length == 0) {
            return (
                <div className={`border-1 flex flex-col gap-[24px] p-[24px] rounded-[18px] bg-black/10 border-[2px] border-black ${className}`}>
                    <h5>Prodotti</h5>
                    <p>Carrello vuoto</p>
                </div>
            )
        }

        return (
            <div className={`shadow-md border-1 flex flex-col gap-[24px] p-[24px] rounded-[18px] bg-black/10 border-[2px] border-black dark:border-white ${className} md:text-p text-small`}>
                <h5>Prodotti</h5>
                <div className="grid grid-cols-4 gap-[24px]">
                    {list.map(element => {
                        return (
                            <>
                                <div>
                                    <p>{element.title}</p>
                                </div>
                                <div>
                                    <p className="">{element.price ? `${element.price} €` : ""}</p>
                                </div>
                                <div>
                                    <p className="font-bold">{element.quantity ? `x ${element.quantity}`: ""}</p>
                                </div>
                                <div>
                                    <button className="text-black text-h6 rounded-full bg-black/5 hover:bg-white active:opacity-50" onClick={() => removeItem(element.id, dispatch)}>
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
