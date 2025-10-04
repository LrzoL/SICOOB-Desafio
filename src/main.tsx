import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DashboardPage from './pages/DashboardPage.tsx'
import NavBar from './components/NavBar.tsx'
import Footer from './components/Footer.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import LoginPage from './pages/LoginPage.tsx'
import SalasPage from './pages/SalasPage.tsx'
import CursosPage from './pages/CursosPage.tsx'
import AiButton from './components/AiButton.tsx'

const router = createBrowserRouter([{
  path: '/',
  element: <DashboardPage />,
}, {
  path: '/login',
  element: <LoginPage />,
}, {
  path: '/salas',
  element: <SalasPage />,
}, {
  path: '/cursos',
  element: <CursosPage />,
}]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavBar />
    <main>
          <RouterProvider router={router} />
          <AiButton />
    </main>
    <Footer />
  </StrictMode>,
)
