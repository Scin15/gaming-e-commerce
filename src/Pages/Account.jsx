import { useSelector } from "react-redux"
import AccountPanel from "../Components/Account/AccountPanel.component";
import Login from "../Components/Account/Login.component";
import { useState, useEffect } from "react";
import { fetchProducts } from "../Utlis/utils";

const Account = () => {

    const user = useSelector((state) => state.user);
    console.log("Utente", user);

    return (
        <>
            <div className="pt-[168px] px-[32px]">
                {!user.id ? <Login /> : <AccountPanel />}
            </div>
        </>
    )
}

export default Account;
