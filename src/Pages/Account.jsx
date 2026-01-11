import { useSelector } from "react-redux"
import AccountPanel from "../Components/Account/AccountPanel.component";
import Login from "../Components/Account/Login.component";

const Account = () => {

    const user = useSelector((state) => state.user);

    console.log("Utente che ho loggato: ", user);

    return (
        <>
            <div className="pt-[168px]">
                {user.id == null || !user ? <Login /> : <AccountPanel />}
            </div>
        </>
    )
}

export default Account;