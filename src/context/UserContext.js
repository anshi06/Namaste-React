//Assume global kind of object in react, can be accessed anywhere.

import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default User",
});

export default UserContext;
