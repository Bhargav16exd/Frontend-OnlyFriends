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
      
      <Route path='/initiateLogin' element={<InitiateLogin/>}></Route>
      <Route path='/signup' element={<SignupPage/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/' element={<LandingPage/>}></Route>
      
       {/* Authorized Routes */}

      <Route element={<RequireAuth/>}>
        <Route path='/discover' element={<DiscoverPage/>}></Route>
        <Route path='/letter/write-letter/:name/:id' element={<WriteLettterPage/>}></Route>
        <Route path='/outbox' element={<OutboxPage/>}></Route>
        <Route path='/view-sent-letter/:id' element={<ViewSentLetterPage/>}></Route>
        <Route path='/Inbox' element={<InboxPage/>}></Route>
        <Route path='/view-recieved-letter/:id' element={<ViewRecievdLetterPage/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
      </Route>
    </Routes>
  )
}

export default App
