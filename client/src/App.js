import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar/Index'
import Home from './Pages/Home/Index'
import NFTAddPage from './Pages/NFTAddPage/Index'
import AddUserPage from './Pages/AddPage/Index'
import Details from './Pages/Details/Index'
import Footer from "./Components/Footer/Index"
function App() {
  return (
    <BrowserRouter>

    <Navbar/>
    <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"/NFTAddPage"} element={<NFTAddPage/>}/>
      <Route path={"/AddUserPage"} element={<AddUserPage/>}/>
      <Route path={"/Details/:id"} element={<Details/>}/>
    </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
