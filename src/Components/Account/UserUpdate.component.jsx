import { useState } from "react";
import { updateUser } from "../../Utlis/user";
import { setError } from "../../state/error/errorSlice";
import { useDispatch } from "react-redux";
import { update } from "../../state/user/userSlice";

export default function UserUpdate({user}) {
    const dispatch = useDispatch();
    const [name, setName] = useState(user.name);
    const [surname, setSurname] = useState(user.surname);
    const [address, setAddress] = useState(user.address);

    function handleClose(e) {
        e.preventDefault();
        document.getElementById("update-dialog").close();
    }

    async function handleUpdate(e) {
        e.preventDefault();
        let result = null;
        try {
            result = await updateUser(user, {name, surname, address})
        } catch (err) {
            console.log(err);
            dispatch(setError({error: true, status: 500, message: "Errore durante l'update dell'utente"}));
            window.alert("Errore: " + err.message);
            return;
        }

        console.log(result);

        if (result.status != 200) {
            console.log("Errore!")
            dispatch(setError({error: true, status: result.status, message: "Errore durante l'update dell'utente"}));
            return;
        }
        
        dispatch(update({name, surname, address}));
        document.getElementById("update-dialog").close();
        document.getElementById("confirm-dialog").showModal();
    }

    return (
        <>
            <form action="" className="grid grid-cols-2 gap-[8px]">
                <label htmlFor="name">Nome</label>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor="surname">Cognome</label>
                <input type="text" name="surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
                <label htmlFor="name">Indirizzo</label>
                <input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                {/* <div className="flex justify-center gap-[8px] mt-[8px] col-span-2"> */}
                    <button className="rounded-full xl:px[16px] px-[16px] py-[8px] xl:py-[8px] text-p border-1 active:opacity-75 row-span-2 mt-[8px] dark:hover:bg-white dark:hover:text-black hover:text-white hover:bg-black" onClick={handleClose}>Esci</button>
                    <button className="rounded-full xl:px[16px] px-[16px] py-[8px] xl:py-[8px] text-p border-1 active:opacity-75 row-span-2 mt-[8px] dark:hover:bg-white dark:hover:text-black hover:text-white hover:bg-black" onClick={handleUpdate}>Salva</button>
                {/* </div> */}
            </form>
        </>
    )
}
