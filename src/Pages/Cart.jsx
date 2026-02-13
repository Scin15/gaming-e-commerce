import CartList from "../Components/Cart/CartList.component";
import CartListTotal from "../Components/Cart/CartListTotal.component";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getTotalPrice } from "../Utlis/utils";
import ConfirmOrder from "../Components/Cart/ConfirmOrder.component";

const Cart = () => {

    const navigate = useNavigate();

    const products = useSelector((state) => state.cart);
    const discount = useSelector((state) => state.user.discount);
    const user = useSelector((state) => state.user);
    const total = getTotalPrice(products);

    const handleDialog = () => {
        if (products.length === 0) {
            // window.alert("Carrello vuoto!");
            document.getElementById("empty-dialog").showModal();
            return;
        }

        if (!user.id) {
            window.alert("Effettua prima il login");
            navigate("/account");
        }
        document.getElementById("order-dialog").showModal();
    }

    const closeConfirm = () => {
        document.getElementById("confirm-dialog").close();
    }
    const closeEmpty = () => {
        document.getElementById("empty-dialog").close();
    }
    const closeLogout = () => {
        document.getElementById("empty-dialog").close();
        navigate("/account");
    }

    return (
        <>
            <dialog id="logout-dialog" className="p-[32px] rounded-[18px] shadow-xl m-auto backdrop:bg-black/80 dark:bg-black text-p text-center">
                <h4>Sessione scaduta</h4>
                <button onClick={closeLogout} className="rounded-full xl:px[32px] px-[16px] py-[8px] xl:py-[16px] text-primary hover:shadow-xl active:bg-black/5 xl:mt-0 mt-[32px] xl:w-[258px] w-[230px] outline-[3px] outline-offset-[-3px] m-auto">Torna alla schemata di login</button>
            </dialog>
            <dialog id="empty-dialog" className="p-[32px] rounded-[18px] shadow-xl m-auto backdrop:bg-black/80 dark:bg-black text-p text-center">
                <h4>Carrello vuoto</h4>
                <button onClick={closeEmpty} className="rounded-full xl:px[32px] px-[16px] py-[8px] xl:py-[16px] text-primary hover:shadow-xl active:bg-black/5 xl:mt-0 mt-[32px] xl:w-[258px] w-[230px] outline-[3px] outline-offset-[-3px] m-auto">Torna al carrello</button>
            </dialog>
            <dialog id="confirm-dialog" className="p-[32px] rounded-[18px] shadow-xl m-auto backdrop:bg-black/80 dark:bg-black text-p text-center">
                <h4>Odine effettuato con successo</h4>
                <button onClick={closeConfirm} className="rounded-full xl:px[32px] px-[16px] py-[8px] xl:py-[16px] text-primary hover:shadow-xl active:bg-black/5 xl:mt-0 mt-[32px] xl:w-[258px] w-[230px] outline-[3px] outline-offset-[-3px] m-auto">Torna al carrello</button>
            </dialog>
            <dialog id="order-dialog" className="p-[32px] rounded-[18px] shadow-xl m-auto backdrop:bg-black/80 dark:bg-black text-p">
                <ConfirmOrder products={products} discount={discount} user={user} />
            </dialog>
            
            <div className="py-[168px] max-w-[512px] md:m-auto mx-[10px] flex flex-col gap-[32px]">
                <CartList list={products}></CartList>

                <CartListTotal total={total} discount={discount ? discount : 0}></CartListTotal>

                <button onClick={handleDialog} className="rounded-full xl:px[32px] px-[16px] py-[8px] xl:py-[16px] text-h4 bg-primary hover:shadow-xl active:bg-primary/50 xl:mt-0 mt-[32px] xl:w-[258px] w-[230px] m-auto">Avanti
                </button>
            </div>
        </>
    )
}

export default Cart
