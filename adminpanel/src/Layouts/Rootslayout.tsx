import { Outlet } from "react-router-dom";
import Sidebar from "../Component/Sidebar";


export default function RootsLayout() {
  return (
    <>
    <Sidebar/>
      <Outlet/>
    </>
  )
}
