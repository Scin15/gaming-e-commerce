import CartListTotal from "./CartListTotal.component";
import { useDispatch } from "react-redux";
import { setError } from "../../state/error/errorSlice";
import { removeAllItem } from "../../Utlis/cartManagement";
import { logout } from "../../state/user/userSlice";
import { useState } from "react";
import { getTotalPrice } from "../../Utlis/utils";
import { addOrder } from "../../Utlis/cartManagement";
import { createOrderArray } from "../../Utlis/cartManagement";
const ConfirmOrder = ({products, discount, user}) => {

    // const products = userCart.products;
    const dispatch = useDispatch();

    const total = getTotalPrice(products);
    
    const [address, setAddress] = useState(user.address ?? "");
    const [payment, setPayment] = useState("");
    const [addressErr, setAddressErr] = useState(false);
    const [paymentErr, setPaymentErr] = useState(false);
    const [loading, setLoading] = useState(false);

    // const confirmDialog = document.getElementById("confirm-dialog");
    // confirmDialog?.showModal();

    const closeDialog = (e) => {
        e.preventDefault();
        document.getElementById("order-dialog").close();
    }
    
    const handlePayment = async (e) => {
        e.preventDefault();
        setAddressErr(false);
        setPaymentErr(false);

        if (address.length === 0) {
            setAddressErr(true);
            return;
        }

        if (payment.length === 0 || payment === "default") {
            setPaymentErr(true);
            return;
        }

        setLoading(true);

        const order = createOrderArray(products, user, address, payment);
        
        for (const i in order) {
            // chiamo inserimento ordine
            try {
                await addOrder(order[i], user);
            } catch (err) {
                // setto l'errore nello stato, che poi verrà mostrato nel componente ErrorMessage con status e messaggio
                dispatch(setError({error: true, status: err.status ?? 500, message: err.message}));
                setLoading(false);
                return;
            }
        }

        // rimuovo i prodotti dal carrello e chiudo il dialog
        setLoading(false);
        dispatch(removeAllItem);
        document.getElementById("order-dialog").close();
        document.getElementById("confirm-dialog").showModal();
    }

    if (loading) {
        return (
            <>
                <div>Sto elaborando l'ordine...</div>
            </>
        )
    }

    return (
        <>
            <div>
                <CartListTotal total={total} discount={discount ? discount : 0}></CartListTotal>
                <h4 className="">Inserisci indirizzo e dati di pagamento:</h4>
                <form action="" className="flex flex-col gap-[16px]">
                    <div className="group">
                        <label htmlFor="address">Indirizzo:</label>
                        <input className="peer" type="text" placeholder="address" name="address" required onChange={e=>setAddress(e.currentTarget.value)} value={address}/>
                        {addressErr && <p className="text-alert text-small">Inserisci un indirizzo</p>}
                    </div>
                    <div>
                        <select name="" id="" className="dark:bg-black peer" onChange={e=> setPayment(e.currentTarget.value)} required>
                            <option value="default">Scegli un metodo di pagamento</option>
                            <option value="msc">MasterCard</option>
                            <option value="vis">Visa</option>
                            <option value="pay">Paypal</option>
                        </select>
                        {paymentErr && <p className="text-alert text-small">Seleziona un metodo di pagamento</p>}
                    </div>
                    <div className="flex justify-around gap-[8px]">
                        <button className="main-button border-[2px]" onClick={closeDialog}>Close</button>
                        <button className="main-button border-[2px]" onClick={handlePayment}>Effettua l'ordine</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ConfirmOrder;
