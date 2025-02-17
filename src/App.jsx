import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './home/page'
import LoginPage from './login/page'
import SignupPage from './signup/page'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Define route paths */}
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Signup" element={<SignupPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
