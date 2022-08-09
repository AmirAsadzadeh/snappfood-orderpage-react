import classes from "./UserAddress.module.css";

import React, { useContext } from "react";
import UserInfo from "../../Context/user-info";

function UserAdress(props) {
  const { userAddress, addressClickHandler } = useContext(UserInfo);
  return (
    <div className={`${classes["user-addrss-container"]} ${props.className.userAddress}`}>
      <svg
        className={classes["map-marker"]}
        width="23px"
        height="23px"
        viewBox="0 0 18 18"
        fill="#D1D2D2"
      >
        <path d="M3.22582 9.83268H1.50008C1.03984 9.83268 0.666748 9.45959 0.666748 8.99935C0.666748 8.53911 1.03984 8.16602 1.50008 8.16602H3.22582C3.59125 5.61127 5.61201 3.59052 8.16675 3.22509V1.49935C8.16675 1.03911 8.53984 0.666016 9.00008 0.666016C9.46032 0.666016 9.83342 1.03911 9.83342 1.49935V3.22509C12.3882 3.59052 14.4089 5.61127 14.7743 8.16602H16.5001C16.9603 8.16602 17.3334 8.53911 17.3334 8.99935C17.3334 9.45959 16.9603 9.83268 16.5001 9.83268H14.7743C14.4089 12.3874 12.3882 14.4082 9.83342 14.7736V16.4993C9.83342 16.9596 9.46032 17.3327 9.00008 17.3327C8.53984 17.3327 8.16675 16.9596 8.16675 16.4993V14.7736C5.61201 14.4082 3.59125 12.3874 3.22582 9.83268ZM9.00008 13.166C11.3013 13.166 13.1667 11.3005 13.1667 8.99935C13.1667 6.69816 11.3013 4.83268 9.00008 4.83268C6.69889 4.83268 4.83342 6.69816 4.83342 8.99935C4.83342 11.3005 6.69889 13.166 9.00008 13.166ZM9.00008 10.666C8.07961 10.666 7.33342 9.91982 7.33342 8.99935C7.33342 8.07887 8.07961 7.33268 9.00008 7.33268C9.92056 7.33268 10.6667 8.07887 10.6667 8.99935C10.6667 9.91982 9.92056 10.666 9.00008 10.666Z"></path>
      </svg>

      <div className={classes.address}>
        <p className={classes["address-label"]}>آدرس انتخابی</p>
        <p className={classes["address-text"]} onClick={addressClickHandler}>
          {userAddress}
        </p>
      </div>
    </div>
  );
}

export default UserAdress;
