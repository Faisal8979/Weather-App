import React from 'react'
import Weather from './components/Weather';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
<ToastContainer
position="top-center"
autoClose={2000}
hideProgressBar={true}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    <div className='app'>
        <Weather/>
   </div>
    </>
  )
}

export default App;