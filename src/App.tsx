
import './App.css'

import Router from './Routes/Router'
import {Toaster} from 'react-hot-toast'

function App() {
  

  return (
    <div>
      <Router />
      <Toaster position="top-right" reverseOrder={true} />
    </div>
  )
}

export default App
