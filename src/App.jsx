import './App.css'
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router'
import Home from './modules/home'
import About from './modules/about'
import Contact from './modules/contact'
import PrivacyPolicy from './modules/privacyPolicy'
import Header from './components/header'
import Blog from './modules/blog'
import BlogDetails from './modules/blog/blogDetails'
import Layout from './components/layout'
import Signup from './modules/register'

function App() {
  const routeList = [
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/dashboard', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/contact', element: <Contact /> },
        { path: '/blog', element: <Blog /> },
        { path: '/blog/blog-details/:slug/:color', element: <BlogDetails /> },
        { path: '/privacy-policy', element: <PrivacyPolicy /> },
      ]
    },
    { path: '/login', element: <div>login</div> },
    { path: '/register', element: <Signup /> }
  ]
  const router = createBrowserRouter(routeList)

  return (
    <div className="app">
      {/* <Routes>
        {routeList.map(el => <Route path={el.path} element={el.element} />)}
      </Routes> */}
      <RouterProvider router={router} />
    </div>
  )
}

export default App
