import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "./pages/Layout.jsx";
import All from "./pages/All.jsx";
import Single from "./pages/Single.jsx";

function App() {

   const [countries, setCountries] = useState([])
   const [darkMode, setDarkMode] = useState(false)

   useEffect(() => {
      fetch('/data.json').then(d => d.json()).then(v => setCountries(v))
   }, [])

   useEffect(() => {
      if (darkMode) {
         document.documentElement.classList.add('dark')
      } else {
         document.documentElement.classList.remove('dark')
      }
   }, [darkMode])


  return (
     <BrowserRouter basename={'/World/'}>
        <Routes>
           <Route path={'/'} element={<Layout setDark={setDarkMode} />}>
              <Route path={'/'} element={<All countries={countries} />}/>
              <Route path={'/:country'} element={<Single countries={countries} />}/>
           </Route>
        </Routes>
     </BrowserRouter>
  )
}

export default App;