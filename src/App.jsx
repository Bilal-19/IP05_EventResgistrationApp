import './App.css'
import Header from './Components/Header'
// import Option from './Components/Option'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NewEvent from './Form/NewEvent'
import AllEvents from './Components/AllEvents'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}></Route>
          <Route path='/register/new/event' element={<NewEvent />}></Route>
          <Route path='/view/all/events' element={<AllEvents />}></Route>
        </Routes>
      </BrowserRouter>

      {/* <Option /> */}
    </>
  )
}

export default App
