import { Routes, Route } from 'react-router-dom'

import { Menu } from "../components/Menu"
import { Dashboard } from '../pages/Dashboard'
import { Customers } from '../pages/Customers'

export function MainRoute() {
  return (
    <div className="flex h-screen w-screen">
      <Menu />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/clientes" element={<Customers />} />
      </Routes>
    </div>
  )
}
