import { useState, createContext } from "react";

const UserContext = createContext()

const UserContextProvider = (props) => {
  const userContext = useState({})
  return <UserContext.Provider value={userContext}>{props.children}</UserContext.Provider>
}

export default UserContext
export {UserContextProvider}