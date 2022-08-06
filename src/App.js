import "./App.css";
import React, { useState } from "react";
import UserInfo from "./Context/user-info";
import Header from "./Components/Header/Header";

function App() {
  const [userInfo] = useState({
    isLoggedIn: false,
    userShoppingCard: [],
    userAddress: "ولیعصر، ولی عصر، فلسطین، برادران غفاری",
  });

  return (
    <UserInfo.Provider value={userInfo}>
      <Header />

      {/* <AddressBar></AddressBar>

      <MainContent>
        <AboutRestaurant></AboutRestaurant>

        <FoodLists></FoodLists>
      </MainContent>

      <CardBar>
        <TimeBar></TimeBar>

        <SenderName></SenderName>

        <Card></Card>
      </CardBar>

      <Footer></Footer> */}
    </UserInfo.Provider>
  );
}

export default App;
