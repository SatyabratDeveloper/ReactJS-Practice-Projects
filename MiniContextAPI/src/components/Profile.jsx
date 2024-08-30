import { useContext } from "react";
import UserContext from "../context/userContext";

// Step5: Use values of UserContext
const Profile = () => {
  const { user } = useContext(UserContext);
  
  if (!user) return <h1>Please Login</h1>
  return <h1>Welcome, {user.username}</h1>
};
export default Profile;
