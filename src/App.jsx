import { BrowserRouter, Route, Routes } from "react-router-dom"
import Index from "./pages/Index.jsx"
import RunCovid from "./pages/RunCovid.jsx"
import "./assets/style.css"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Index/>} />
        <Route exact path='/runcovid' element={<RunCovid/>} />
        <Route path='*' element={<Index/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
