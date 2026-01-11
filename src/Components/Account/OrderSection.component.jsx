import { useSelector } from "react-redux";
import { NavLink } from "react-router";

const OrderSection = () => {

    const orders = useSelector((state) => state.user.orders);
    console.log("Ordini: ", orders);

    // gli ordini da dove arrivano?
    // slice dello stato utente o slice dedicato?

    return (
        <>
            <div className="flex flex-col items-center">
                <h1></h1>
            </div>
            <div className="flex flex-col items-start gap-[32px] mx-auto  mt-[40px] max-w-[512px]">
                {
                orders ? orders.map((element) => {
                    return (
                        <div className="flex gap-[16px]">
                            <div className="max-w-[256px] overflow-hidden rounded-[18px] ">
                                <NavLink>
                                    <img className="w-full h-full hover:scale-110 transition-transform duration-300" src="" alt="" />
                                </NavLink>
                            </div>
                            <div className="flex flex-col items-start">
                                <h5>{element.product_title}</h5>
                                <h6>{element.price}</h6>
                                <p>{element.platform_desc}</p>
                                <p>{element.id}</p>
                                <p>{`${element.date.getDate()}/${element.date.getMonth() + 1}/${element.date.getFullYear()}`}</p>
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
