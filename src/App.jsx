import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Art from './pages/Art'
import Radio from './pages/Radio'
import About from './pages/About'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="art" element={<Art />} />
        <Route path="radio" element={<Radio />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  )
}

export default App
