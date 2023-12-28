import Header from "./Header.jsx";
import { Outlet } from "react-router-dom";

function Layout ({setDark}) {

   return (
      <>
         <Header setDark={setDark}></Header>
         <Outlet />
      </>
   )
}

export default Layout;