import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserUpdate from "./UserUpdate.component";

const UserSection = () => {

    const user = useSelector((state) => state.user);

    function handleDialog () {
        document.querySelector("dialog").showModal();
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
            <dialog className="p-[32px] rounded-[18px] shadow-xl m-auto backdrop:bg-black/80 dark:bg-black text-p">
                <UserUpdate user={user} />
            </dialog>
            <div className="grid grid-cols-2 gap-2 mt-10 mx-auto max-w-[512px]">
                    <p className="font-bold">Nome</p>
                    <p>{user.name}</p>
                    <p className="font-bold">Cognome</p>
                    <p>{user.surname}</p>
                    <p className="font-bold">E-mail</p>
                    <p>{user.email}</p>
                    <p className="font-bold">Indirizzo</p>
                    <p>{user.address}</p>
                    <button onClick={handleDialog}>Modifica dati</button>
            </div>
        </>
    )
}

export default UserSection;