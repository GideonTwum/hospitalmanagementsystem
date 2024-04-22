import Image from "next/image";
import SideNav from "./components/SideNav";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";


export default function Home() {
  


  return (
    <main className="flex min-h-screen  bg-gray-100 ">
      <div>
          <Login />
      </div>
    </main>
  );
}
