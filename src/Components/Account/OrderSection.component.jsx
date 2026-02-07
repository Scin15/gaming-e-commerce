import { useSelector } from "react-redux";
import { NavLink } from "react-router";
import { useState, useEffect } from "react";
import { fetchOrders } from "../../utils/utils";

const OrderSection = () => {

    const user = useSelector((state) => state.user);
    const [order, setOrder] = useState([]);
    const [load, setLoad] = useState(false);

    // questo diventa un custom hook

    useEffect(() => {

        setLoad(true);
        const loadOrder = async () => {
            try {
                const result = await fetchOrders(user.accessToken);
                setOrder(result);
                setLoad(false);
            } catch (err) {
                setOrder([]);
                setLoad(false);
            }
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
            <div className="flex flex-col items-center">
                <h1></h1>
            </div>
            <div className="flex flex-col items-start gap-[32px] mx-auto  mt-[40px] max-w-[512px]">
                {
                order.length > 0 ? order.map((element) => {
                    return (
                        <div className="flex gap-[16px]">
                            <div className="max-w-[256px] overflow-hidden rounded-[18px] ">
                                <NavLink>
                                    <img className="w-full h-full hover:scale-110 transition-transform duration-300" alt="" />
                                </NavLink>
                            </div>
                            <div className="flex flex-col items-start">
                                <h5>{element.title}</h5>
                                <h6>{element.price}</h6>
                                <p>{element.quantity}</p>
                                <p>{element.state.desc}</p>
                                <p>{element.payment.desc}</p>
                                <p>{element.placed_at}</p>
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
