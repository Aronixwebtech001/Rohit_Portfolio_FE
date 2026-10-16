import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col w-full max-w-full overflow-x-clip">
      <Navbar />
      <main className="flex-1 w-full max-w-full overflow-x-clip">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
