
import './App.css'
import { router } from './Routes/Routes.jsx'
import {
  RouterProvider,
} from "react-router-dom";

function App() {


  return (
    <div className=''>
     <div className='max-w-screen-xl mx-auto bg-gray-300 '>
      <RouterProvider router={router} />
    </div>
    </div>
  )
}

export default App
