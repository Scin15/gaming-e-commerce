import CartListTotal from "./CartListTotal.component";
import { useDispatch } from "react-redux";
import { removeAllItem } from "../../utils/cartManagement";
import { useState } from "react";
import { getTotalPrice } from "../../utils/utils";
import { addOrder } from "../../utils/cartManagement";
import { createOrderArray } from "../../utils/cartManagement";

const ConfirmOrder = ({products, discount, user}) => {

    // const products = userCart.products;
    const dispatch = useDispatch();

    const total = getTotalPrice(products);
    
    const [address, setAddress] = useState("");
    const [payment, setPayment] = useState("");
    const [addressErr, setAddressErr] = useState(false);
    const [paymentErr, setPaymentErr] = useState(false);
    const [loading, setLoading] = useState(false);

    const closeDialog = (e) => {
        e.preventDefault();
        document.querySelector("dialog").close();
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
                window.alert(`Qualcosa è andato storto...${err.message}`);
                setLoading(false);
                return;
            }
        }

        // rimuovo i prodotti dal carrello e chiudo il dialog
        window.alert("Ordine effettuato con successo!");
        dispatch(removeAllItem);
        document.querySelector("dialog").close();
        setLoading(false);


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
                        <input className="peer" type="text" placeholder="Address" name="address" required onChange={e=>setAddress(e.currentTarget.value)} />
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
                    <div className="flex justify-around">
                        <button className="border-1 rounded-full px-[16px] py-[8px] text-p hover:bg-white hover:text-black" onClick={closeDialog}>Close</button>
                        <button className="border-1 rounded-full px-[16px] py-[8px] text-p hover:bg-white hover:text-black" onClick={handlePayment}>Effettua l'ordine</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ConfirmOrder;