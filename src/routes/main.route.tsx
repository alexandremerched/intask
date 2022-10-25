import { Routes, Route } from 'react-router-dom'

import { Menu } from "../components/Menu"
import { Home } from '../pages/Home'
import { Customers } from '../pages/Customers'

export function MainRoute() {
  return (
    <div className="flex h-screen w-screen">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clientes" element={<Customers />} />
      </Routes>
    </div>
  )
}
