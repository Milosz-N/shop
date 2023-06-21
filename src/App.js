import logo from './logo.svg';
import './App.css';
import "../src/components/category-item/category-item.scss"
import {Routes, Route, Outlet} from 'react-router-dom';
import Home from './components/routes/Home';
import Navigation from './components/routes/navigation/Navigation';
function App() {
const Shop = () =>{
  return (
  <div
  style={{width: `100%`}}
  >
  <h1>shop</h1>

  </div>
  )
} 


  return (
   <Routes>
        <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}>

</Route>
<Route path='shop' element={<Shop/>}/>
          </Route>

   

   </Routes>
  );
}

export default App;
