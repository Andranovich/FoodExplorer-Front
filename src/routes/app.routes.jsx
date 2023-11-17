import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { Plate } from "../pages/Plate";
import { SignUp } from "../pages/SignUp";
import { SignIn } from "../pages/SignIn";
import { EditPlate } from "../pages/EditPlate";
import { NewPlate } from "../pages/NewPlate";
import { MenuAdmin } from "../pages/MenuAdmin";
import { Menu } from "../pages/Menu";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Plate/:id/Edit" element={<EditPlate/>}/>
            <Route path="/NewPlate" element={<NewPlate/>}/>
            <Route path="/Details/:id" element={<Details/>}/>
            <Route path="/Plate/:id" element={<Plate/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
            <Route path="/SignIn" element={<SignIn/>}/>
            <Route path="/MenuAdmin" element={<MenuAdmin/>}/>
            <Route path="/Menu" element={<Menu/>}/>             
          
        </Routes>
    )
}