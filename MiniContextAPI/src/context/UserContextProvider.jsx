/* eslint-disable react/prop-types */
import { useState } from "react";
import UserContext from "./userContext";

// Step2: Creating UserContextProvider method
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    // These values will be available to the UserContextProvider child components
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
