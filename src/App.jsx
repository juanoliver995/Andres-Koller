import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './Paginas/Index'
import Admin from './Paginas/Admin'
import LoginPage from './Paginas/LoginPage'
import DatesAdmin from './components/DatesAdmin'
import NewDate from './components/NewDate'
import DateAdmin from './components/DateAdmin'
import { DatesProvider } from './context/DatesProvider'
import EditDate from './components/EditDate'
function App() {
  return (
    <BrowserRouter>
      <DatesProvider>
        <Routes>
          <Route path='/'  element={<Index/>}></Route>
          <Route path='/login'  element={<LoginPage/>}></Route>
          <Route path='/admin' element={<Admin />}>
            <Route index element={<DatesAdmin />}/>
            <Route path='newdate' element={<NewDate />}/>
            <Route path=':id' element={<DateAdmin />}/>
            <Route path='editdate/:id' element={<EditDate />}/>
          </Route>
        </Routes>
      </DatesProvider>
    </BrowserRouter>
  )
}

export default App
