     import Home from './pages/Home'
     import About  from "./pages/About"
     import Signin from "./pages/Signin"
     import Signup from "./pages/Signup"
     import Dashboard from "./pages/Dashboard"
     import Project from './pages/Project'
     import Header from './components/Header'
     import Members from './pages/Members'
import {BrowserRouter as Router ,Routes,Route}   from "react-router-dom"
import Footercm from './components/Footer'
function App() {
  

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={< Home/>}/>
        <Route path="/about" element={< About/>}/>
        <Route path="/sign-in" element={< Signin/>}/>
        <Route path="/sign-up" element={< Signup/>}/>  
        <Route path="/dashboard" element={< Dashboard/>}/>
        <Route path="/members" element={< Members/>}/>

        <Route path="/projects" element={< Project/>}/>

        </Routes>
        {/* <Footercm/> */}
   </Router>
    
  )
}

export default App