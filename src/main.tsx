import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DashboardPage from './pages/DashboardPage.tsx'
import NavBar from './components/Header/NavBar.tsx'
import Footer from './components/Footer/Footer.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import LoginPage from './pages/LoginPage.tsx'
import AiButton from './components/AI/AiButton.tsx'
import YourRoomsPage from './pages/YourRoomsPage.tsx'
import YourCoursesPage from './pages/YourCoursesPage.tsx'

const router = createBrowserRouter([{
  path: '/',
  element: <DashboardPage />,
}, {
  path: '/login',
  element: <LoginPage />,
}, {
  path: '/yourrooms',
  element: <YourRoomsPage />,
}, {
  path: '/yourcourses',
  element: <YourCoursesPage />,
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
