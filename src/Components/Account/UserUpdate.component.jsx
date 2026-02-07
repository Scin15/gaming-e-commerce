import { useState } from "react";
import { updateUser } from "../../utils/user";
import { useDispatch } from "react-redux";
import { update } from "../../state/user/userSlice";

export default function UserUpdate({user}) {
    const dispatch = useDispatch();
    const [name, setName] = useState(user.name);
    const [surname, setSurname] = useState(user.surname);
    const [address, setAddress] = useState(user.address);

    function handleClose(e) {
        e.preventDefault();
        document.querySelector("dialog").close();
    }

    async function handleUpdate(e) {
        e.preventDefault();
        let result = null;
        try {
            result = await updateUser(user, {name, surname, address});
        } catch (err) {
            window.alert("Errore: " + err.message);
            return;
        }
        
        dispatch(update({name, surname, address}));
        window.alert("Successo" + result);
        document.querySelector("dialog").close();
    }

    return (
        <>
            <form action="" className="grid grid-cols-2 ">
                <label htmlFor="name">Nome</label>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor="surname">Cognome</label>
                <input type="text" name="surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
                <label htmlFor="name">Indirizzo</label>
                <input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                <button onClick={handleClose}>Esci</button>
                <button onClick={handleUpdate}>Salva</button>
            </form>
        </>
    )
}