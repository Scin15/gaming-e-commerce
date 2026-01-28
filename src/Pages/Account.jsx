import { useSelector } from "react-redux"
import AccountPanel from "../Components/Account/AccountPanel.component";
import Login from "../Components/Account/Login.component";
import { useState, useEffect } from "react";
import { fetchProducts } from "../Utils/utils";

const Account = () => {

    const user = useSelector((state) => state.user);

    return (
        <>
            <div className="pt-[168px]">
                {user.id == null || !user ? <Login /> : <AccountPanel />}
            </div>
        </>
    )
}

export default Account;
