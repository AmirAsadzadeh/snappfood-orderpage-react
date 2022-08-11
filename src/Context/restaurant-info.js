import React from "react";

const RestaurantInfo = React.createContext({
  restaurantName: "",
  restaurantRate: "",
  restaurantComments: [],
  restaurantCommentAmount: 0,
  restaurantMenu: {},
});

export default RestaurantInfo;
