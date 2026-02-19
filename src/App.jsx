import './App.css'
import Header from './Components/Header.component'
import Footer from './Components/Footer.component'
import { Outlet} from 'react-router'
import { handleTheme } from './Utlis/darkMode'
import { ErrorBoundary } from 'react-error-boundary'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import ErrorMessage from './Components/Error/ErrorMessage.component'

function App() {

  // setto il tema in base al tema di sistema windows o local storage. Local storage > tema windows.
    handleTheme();
    const navigate = useNavigate();
    const errorState = useSelector((state) => state.error);

    console.log(errorState.status);

    if(errorState.error) {
        return (
            <ErrorMessage status={errorState.status} message={errorState.message} reload={true}/>
        )
    }

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
