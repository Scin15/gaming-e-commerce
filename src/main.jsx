import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux";
import { store } from "./state/store.js";
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './Components/Home.component'
import Catalog from './Components/Catalog.component.jsx';
import Cart from './Components/Cart.component.jsx';
import Account from './Components/Account.component.jsx';
import GameDetail from './Components/GameDetail.component.jsx';
import ScrollToTop from './Components/ScrollToTop.component.jsx';

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
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
