import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { modify } from "../../state/user/userSlice";

const UserSection = () => {

    const user = useSelector((state) => state.user);
    const [activeChange, setActiveChange] = useState("");
    const [text, setText] = useState({name: "", value: ""});
    const dispatch = useDispatch();

    const handleChange = (e, elemennt) => {
        console.log(e.target.value);
        setText({name: element, value: e.target.value});
    }

    const activateChange = (element) => {
        //clicco la prima volta e setta lo stato per attivare la modifica
        //clicco la seconda volta e setto lo stato come vuoto ed effettuo la modifica prendendo il testo dall'imput
        if(activeChange == element) {
            //sto già modificando il campo, quindi inserisco e risetto lo stato a ""
            console.log("Elemento che vado a modificare: ", text);
            dispatch(modify(text));
            setActiveChange("");
            setText({name: "", value: ""});

            return;

        }
        setActiveChange(element);
    }

    if(user.id == null || !user) {
        return (
            <div className="mt-[168px]">
                <h1>Utente non loggato</h1>
            </div>
        )
    }

    return (
        <>
            <div className="grid grid-cols-3 gap-2 mt-10 mx-auto max-w-[512px]">
                    <p className="font-bold">Nome</p>
                    <input type="text" placeholder={user.name} readOnly={activeChange == "name" ?false : true} className={`focus:outline-0 ${activeChange == "name" ? "outline-1 focus:outline-1" : ""}`} onChange={e => handleChange(e, "name")}/>
                    <button onClick={() => activateChange("name")}>Modifica</button>

                    <p className="font-bold">Cognome</p>
                    <input type="text" placeholder={user.surname} readOnly={activeChange == "surname" ?false : true} className={`focus:outline-0 ${activeChange == "surname" ? "outline-1 focus:outline-1" : ""}`} onChange={e => handleChange(e, "surname")}/>
                    <button onClick={() => activateChange("surname")}>Modifica</button>

                    <p className="font-bold">E-mail</p>
                    <input type="text" placeholder={user.email} readOnly={activeChange == "email" ?false : true} className={`focus:outline-0 ${activeChange == "email" ? "outline-1 focus:outline-1" : ""}`} onChange={e => handleChange(e, "email")}/>
                    <button onClick={() => activateChange("email")}>Modifica</button>

                    <p className="font-bold">Indirizzo</p>
                    <input type="text" placeholder={user.address} readOnly={activeChange == "address" ?false : true} className={`focus:outline-0 ${activeChange == "address" ? "outline-1 focus:outline-1" : ""}`} onChange={e => handleChange(e, "address")}/>
                    <button onClick={() => activateChange("address")}>Modifica</button>   
            </div>
        </>
    )
}

export default UserSection;