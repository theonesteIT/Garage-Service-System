import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './home'
import Order from './order'
import Dashboard from './dashboard'
import UpdateOrder from './updateOrder'
function App(){
    
    return(
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}></Route>
                    <Route exact path="/order" element={<Order/>}></Route>
                    <Route exact path='/dashboard' element={<Dashboard/>}></Route>
                    <Route exact path='/updateOrder/:id' element={<UpdateOrder/>}></Route>
                </Routes>
            </Router>
        </div>
    )

}
export default App;