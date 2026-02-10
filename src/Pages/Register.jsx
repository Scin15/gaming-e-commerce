import { useState } from "react";
import { useNavigate, NavLink } from 'react-router';
import { useDispatch } from "react-redux";

const Register = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mailErr, setMailErr] = useState(false);
    const [passErr, setPassErr] = useState(false);
    const [registerErr, setRegisterErr] = useState({error: false, message: ""});
    const [success, setSuccess] = useState(false);
    
    const handleRegister = async e => {
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
            const response = await fetch(`${import.meta.env.VITE_END_POINT}/register`, {
                method : "POST",
                credentials : 'include',
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    name: name,
                    surname: surname,
                    email : email,
                    password : password,
                    role: "user"
                })
            });
            
            result = await response.json();
            
            if (response.status != 200) {
                console.log("Risposta di errore:", response)
                setRegisterErr({
                    error: true,
                    message: result.error
                });
                return;
            }
            
        } catch (error) {
            setRegisterErr({
                error: true,
                message: error.message,
            });
            return;
        }
        
        if(result){
            console.log("Registrazione avvenuta:", result);
            const dialog = document.querySelector("dialog");
            dialog.showModal();
            // navigate("/account");
    
            }else {
                setRegisterErr({
                    error: true,
                    message: result.error
                })
                console.log(result.error)
            }
    }

    // funzione per gestire ogni input da tastiera
    const handleChange = e=>{
        switch(e.currentTarget.name) {
            case "name": 
                setName(e.currentTarget.value);
                break;
            case "surname":
                setSurname(e.currentTarget.value);
                break;
            case "email":
                setEmail(e.currentTarget.value);
                break;
            case "password":
                setPassword(e.currentTarget.value);
                break;
            default:
        } 
    }

    const closeDialog = () => {
        const dialog = document.querySelector("dialog");
        dialog.close();
        navigate("/account");
    }

    return (
        <>
            <dialog className="p-[32px] rounded-[18px] shadow-xl m-auto backdrop:bg-black/80 dark:bg-black text-p text-center">
                <h4>Registrazione effettuata</h4>
                <p>Controlla la tua mail, abbiamo inviato un link per l'attivazione</p>
                <button onClick={closeDialog} className="rounded-full xl:px[32px] px-[16px] py-[8px] xl:py-[16px] text-primary hover:shadow-xl active:bg-black/5 xl:mt-0 mt-[32px] xl:w-[258px] w-[230px] outline-[3px] outline-offset-[-3px] m-auto">Vai al login</button>
            </dialog>
            <div className="flex flex-col items-center text-p pt-[168px]">
                <h4 className="text-center">Register</h4>
                <div className="flex justify-center">
                    <p className='text-alert'>
                        {registerErr.error && registerErr.message}
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
                            <label className="" htmlFor="name">Nome</label>
                            <input className="bg-black/10 dark:bg-white/50 text-p dark:text-black rounded-full px-[16px] py-[8px]" type="text" id="name" name="name" onChange={handleChange} value={name}/>
                        </div>
                        <div className="flex justify-between items-center mx-[16px] gap-[16px]">
                            <label className="" htmlFor="surname">Cognome</label>
                            <input className="bg-black/10 dark:bg-white/50 text-p dark:text-black rounded-full px-[16px] py-[8px]" type="text" id="surname" name="surname" onChange={handleChange} value={surname} />
                        </div>
                        <div className="flex justify-between items-center mx-[16px] gap-[16px]">
                            <label className="" htmlFor="email">E-mail</label>
                            <input className="bg-black/10 dark:bg-white/50 text-p dark:text-black rounded-full px-[16px] py-[8px]" type="text" id="email" name="email" onChange={handleChange} value={email}/>
                        </div>
                        <div className="flex justify-between items-center mx-[16px] gap-[16px]">
                            <label className="" htmlFor="password">Password</label>
                            <input className="bg-black/10 dark:bg-white/50 text-p dark:text-black rounded-full px-[16px] py-[8px]" type="password" id="password" name="password" onChange={handleChange} value={password}/>
                        </div>
                        <div className="flex justify-center gap-[16px]">
                            <div className="">
                                <p className="text-alert text-center md:text-p text-small mb-[8px]">Non sei ancora registrato?</p>
                                <button className="shadow-md rounded-full xl:px[32px] px-[16px] py-[8px] xl:py-[16px] text-white bg-linear-to-r from-primary to-secondary hover:shadow-xl active:opacity-75 md:w-[200px] w-[100px]" onClick={handleRegister}>Registrati
                                </button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )

};

export default Register;
