import "./App.css";
import React from "react";

import Header from "./Components/Header/Header";
import AddressBar from "./Components/AddressBar/AddressBar";
import MainContent from "./Components/MainContent/MainContent";

import UserInfoProvider from "./Context/UserInfoProvider";
import RestaurantInfoProvider from "./Context/RestaurantInfoProvider";
import { Provider } from "react-redux";
import store from "./Store/store";

function App() {
  return (
    <Provider store={store}>
      <RestaurantInfoProvider>
        <UserInfoProvider>
          <Header />

          <AddressBar />

          {/* <div className="container"> */}
          <MainContent />

          {/* <CardBar>
            <TimeBar></TimeBar>

            <SenderName></SenderName>

            <Card></Card>
          </CardBar>

          <Footer></Footer> */}
          {/* </div> */}
        </UserInfoProvider>
      </RestaurantInfoProvider>
    </Provider>
  );
}

export default App;
