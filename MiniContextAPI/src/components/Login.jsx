import { useContext, useState } from "react";
import UserContext from "../context/userContext";

// Step4: Get and Set the values
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Getting setUser from UserContext
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Setting values of setUser
    if (username !== "" && password !== "") {
      setUser({ username, password });
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
