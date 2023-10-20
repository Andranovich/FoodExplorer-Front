import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
// import { Addplate } from "../pages/Addplate";
import { Details } from "../pages/Details";
import { Plate } from "../pages/Plate";
import { SignUp } from "../pages/SignUp";
import { SignIn } from "../pages/SignIn";
import { HomeAdmin } from "../pages/HomeAdmin";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            {/* <Route path="/Addplate" element={<Addplate/>}/> */}
            <Route path="/Details/:id" element={<Details/>}/>
            <Route path="/Plate" element={<Plate/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
            <Route path="/SignIn" element={<SignIn/>}/>
            <Route path="/HomeAdmin" element={<HomeAdmin/>}/>
           
        </Routes>
    )
}