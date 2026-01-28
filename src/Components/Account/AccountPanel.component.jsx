import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FilterBar from "../FilterBar.component";
import UserSection from "./UserSection";
import OrderSection from "./OrderSection.component";
import AdminPanel from "./AdminPanel.component";

const AccountPanel = () => {

    const user = useSelector((state) => state.user);
    console.log("Ruolo dell'utente loggato:", user)
    const [filter, setFilter] = useState("prf");

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
                break;
            case "ord":
                return <OrderSection />;
                break;
            default: 
                return <AdminPanel />;
        }
    }

    return (
        <>
            <div className="">
                <div className="flex justify-center mb-[48px]">
                    <h4>{user.name}</h4>
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