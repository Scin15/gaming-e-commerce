import { useState } from "react";
import { useNavigate, NavLink } from 'react-router';
import { useDispatch } from "react-redux";
import { login } from "../../state/user/userSlice";

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mailErr, setMailErr] = useState(false);
    const [passErr, setPassErr] = useState(false);
    const [loginErr, setLoginErr] = useState({error: false, message: ""});

    const handleLogin = async e => {
        e.preventDefault()  //per gestire il form non in automatico

        // semplice check validità email
        if(email == null || email == "") {
            setMailErr(true);
            return;
        } else {
            setMailErr(false);
        }
        
        // semplice check validità password
        if(password == null || password == "") {
            setPassErr(true);
            return;
        } else {
            setPassErr(false);
        }

        let result = null;

        try {
            
            result = await (await fetch(`${import.meta.env.VITE_END_POINT}/login`, {
                method : "POST",
                credentials : 'include',
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    email : email,
                    password : password
                })
            })).json();
            
        } catch (error) {
            setLoginErr({
                error: true,
                message: error.message,
            });
            return;
        }
        
        console.log("Access token ottenuto:", result.accessToken);
        if(result.accessToken){

            dispatch(login(result));
            navigate("/account");

        }else {
            setLoginErr({
                error: true,
                message: result.error
            })
            console.log(result.error)
        }
    }

    // funzione per gestire ogni input da tastiera
    const handleChange = e=>{
        if(e.currentTarget.name ==="email") {
            setEmail(e.currentTarget.value)
        } else {
            setPassword(e.currentTarget.value)
        }
    }

    return (
        <>
            <div className="flex flex-col items-center text-p">
                <h4 className="text-center">Login</h4>
                <div className="flex flex-col justify-center">
                    <p className='text-alert'>
                        {loginErr.error && loginErr.message}
                    </p>
                    <p className='text-alert'>
                        {mailErr && "Inserisci una mail valida"}
                    </p>
                    <p className='text-alert'>
                        {passErr && "Inserisci una password valida"}
                    </p>
                </div>
                <div className="flex justify-center mt-[80px] ">
                    <form className="flex flex-col gap-[16px]" action="">
                        <div className="flex justify-between items-center mx-[16px] gap-[16px]">
                            <label className="" htmlFor="email">E-mail</label>
                            <input className="bg-black/10 dark:bg-white/50 text-p dark:text-black rounded-full px-[16px] py-[8px]" type="text" id="email" name="email" onChange={handleChange} />
                        </div>
                        <div className="flex justify-between items-center mx-[16px] gap-[16px]">
                            <label className="" htmlFor="password">Password</label>
                            <input className="bg-black/10 dark:bg-white/50 text-p dark:text-black rounded-full px-[16px] py-[8px]" type="password" id="password" name="password" onChange={handleChange} />
                        </div>
                        <div className="flex justify-center gap-[16px] mt-[32px]">
                            <button className="shadow-md rounded-full xl:px[32px] px-[16px] py-[8px] xl:py-[16px] text-p hover:shadow-xl active:opacity-75 md:w-[200px] w-[100px] border-[2px] font-bold" onClick={handleLogin}>Login
                            </button>
                            <div className="relative">
                                <p className="text-alert absolute md:top-[-32px] top-[-40px] md:text-p text-small">Non sei ancora registrato?</p>
                                <NavLink to="/register">
                                    <button className="shadow-md rounded-full xl:px[32px] px-[16px] py-[8px] xl:py-[16px] text-white bg-linear-to-r from-primary to-secondary hover:shadow-xl active:opacity-75 md:w-[200px] w-[100px]">Registrati
                                    </button>
                                </NavLink>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;
