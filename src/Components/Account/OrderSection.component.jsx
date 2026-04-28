import { useSelector } from "react-redux";
import { NavLink } from "react-router";
import { useState, useEffect } from "react";
import { fetchOrders } from "../../Utlis/utils";
import { useDispatch } from "react-redux";
import { setError } from "../../state/error/errorSlice";

const OrderSection = () => {

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [order, setOrder] = useState([]);
    const [load, setLoad] = useState(false);

    // questo diventa un custom hook

    useEffect(() => {

        setLoad(true);
        const loadOrder = async () => {
            let result = null;
            try {
                result = await fetchOrders(user.accessToken);
            } catch(err) {
                console.log(err);
                setLoad(false);
                dispatch(setError({error: true, status: err.status ?? 500, message: err.message}));
                return;
            }
            setOrder(result);
            setLoad(false);
        }
        loadOrder();
    }, [])

    if (load) {
        return (
            <>
                <h5>Loading orders...</h5>
            </>
        )
    }

    return (
        <>
            <div className="flex flex-col gap-[32px] mx-auto mt-[40px] xl:px-[128px] px-[64px]">
                {
                order.length > 0 ? order.map((element) => {
                    return (
                        <div className="flex flex-col gap-[16px] shadow-xl rounded-[18px] p-[16px] dark:bg-white/10 bg-black/30 ">
                            {/* <div className="max-w-[256px] overflow-hidden rounded-[18px] ">
                                <NavLink>
                                    <img className="w-full h-full hover:scale-110 transition-transform duration-300" alt="" />
                                </NavLink>
                            </div> */}
                            <div className="flex flex-col items-start">
                                <h5 className="border-b-[1px] border-white/50 w-full mb-[8px]">{element.title}</h5>
                                <h6><span className="font-bold">Prezzo: </span>{element.price} €</h6>
                                <p><span className="font-bold">Quantità: </span> {element.quantity}</p>
                                <p><span className="font-bold">Stato: </span>{element.state.desc}</p>
                                <p><span className="font-bold"> Metodo di pagamento: </span>{element.payment.desc}</p>
                                <p><span className="font-bold">Data ordine: </span>{element.placed_at.substring(0, 10)}</p>
                            </div>
                        </div>
                    )
                    })
                : <div>Nessun ordine</div>}
            </div>
        </>
    )
}

export default OrderSection;
