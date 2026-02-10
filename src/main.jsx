import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux";
import { store } from "./state/store.js";
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home.jsx';
import Catalog from './pages/Catalog.jsx';
import Cart from './pages/Cart.jsx';
import Account from './pages/Account.jsx';
import Register from './pages/Register.jsx';
import GameDetail from './pages/GameDetail.jsx';
import ScrollToTop from './components/ScrollToTop.component.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
       <ScrollToTop />
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='/' element={<Home />}></Route>
            <Route path='/gameDetail/:id' element={<GameDetail />}></Route>
            <Route path='catalog' element={<Catalog />}></Route>
            <Route path='cart' element={<Cart />}></Route>
            <Route path='account' element={<Account />}></Route>
            <Route path='register' element={<Register />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
