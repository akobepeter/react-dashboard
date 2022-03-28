// import './App.css';
import './style/dark.scss';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Login from './pages/login/Login';
import New from './pages/new/New';
import Single from './pages/single/Single';
import NotFound from './pages/notFound/NotFound';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { productInputs, userInputs } from './formSource';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';

function App() {
  const {darkMode} = useContext(DarkModeContext);
  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      {/* "App app dark" */}
  <BrowserRouter>
    <Routes>
       <Route path='/'>
         <Route index element={<Home/>}/>
         <Route path='login' element={<Login/>}/>
         
          <Route path='users'>
            <Route index element={<List/>}/>
            <Route path=':userId' element={<Single/>}/>
            <Route path='new' element={<New inputs={userInputs} title="Add New User"/>}/>
          </Route>
         
         <Route path='products'>
           <Route index element={<List/>}/>
           <Route path=':productId' element={<Single/>}/>
           <Route path='new' element={<New inputs={productInputs} title="Add New Product"/>}/>
         </Route>
       </Route>
       <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
    </div>

       
  );
}

export default App;
