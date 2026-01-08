import { useSelector } from "react-redux"
import AccountPanel from "./AccountPanel.component";
import Login from "./Login.component";

const Account = () => {

    const user = useSelector((state) => state.user);

    console.log("Utente che ho loggato: ", user);

    return (
        <>
            <div className="mt-[168px]">
                {user.id == null || !user ? <Login /> : <AccountPanel />}
            </div>
        </>
    )
}

export default Account;