import React from "react";

const UserInfo = React.createContext({
  isLoggedIn: false,
  userShoppingCard: [],
  userAddress: "",
});

export default UserInfo;
