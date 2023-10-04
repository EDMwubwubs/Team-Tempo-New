import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./styles.css"
import { BrowserRouter } from "react-router-dom"
import PasswordLoginWithFirebase from "./PasswordLoginWithFirebase/PasswordLoginWithFirebase"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PasswordLoginWithFirebase/>
    </BrowserRouter>
  </React.StrictMode>
)