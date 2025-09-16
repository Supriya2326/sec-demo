import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

function F1(){
    return(<Router>
    <Routes>
        <Route path='/homes'element={<Home/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
    </Routes>
    </Router>)
}
export default F1;