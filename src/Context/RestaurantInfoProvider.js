import React from "react";

import ResImg from "../Images/restaurantImage.jpg";
import RestaurantInfo from "./restaurant-info";

function RestaurantInfoProvider(props) {
  const restaurantInfo = {
    isOpen: true,

    restaurantImage: ResImg,

    restaurantName: "باماهاس (یوسف آباد)",

    restaurantRate: 4.5,

    restaurantComments: [],

    restaurantCommentAmount: 567,

    restaurantMenu: {
      mostWanted: {
        label: "پرطرفدارها",
        items: [
          {
            foodId: "0001",
            name: "ساندویچ مخصوص کوکتل آرژانتینی",
            openText:
              "کوکتل بخارپز ممتاز میکاییلیان، چیپس، پنیر، پیاز و جعفری، گوجه، خیارشور، سس مخصوص باماهاس، نان باگت، سرویس اضافه به انتخاب شما",
            image:
              "https://cdn.snappfood.ir/641x641/cdn/82/15/3/product_image/zoodfood/6130ef3aed2a4.jpg",
            foodRate: 4.6,
            types: [
              { id: "small", title: "کوچک", price: 84000 },
              { id: "one", title: "تک نفره", price: 215000 },
            ],
          },
          {
            foodId: "0002",
            name: "ساندویچ مخصوص کوکتل آرژانتینی",
            openText:
              "کوکتل بخارپز ممتاز میکاییلیان، چیپس، پنیر، پیاز و جعفری، گوجه، خیارشور، سس مخصوص باماهاس، نان باگت، سرویس اضافه به انتخاب شما",
            image:
              "https://cdn.snappfood.ir/641x641/cdn/82/15/3/product_image/zoodfood/6130ef3aed2a4.jpg",
            foodRate: 4.6,
            types: [
              { id: "small", title: "کوچک", price: 84000 },
              { id: "one", title: "تک نفره", price: 215000 },
            ],
          },
        ],
        id: 0,
        isActive: true,
      },

      // hotSandwiches: {
      //   label: "ساندویچ گرم",
      //   items: [],
      //   id: 1,
      //   isActive: false,
      // },

      // coldSandwiches: {
      //   label: "ساندویچ سرد",
      //   items: [],
      //   id: 2,
      //   isActive: false,
      // },

      // pasta: { label: "پاستا", items: [], id: 3, isActive: false },

      // salad: { label: "سالاد و پیش غذا", items: [], id: 4, isActive: false },

      // drinks: { label: "نوشیدنی", items: [], id: 5, isActive: false },
    },
  };
  return (
    <RestaurantInfo.Provider value={restaurantInfo}>
      {props.children}
    </RestaurantInfo.Provider>
  );
}

export default RestaurantInfoProvider;
