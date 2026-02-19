import { useSelector } from "react-redux"
import AccountPanel from "../Components/Account/AccountPanel.component";
import Login from "../Components/Account/Login.component";
// import { ErrorBoundary } from "react-error-boundary";

const Account = () => {

    const user = useSelector((state) => state.user);

    return (
        <>
            <div className="pt-[168px] px-[32px]">
                {!user.id ? <Login /> : <AccountPanel />}
            </div>
        </>
    )
}

export default Account;
