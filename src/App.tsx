import { Routes, Route } from "react-router-dom"

import { LoginRoute } from "./routes/login.route"
import { MainRoute } from "./routes/main.route"

import { useAuth } from "./providers/auth.provider"

import "./styles/global.css"

export function App() {
  const { isAuthenticaded } = useAuth()

  return isAuthenticaded ? <MainRoute /> : <LoginRoute />
}
