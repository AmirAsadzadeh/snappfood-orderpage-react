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
              { id: "one", title: "یک نفره", price: 84000 },
              { id: "small", title: "کوچک", price: 215000 },
            ],
          },
          {
            foodId: "0002",
            name: "ساندویچ هیولا بیکن (سرد)",
            openText:
              "بیکن بره ۹۰% میکاییلیان، بیکن گوشت ۹۰% میکاییلیان، ژامبون مرغ ۹۰% میکاییلیان، چیپس، هالوپینو، پیاز و جعفری، گوجه، خیارشور، سس مخصوص باماهاس، نان باگت، سرویس اضافه به انتخاب شما",
            image:
              "	https://cdn.snappfood.ir/641x641/cdn/82/15/3/product_image/zoodfood/6129cc922c5ca.jpg",
            foodRate: 4.4,
            types: [
              { id: "one", title: "یک نفره", price: 84000 },
              { id: "small", title: "کوچک", price: 215000 },
            ],
          },
          {
            foodId: "0003",
            name: "ساندویچ مخلوط (سرد)",
            openText:
              "بیکن بره ۹۰% میکاییلیان، بیکن گوشت ۹۰% میکاییلیان، ژامبون مرغ ۹۰% میکاییلیان، ژامبون گوشت ۹۰%، پیاز و جعفری، گوجه، خیارشور، سس مخصوص باماهاس، نان باگت، سرویس اضافه به انتخاب شما",
            image:
              "https://cdn.snappfood.ir/641x641/cdn/82/15/3/product_image/zoodfood/61682686616c1.JPEG",
            foodRate: 4.3,
            types: [
              { id: "one", title: "یک نفره", price: 119000 },
              { id: "small", title: "کوچک", price: 88000 },
            ],
          },
          {
            foodId: "0004",
            name: "ساندویچ رست بیف",
            openText:
              "گوشت سفید ران گوساله ریش شده، پیاز و جعفری، گوجه، خیارشور، سس مخصوص باماهاس، نان باگت، سرویس اضافه به انتخاب شما",
            image:
              "	https://cdn.snappfood.ir/641x641/cdn/82/15/3/product_image/zoodfood/616826864ed60.JPEG",
            foodRate: 4.2,
            types: [
              { id: "small", title: "کوچک", price: 144000 },
              { id: "one", title: "یک نفره", price: 196000 },
            ],
          },
          {
            foodId: "0005",
            name: "ساندویچ کوکتل آرژانتینی",
            openText:
              "کوکتل بخارپز ممتاز میکاییلیان، پیاز و جعفری، گوجه، خیارشور، سس مخصوص باماهاس، نان باگت، سرویس اضافه به انتخاب شما",
            image:
              "https://cdn.snappfood.ir/641x641/cdn/82/15/3/product_image/zoodfood/6129cc91ce8d9.jpg",
            foodRate: 4.2,
            types: [
              { id: "one", title: "یک نفره", price: 98000 },
              { id: "small", title: "کوچک", price: 72000 },
            ],
          },
          {
            foodId: "0006",
            name: "ساندویچ ژامبون مرغ (سرد)",
            openText:
              "ژامبون مرغ ۹۰% میکاییلیان، پیاز و جعفری، گوجه، خیارشور، سس مخصوص باماهاس، نان باگت، سرویس اضافه به انتخاب شما",
            image:
              "https://cdn.snappfood.ir/641x641/cdn/82/15/3/product_image/zoodfood/6129cc923ae6c.jpg",
            foodRate: 4.5,
            types: [
              { id: "small", title: "کوچک", price: 79000 },
              { id: "one", title: "یک نفره", price: 108000 },
            ],
          },
          {
            foodId: "0007",
            name: "ساندویچ ژامبون مرغ ویژه (سرد)",
            openText:
              "ژامبون مرغ ۹۰% میکاییلیان، ژامبون مرغ و بیکن تکه ای، پیاز و جعفری، گوجه، خیارشور، سس مخصوص باماهاس، نان باگت، سرویس اضافه به انتخاب شما",
            image:
              "https://cdn.snappfood.ir/641x641/cdn/82/15/3/product_image/zoodfood/60ff0735bd24d.jpg",
            foodRate: 4.5,
            types: [
              { id: "کوچک", title: "", price: 89000 },
              { id: "یک نفره", title: "", price: 124000 },
            ],
          },
          {
            foodId: "0008",
            name: "ساندویچ شکارچیان نود و هشت",
            openText:
              "سوسیس چوریتسو، کاهو، گوجه، خیارشور، سس مخصوص باماهاس، نان باگت، سرویس اضافه به انتخاب شما",
            image:
              "	https://cdn.snappfood.ir/641x641/cdn/82/15/3/product_image/zoodfood/6129cc91e28ba.jpg",
            foodRate: 4.4,
            types: [{ id: "small", title: "کوچک", price: 162000 }],
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
