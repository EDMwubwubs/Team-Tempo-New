import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterAndLogin from "./RegisterAndLogin";
import App from "../App";
import ForgotPassword from "./ForgotPassword.js";

function PasswordLoginWithFirebase(){
    return(
            <div>
                <Routes>
                    <Route path="/" element={<RegisterAndLogin/>} />
                    <Route path="/App" element={<App/>}/>
                    <Route path="/reset" element={<ForgotPassword/>} />
                </Routes>
            </div>
    )
}
export default PasswordLoginWithFirebase;