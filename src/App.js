import "./App.css";
import React from "react";

import Header from "./Components/Header/Header";
import AddressBar from "./Components/AddressBar/AddressBar";
import MainContent from "./Components/MainContent/MainContent";

import UserInfoProvider from "./Context/UserInfoProvider";
import RestaurantInfoProvider from "./Context/RestaurantInfoProvider";
import CartBar from "./Components/CartBar/CartBar";

function App() {
  return (
    <RestaurantInfoProvider>
      <UserInfoProvider>
        <Header />

        <AddressBar />

        <div className="container">
          <MainContent />

          <CartBar />

          {/* <CardBar>
            <TimeBar></TimeBar>

            <SenderName></SenderName>

            <Card></Card>
          </CardBar>

          <Footer></Footer> */}
        </div>
      </UserInfoProvider>
    </RestaurantInfoProvider>
  );
}

export default App;
