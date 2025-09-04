import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-mainBg">
        <NavBar />
        <main><Outlet/></main>
    </div>
  )
}

export default Layout
