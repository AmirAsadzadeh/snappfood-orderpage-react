import React, { useState } from "react";

import UserInfo from "./user-info";

function UserInfoProvider(props) {
  const [userInfo] = useState({
    isLoggedIn: false,
    userAddress: "ولیعصر، ولی عصر، فلسطین، برادران غفاری",
  });

  return (
    <UserInfo.Provider value={userInfo}>{props.children}</UserInfo.Provider>
  );
}

export default UserInfoProvider;
