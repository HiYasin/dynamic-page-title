import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { Helmet } from 'react-helmet-async'

function App() {

  return (
    <>
    <Helmet>
      <title>Home</title>
    </Helmet>
      <Navbar />
      <Outlet></Outlet>
        {/* Jekhane route gula change korte cao */}
    </>
  )
}

export default App
