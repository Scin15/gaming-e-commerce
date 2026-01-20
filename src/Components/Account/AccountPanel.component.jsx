import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FilterBar from "../FilterBar.component";
import UserSection from "./UserSection";
import OrderSection from "./OrderSection.component";

const AccountPanel = () => {

    const user = useSelector((state) => state.user);
    const [filter, setFilter] = useState(0);

    const handleFilter = (id) => {
        setFilter(id);
    }

    return (
        <>
            <div className="">
                <div className="flex justify-center mb-[48px]">
                    <h4>{user.name}</h4>
                </div>
                <div>
                    <FilterBar categories={[{id: 0, name: "Profilo"}, {id: 1, name: "Ordini"}]} handleFilter={handleFilter}/>
                </div>
                <div>
                    {filter == 0 ? <UserSection /> : <OrderSection />}
                </div>
            </div>
        </>
    )
}

export default AccountPanel