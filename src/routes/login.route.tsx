import { Routes, Route } from 'react-router-dom'

import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import { NotFound } from '../pages/NotFound'

export function LoginRoute() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/registro" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
