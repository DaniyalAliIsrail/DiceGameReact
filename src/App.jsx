import { Route, Routes } from "react-router-dom"
import Startgame from "./components/startgame"
import Gameplay from "./components/Gameplay";
import Pagenotfound from "./components/Pagenotfound";
function App() {
  return (
    <>
  <Routes>
   <Route index element={<Startgame />} />
   <Route path="/gameplay" element={<Gameplay/>} />
   <Route path="*" element={<Pagenotfound/>} />
  </Routes>
    </>
  )
}

export default App
