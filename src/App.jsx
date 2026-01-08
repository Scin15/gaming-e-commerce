import './App.css'
import Header from './Components/Header.component'
import Footer from './Components/Footer.component'
import { Outlet} from 'react-router'

function App() {
  return (
    <>
      <Header />
      <div className='min-h-screen'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
