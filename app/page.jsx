import Image from "next/image";
import Login from "./components/Login";



export default function Home() {
  return (
    <main className="dark flex min-h-screen items-center justify-center body">
      <div>
          <Login />
      </div>
    </main>
  );
}
