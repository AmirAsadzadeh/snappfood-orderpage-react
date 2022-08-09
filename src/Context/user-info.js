import React from "react";

const UserInfo = React.createContext({
  userName: "",
  isLoggedIn: false,
  userShoppingCard: [],
  userAddress: "",
});

export default UserInfo;
