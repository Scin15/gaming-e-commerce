import { useState } from "react";
import { useNavigate } from 'react-router';
import { useDispatch } from "react-redux";
import { login } from "../state/user/userSlice";
import Register from "./Register.component";

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mailErr, setMailErr] = useState(false);
    const [passErr, setPassErr] = useState(false);
    const [loginErr, setLoginErr] = useState({error: false, message: ""});
    const [registration, setRegistration] = useState(false);

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

        let result = {};

        try {

            // const result = await (await fetch(`${import.meta.env.VITE_END_POINT}/login`, {
            //     method : "POST",
            //     credentials : 'include',
            //     headers : {
            //         "Content-Type" : "application/json"
            //     },
            //     body : JSON.stringify({
            //         mail : email,
            //         password : password
            //     })
            // })).json()

            // inserisco codice fittizio come se avessi effettuato il login per testare il corretto funzionamento dello stato con Redux

            if (email == "pinco@pallo.com" & password == "pippo") {
                    result = {
                    accessToken: "ade4565456",
                    name: "Pinco",
                    surname: "Pallo",
                    email: "pinco@pallo.com",
                    id: 0,
                    address: "Via Brombeis, 80122 Napoli(NA)",
                    discount: 0.2,
                }
            } else {
                throw(new Error("Utenza non registrata"));
            }

        } catch (error) {
            setLoginErr({
                error: true,
                message: error.message,
            });
            return;
        }
    
            if(result.accessToken){
                // setUser({
                //     accessToken : result.accessToken,
                //     mail: result.mail,
                //     id: result.id,
                //     name: result.name,
                //     surname: result.surname,
                // })

                dispatch(login(result));
                console.log("Stato inserito");
    
                navigate("/account")
    
            }else {
                setLoginErr({
                    error: true,
                    message: result.error
                })
                console.log(result.error)
            }
    }

    const handleRegistration = (e) => {
        e.preventDefault();
        setRegistration((state) => !state);
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
            <div className="relative">

                {registration && 
                <div className="absolute left-1/2 -translate-x-1/2 bg-white min-h-100 min-w-200 shadow-xl z-100">
                    <Register />
                    <button onClick={handleRegistration}>Torna al login</button>
                </div>
                }

                <h4 className="text-center">Login</h4>
                <div className="flex justify-center">
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
                <div className="flex justify-center mt-[80px]">
                    <form className="flex flex-col gap-[16px]" action="">
                        <div className="grid grid-cols-2 mx-auto">
                            <label htmlFor="email">E-mail</label>
                            <input className="bg-black/10 text-p rounded-full px-[16px] py-[8px]" type="text" id="email" name="email" onChange={handleChange} />
                        </div>
                        <div className="grid grid-cols-2 mx-auto">
                            <label htmlFor="password">Password</label>
                            <input className="bg-black/10 text-p rounded-full px-[16px] py-[8px]" type="password" id="password" name="password" onChange={handleChange} />
                        </div>
                        <div className="flex gap-[16px] mt-[32px]">
                            <button className="shadow-md rounded-full xl:px[32px] px-[16px] py-[8px] xl:py-[16px] text-black hover:shadow-xl active:opacity-75 w-[230px] border-[2px] font-bold" onClick={handleLogin}>Login
                            </button>
                            <div className="relative">
                                <p className="text-alert absolute top-[-32px]">Non sei ancora registrato?</p>
                                <button className="mr-[40px] shadow-md rounded-full xl:px[32px] px-[16px] py-[8px] xl:py-[16px] text-white bg-linear-to-r from-primary to-secondary hover:shadow-xl active:opacity-75 w-[230px]" onClick={handleRegistration}>Registrati
                                </button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;
