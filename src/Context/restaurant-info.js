import React from "react";

const RestaurantInfo = React.createContext({
  isOpen: "",
  restaurantName: "",
  restaurantRate: "",
  restaurantComments: [],
  restaurantCommentAmount: 0,
  restaurantMenu: {},
});

export default RestaurantInfo;
