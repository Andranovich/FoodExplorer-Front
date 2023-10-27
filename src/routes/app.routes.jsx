import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
// import { Addplate } from "../pages/Addplate";
import { Details } from "../pages/Details";
import { Plate } from "../pages/Plate";
import { SignUp } from "../pages/SignUp";
import { SignIn } from "../pages/SignIn";
import { EditPlate } from "../pages/EditPlate";
import { NewPlate } from "../pages/NewPlate";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/EditPlate" element={<EditPlate/>}/>
            <Route path="/NewPlate" element={<NewPlate/>}/>
            <Route path="/Details/:id" element={<Details/>}/>
            <Route path="/Plate" element={<Plate/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
            <Route path="/SignIn" element={<SignIn/>}/>           
        </Routes>
    )
}