import './App.css'
import Header from './Components/Header.component'
import Footer from './Components/Footer.component'
import { Outlet} from 'react-router'
import { handleTheme } from './utils/darkMode'

function App() {

  // setto il tema in base al tema di sistema windows o local storage. Local storage > tema windows.
  handleTheme();

  console.log(document.documentElement.classList);
  return (
    <>
      <Header />
      <div className='min-h-screen bg-white dark:bg-black/75'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
