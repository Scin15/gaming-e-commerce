import CartList from "../Components/Cart/CartList.component";
import CartListTotal from "../Components/Cart/CartListTotal.component";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeAllItem } from "../Utils/cartManagement";
import { useState } from "react";
import { useNavigate } from "react-router";
import { getTotalPrice } from "../Utils/utils";

const Cart = () => {

    // const products = userCart.products;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const products = useSelector((state) => state.cart);
    const discount = useSelector((state) => state.user.discount);
    const user = useSelector((state) => state.user);
    
    const [address, setAddress] = useState("");
    const [payment, setPayment] = useState("");
    const [addressErr, setAddressErr] = useState(false);
    const [paymentErr, setPaymentErr] = useState(false);

    const total = getTotalPrice(products);

    const openDialog = () => {
        if (products.length === 0) {
            window.alert("Carrello vuoto!");
            return;
        }

        if (!user.id) {
            window.alert("Effettua prima il login");
            navigate("/account");
        }
        const dialog = document.querySelector("dialog");
        dialog.showModal();
    }
    
    const closeDialog = (e) => {
        e.preventDefault();
        const dialog = document.querySelector("dialog");
        dialog.close();
    }
    
    const handleSubmit = async (e) => {
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

        const dialog = document.querySelector("dialog");
        const order = [];
        for (const i in products) {
            order.push( {
                _id: user.id,
                order: {
                    title: products[i].title,
                    price: products[i].price,
                    quantity: products[i].quantity,
                    state: {
                        tag: "acc",
                        desc: "Accettato"
                    },
                    address: address,
                    payment: {
                        tag: payment,
                        desc: payment
                    }
                }
            } )
        }
        
        let result = null;

        for (const i in order) {
            try {
                result = await fetch("http://localhost:3000/order", {
                    method: "POST",
                    credentials : "include",
                    headers: {
                        "content-type" : "application/json",
                        authorization: `Bearer ${user.accessToken}`
                    },
                    body: JSON.stringify(order[i])
                });

                console.log("Risultato in risposta", result);
                if (result.status != 200) {
                    console.log("Qualcosa non è andato");
                    throw new Error(result.statusText);
                }

                const resultBody = await result.json();
                console.log("Risultato inserimento:", resultBody);
                
            } catch (err) {
                throw new Error(err.message);
            }    
        }

        if (result) {
            window.alert("Ordine effettuato!");
            removeAllItem(dispatch);
            dialog.close();
        }
    }

    return (
        <>
            <dialog className="p-[32px] rounded-[18px] shadow-xl m-auto backdrop:bg-black/80 dark:bg-black text-p">
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
                        <button className="border-1 rounded-full px-[16px] py-[8px] text-p hover:bg-white hover:text-black" onClick={handleSubmit}>Effettua l'ordine</button>
                    </div>
                </form>
            </dialog>

            <div className="py-[168px] max-w-[512px] md:m-auto mx-[64px] flex flex-col gap-[32px]">
                <CartList list={products}></CartList>

                <CartListTotal total={total} discount={discount ? discount : 0}></CartListTotal>

                <button onClick={openDialog} className="rounded-full xl:px[32px] px-[16px] py-[8px] xl:py-[16px] text-primary hover:shadow-xl active:bg-black/5 xl:mt-0 mt-[32px] xl:w-[258px] w-[230px] outline-[3px] outline-offset-[-3px] m-auto">Avanti
                </button>
            </div>
        </>
    )
}

export default Cart
