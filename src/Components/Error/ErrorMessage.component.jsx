import { useDispatch } from "react-redux";
import { logout } from "../../state/user/userSlice";
import { resetError } from "../../state/error/errorSlice";
import { useNavigate } from "react-router";

export default function ErrorMessage({ status, message, reload }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <>
            <div className="flex flex-col gap-[16px] items-center justify-center h-screen">
                <h4 className='text-black text-center'>Ops, qualcosa è andato storto, stato: <span>{status}</span> messaggio: <span>{message}</span></h4>
                <div>
                    {reload && <button className="m-auto main-button" onClick={() => {dispatch(logout()); dispatch(resetError()); navigate("/")}}>Torna al login</button>}
                </div>
            </div>
        </>
    )
}