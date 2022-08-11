import React from "react";

import RestaurantInfo from "./restaurant-info";

function RestaurantInfoProvider(props) {
  const restaurantInfo = {
    restaurantName: "باهاماس (یوسف آباد)",
    restaurantRate: 4.5,
    restaurantComments: [],
    restaurantCommentAmount: 567,
    restaurantMenu: {
      mostWanted: { label: "پرطرفدارها", items: [] },
      hotSandwiches: { label: "ساندویچ گرم", items: [] },
      coldSandwiches: { label: "ساندویچ سرد", items: [] },
      pasta: { label: "پاستا", items: [] },
      salad: { label: "سالاد و پیش غذا", items: [] },
      drinks: { label: "نوشیدنی", items: [] },
    },
  };
  return (
    <RestaurantInfo.Provider value={restaurantInfo}>
      {props.children}
    </RestaurantInfo.Provider>
  );
}

export default RestaurantInfoProvider;
