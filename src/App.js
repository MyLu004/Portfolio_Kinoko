import React from 'react';


import { NavBar } from './component';
import {Home,Project, Skill} from "./container"

import './App.css';

const App = () => (
  <div>
    <NavBar/>
    <Home/>
    <Project/>
    <Skill/>
    {/* <Contact/> */}
    
  </div>
);

export default App;