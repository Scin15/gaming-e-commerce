import { NavLink } from "react-router";
import CartList from "./CartList.componend";
import CartListTotal from "./CartListTotal";
import { useSelector } from "react-redux";
import { remove } from "../state/cart/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {

    // const products = userCart.products;
    const products = useSelector((state) => state.cart);
    const discount = useSelector((state) => state.user.discount);
    const dispatch = useDispatch();

    console.log("Prodotti: ", products);

    const getTotal = () => {
        var sum = 0;
        for (let i=0; i<products.length; i++) {
            sum += products[i].price * products[i].quantity;
        }
        return sum;
    }

    const total = getTotal();

    return (
        <>
            <div className="my-[168px] max-w-[512px] m-auto flex flex-col gap-[32px]">
                <CartList list={products}></CartList>

                <CartListTotal total={total} discount={discount ? discount : 0}></CartListTotal>

                    <NavLink to="/cart" className="place-self-center">
                        <button className="rounded-full xl:px[32px] px-[16px] py-[8px] xl:py-[16px] text-secondary hover:shadow-xl active:bg-black/5 xl:mt-0 mt-[32px] xl:w-[258px] w-[230px] outline-[3px] outline-offset-[-3px]">Avanti
                        </button>
                    </NavLink>
            </div>
        </>
    )
}

export default Cart
