import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Dashboard } from './layout/DashboardLayout'
import Router from './Routes/Router'
import toast,{Toaster} from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Router />
      <Toaster position="top-right" reverseOrder={true} />
    </div>
  )
}

export default App
