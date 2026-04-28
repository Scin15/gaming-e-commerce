import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserUpdate from "./UserUpdate.component";

const UserSection = () => {

    const user = useSelector((state) => state.user);

    function handleDialog () {
        document.getElementById("update-dialog").showModal();
    }

    function closeConfirm () {
        document.getElementById("confirm-dialog").close();
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
            <dialog id="confirm-dialog" className="p-[32px] rounded-[18px] shadow-xl m-auto backdrop:bg-black/80 dark:bg-black text-p text-center">
                <h4>Utente aggiornato</h4>
                <button onClick={closeConfirm} className="main-small-button m-auto mt-[16px] border-[2px]">Torna all'utente</button>
            </dialog>
            <dialog id="update-dialog" className="p-[32px] rounded-[18px] shadow-xl m-auto backdrop:bg-black/80 dark:bg-black text-p">
                <UserUpdate user={user} />
            </dialog>
            <div className="flex flex-col items-center">
                <div className="grid grid-cols-2 mt-10 max-w-[512px] dark:bg-white/10 bg-black/30 shadow-xl rounded-[18px] p-[16px]">
                        <p className="font-bold border-b-[1px] border-white/50">Nome</p>
                        <p className="border-b-[1px] border-white/50">{user.name}</p>
                        <p className="font-bold border-b-[1px] border-white/50">Cognome</p>
                        <p className="border-b-[1px] border-white/50">{user.surname}</p>
                        <p className="font-bold border-b-[1px] border-white/50">E-mail</p>
                        <p className="wrap-anywhere border-b-[1px] border-white/50">{user.email}</p>
                        <p className="font-bold">Indirizzo</p>
                        <p>{user.address}</p>
                </div>
                <button className="main-button mt-[16px] font-bold" onClick={handleDialog}>Modifica dati</button>
            </div>
        </>
    )
}

export default UserSection;
