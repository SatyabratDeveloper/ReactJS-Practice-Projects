import Login from "./components/Login";
import Profile from "./components/profile";
import UserContextProvider from "./context/userContextProvider";

function App() {
  return (
    // Step3: Wrap the components that use UserContext values with UserContextProvider
    <UserContextProvider>
      <h1>Login to see your name:</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
