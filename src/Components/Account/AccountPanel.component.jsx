import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../state/user/userSlice";
import FilterBar from "../FilterBar.component";
import UserSection from "./UserSection";
import OrderSection from "./OrderSection.component";
import AdminPanel from "./AdminPanel.component";

const AccountPanel = () => {

    const user = useSelector((state) => state.user);
    console.log("Ruolo dell'utente loggato:", user);
    const [filter, setFilter] = useState("prf");
    const dispatch = useDispatch();

    const categories = [
        {
            tag: "prf",
            name: "Profilo"
        },
        {
            tag: "ord",
            name: "Ordini"
        },
    ];

    if (user.role === "admin") categories.push({
        tag: "adm",
        name: "Admin"
    })

    const panelDisplayed = () => {
        switch(filter) {
            case "prf": 
                return <UserSection />;
            case "ord":
                return <OrderSection />;
            default: 
                return <AdminPanel />;
        }
    }

    function handleLogout() {
        console.log("Eseguo il logout dell'utente", user.name);
        dispatch(logout());
        console.log("Utente loggato ora:", user);
    }

    return (
        <>
            <div className="">
                <div className="flex justify-center mb-[48px] gap-[16px]">
                    <h4>{user.name}</h4>
                    <button className="rounded-full xl:px[16px] px-[8px] py-[4] xl:py-[8px] text-p border-1 dark:border-white border-black active:opacity-50 dark:hover:bg-white dark:hover:text-black hover:text-white hover:bg-black outline-none" onClick={handleLogout}>Logout</button>
                </div>
                <div>
                    <FilterBar categories={categories} handleFilter={setFilter}/>
                </div>
                <div>
                    {
                        panelDisplayed()
                    }
                </div>
            </div>
        </>
    )
}

export default AccountPanel
