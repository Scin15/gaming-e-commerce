import './App.css'
import Header from './Components/Header.component'
import Footer from './Components/Footer.component'
import { Outlet} from 'react-router'
import { handleTheme } from './Utlis/darkMode'
import { ErrorBoundary } from 'react-error-boundary'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { resetError } from './state/error/errorSlice'
import { logout } from './state/user/userSlice'

function App() {

  // setto il tema in base al tema di sistema windows o local storage. Local storage > tema windows.
    handleTheme();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const errorState = useSelector((state) => state.error);

    if(errorState.error) {
        if (errorState.status === 403) {
            return (
                <>
                <div className='flex flex-col gap-[16px]'>
                    <h4 className='text-black'>Utenza scaduta o non autorizzata, riprova l'accesso. Se il problema persiste, segnala al seguente indirizzo...</h4>
                    <button className="m-auto text-black border-1 rounded-[18px] px-[16px] py-[8px] dark:hover:text-black dark:hover:bg-white hover:bg-black hover:text-white" onClick={() => {dispatch(logout()); dispatch(resetError()); navigate("/")}}>Torna al login</button>
                </div>
                </>
            )
        }
        return (
            <>
                <h4 className='text-black'>Ops, qualcosa è andato storto, stato {errorState.status} messaggio: {errorState.message}</h4>
            </>
        )
    }

//   console.log(document.documentElement.classList);
  return (
    <>
        <Header />
        <div className='min-h-screen bg-white dark:bg-black/75'>
            <ErrorBoundary onReset={() => navigate("/")} fallbackRender={({ error, resetErrorBoundary }) => {
                return (
                    <div className="pt-[168px] flex flex-col items-center gap-[16px]">
                        <p className="text-center">Ops, qualcosa è andato storto...</p>
                        <button className="text-p border-1 rounded-[18px] px-[16px] py-[8px] dark:hover:text-black dark:hover:bg-white hover:bg-black hover:text-white" onClick={resetErrorBoundary}>Riprova</button>
                    </div>
                )
                }}>
                <Outlet />
            </ErrorBoundary>
        </div>
        <Footer />
    </>
  )
}

export default App
