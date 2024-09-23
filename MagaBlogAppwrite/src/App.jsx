import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [isLoding, setIsLoding] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) dispatch(login({ userData }));
        else dispatch(logout());
      })
      .catch((error) =>
        console.log("authService :: getCurrentUser() :: error", error)
      )
      .finally(() => setIsLoding(false));
  }, []);

  return !isLoding ? (
    <div className="h-screen bg-fuchsia-200">
      <Header />
      <main>Todo: <Outlet /></main>
      <Footer />
    </div>
  ) : (
    <div className="h-screen bg-fuchsia-200">
      <h1>Please Login</h1>
    </div>
  );
}

export default App;
