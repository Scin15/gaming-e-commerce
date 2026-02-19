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
            dispatch(setError({error: true, status: err.status ?? 500, message: err.message}));
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
                    <button className="main-small-button border-[2px] font-bold mt-[16px]" onClick={handleClose}>Esci</button>
                    <button className="main-small-button border-[2px] font-bold mt-[16px]" onClick={handleUpdate}>Salva</button>
                {/* </div> */}
            </form>
        </>
    )
}
