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
                <button onClick={closeConfirm} className="rounded-full xl:px[32px] px-[16px] py-[8px] xl:py-[16px] text-primary hover:shadow-xl active:bg-black/5 xl:mt-0 mt-[32px] xl:w-[258px] w-[230px] outline-[3px] outline-offset-[-3px] m-auto">Torna all'utente</button>
            </dialog>
            <dialog id="update-dialog" className="p-[32px] rounded-[18px] shadow-xl m-auto backdrop:bg-black/80 dark:bg-black text-p">
                <UserUpdate user={user} />
            </dialog>
            <div className="flex flex-col items-center">
                <div className="grid grid-cols-2 mt-10 max-w-[512px]">
                        <p className="font-bold">Nome</p>
                        <p>{user.name}</p>
                        <p className="font-bold">Cognome</p>
                        <p>{user.surname}</p>
                        <p className="font-bold">E-mail</p>
                        <p className="wrap-anywhere">{user.email}</p>
                        <p className="font-bold">Indirizzo</p>
                        <p>{user.address}</p>
                </div>
                <button className="main-button" onClick={handleDialog}>Modifica dati</button>
            </div>
        </>
    )
}

export default UserSection;
