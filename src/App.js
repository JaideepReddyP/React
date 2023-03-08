import './App.css'
import {Routes, Route, Link} from 'react-router-dom'

import Btn from "./components/Btn";
import RegisterForm from "./components/RegisterForm";

function App() {
    return (
        <div>
        <nav>
            <Link to="/button" className="nav-item">Button</Link>
            <Link to='/form' className='nav-item'>Form</Link>
        </nav>
            <Routes>
                <Route path='/button' element={<Btn/>}/>
                <Route path='/form' element={<RegisterForm/>}/>
            </Routes>
        </div>
        
    )
}

export default App;
