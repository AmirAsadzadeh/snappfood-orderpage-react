import "./App.css";
import React, { useState } from "react";

import Header from "./Components/Header/Header";
import AddressBar from "./Components/AddressBar/AddressBar";

import UserInfoProvider from "./Context/UserInfoProvider";
import RestaurantInfoProvider from "./Context/RestaurantInfoProvider";

function App() {
  return (
    <RestaurantInfoProvider>
      <UserInfoProvider>
        <Header />

        <AddressBar></AddressBar>

        {/* <MainContent>
        <AboutRestaurant></AboutRestaurant>

        <FoodLists></FoodLists>
      </MainContent>

      <CardBar>
        <TimeBar></TimeBar>

        <SenderName></SenderName>

        <Card></Card>
      </CardBar>

      <Footer></Footer> */}
      </UserInfoProvider>
    </RestaurantInfoProvider>
  );
}

export default App;
