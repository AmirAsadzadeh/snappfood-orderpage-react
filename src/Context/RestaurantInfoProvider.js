import React from "react";

import ResImg from "../Images/restaurantImage.jpg";
import RestaurantInfo from "./restaurant-info";

function RestaurantInfoProvider(props) {
  const restaurantInfo = {
    restaurantImage: ResImg,
    restaurantName: "باماهاس (یوسف آباد)",
    restaurantRate: 4.5,
    restaurantComments: [],
    restaurantCommentAmount: 567,
    restaurantMenu: {
      mostWanted: { label: "پرطرفدارها", items: [], id: 0, isActive: true },
      hotSandwiches: {
        label: "ساندویچ گرم",
        items: [],
        id: 1,
        isActive: false,
      },
      coldSandwiches: {
        label: "ساندویچ سرد",
        items: [],
        id: 2,
        isActive: false,
      },
      pasta: { label: "پاستا", items: [], id: 3, isActive: false },
      salad: { label: "سالاد و پیش غذا", items: [], id: 4, isActive: false },
      drinks: { label: "نوشیدنی", items: [], id: 5, isActive: false },
    },
  };
  return (
    <RestaurantInfo.Provider value={restaurantInfo}>
      {props.children}
    </RestaurantInfo.Provider>
  );
}

export default RestaurantInfoProvider;
