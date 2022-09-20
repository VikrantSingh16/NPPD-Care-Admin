import { QuerySnapshot } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { DoctorComponent } from "./Component/DoctorComponent";
import {ClientComponent} from "./Component/ClientComponent"
import {TrainerComponent} from "./Component/TrainerComponent"
import { Home } from "./Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import firebase from "./firebase";
import { InternComponent } from "./Component/InternComponent";

function App() {

  return (
   <>
   <BrowserRouter>
   <Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/DoctorComponent" element={<DoctorComponent/>}></Route>
<Route path="/ClientComponent" element={<ClientComponent/>}></Route>
<Route path="/InternComponent" element={<InternComponent/>}></Route>
<Route path="/TrainerComponent" element={<TrainerComponent/>}></Route>
   </Routes>
   </BrowserRouter>
   </>
  )
  
}

export default App;
