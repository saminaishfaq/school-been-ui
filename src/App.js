import React from 'react'
import NavBar from '../src/testing/NavBar'
import SideBar from '../src/testing/SideBar'
import CustomInput from './testing/Component/CustomInput';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function App() {
    return (

<div>
<NavBar />
<NavBar>
    <CustomInput />
</NavBar>


</div>

        // <Router>
        //   <Switch>
        //   <div>
        //       <Route path="/login">
        //       <Login />
        //       </Route>
        //     <Router>
          
        //     </Router>
        // </div>
        //   </Switch>
         
        // </Router>
       
    )
}

export default App
