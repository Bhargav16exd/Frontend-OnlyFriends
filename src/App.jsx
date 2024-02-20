import './App.css'
import DiscoverPage from './pages/DiscoverPage'
import  {Route, Routes} from "react-router-dom"
import InitiateLogin from './pages/InitiateSignup'
import SignupPage from './pages/Signup'
import RequireAuth from './components/RequireAuth'
import Login from './pages/Login'
import WriteLettterPage from './pages/WriteLetterPage'
import OutboxPage from './pages/OutboxPage'
import ViewSentLetterPage from './pages/ViewSentLetterPage'
import InboxPage from './pages/InboxPage'
import ViewRecievdLetterPage from './pages/ViewRecivedLetter'
import LandingPage from './pages/LandingPage'
import Profile from './pages/Profile'

function App() {


  return (
    
    <Routes>
      
      <Route path='/initiateLogin' element={<LandingPage/>}></Route>
      <Route path='/signup' element={<LandingPage/>}></Route>
      <Route path='/login' element={<LandingPage/>}></Route>
      <Route path='/' element={<LandingPage/>}></Route>
      


        <Route path='/discover' element={<LandingPage/>}></Route>
        <Route path='/letter/write-letter/:name/:id' element={<LandingPage/>}></Route>
        <Route path='/outbox' element={<LandingPage/>}></Route>
        <Route path='/view-sent-letter/:id' element={<LandingPage/>}></Route>
        <Route path='/Inbox' element={<LandingPage/>}></Route>
        <Route path='/view-recieved-letter/:id' element={<LandingPage/>}></Route>
        <Route path='/profile' element={<LandingPage/>}></Route>

    </Routes>
  )
}

export default App
