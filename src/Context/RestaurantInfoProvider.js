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

      hotSandwiches: {
        label: "ساندویچ گرم",
        items: [
          {
            foodId: "0001",
            name: "ساندویچ کوکتل آرژانتینی",
            openText:
              "کوکتل بخارپز ممتاز میکاییلیان، پیاز و جعفری، گوجه، خیارشور، سس مخصوص باماهاس، نان باگت، سرویس اضافه به انتخاب شما",
            image:
              "	https://cdn.snappfood.ir/641x641/cdn/82/15/3/product_image/zoodfood/6129cc91d467f.jpg",
            foodRate: 4.5,
            types: [
              { id: "small", title: "کوچک", price: 72000 },
              { id: "one", title: "یک نفره", price: 98000 },
            ],
          },
          {
            foodId: "0002",
            name: "ساندویچ مخصوص کوکتل آرژانتینی",
            openText:
              "کوکتل بخارپز ممتاز میکاییلیان، چیپس، پنیر، پیاز و جعفری، گوجه، خیارشور، سس مخصوص باماهاس، نان باگت، سرویس اضافه به انتخاب شما",
            image:
              "https://cdn.snappfood.ir/641x641/cdn/82/15/3/product_image/zoodfood/6130ef3aed2a4.jpg",
            foodRate: 4.5,
            types: [
              { id: "small", title: "کوچک", price: 84000 },
              { id: "one", title: "یک نفره", price: 116000 },
            ],
          },
          {
            foodId: "0003",
            name: "ساندویچ شکارچیان نود و هشت",
            openText:
              "سوسیس چوریتسو، کاهو، گوجه، خیارشور، سس مخصوص باماهاس، نان باگت، سرویس اضافه به انتخاب شما",
            image:
              "	https://cdn.snappfood.ir/641x641/cdn/82/15/3/product_image/zoodfood/6129cc91e28ba.jpg",
            foodRate: 4.1,
            types: [
              { id: "small", title: "کوچک", price: 118000 },
              { id: "one", title: "یک نفره", price: 162000 },
            ],
          },
          {
            foodId: "0004",
            name: "ساندویچ شکارچیان نود و هشت مخصوص",
            openText:
              "سوسیس چوریتسو، چیپس، پنیر مخصوص، کاهو، گوجه، خیارشور، سس مخصوص باماهاس، نان باگت، سرویس اضافه به انتخاب شما",
            image:
              "	https://cdn.snappfood.ir/641x641/cdn/82/15/3/product_image/zoodfood/6129cc91ed3d7.jpg",
            foodRate: 4.4,
            types: [
              { id: "small", title: "کوچک", price: 107000 },
              { id: "one", title: "یک نفره", price: 179000 },
            ],
          },
          {
            foodId: "0005",
            name: "ساندویچ شکارچیان نود و هشت",
            openText:
              "سوسیس چوریتسو، کاهو، گوجه، خیارشور، سس مخصوص باماهاس، نان باگت، سرویس اضافه به انتخاب شما",
            image:
              "https://cdn.snappfood.ir/641x641/cdn/82/15/3/product_image/zoodfood/6129cc91e28ba.jpg",
            foodRate: 4.1,
            types: [
              { id: "small", title: "کوچک", price: 118000 },
              { id: "one", title: "یک نفره", price: 162000 },
            ],
          },
        ],
        id: 1,
        isActive: false,
      },

      coldSandwiches: {
        label: "ساندویچ سرد",
        items: [
          {
            foodId: "0006",
            name: "ساندویچ وجیتاس یک نفره (سرد)",
            openText:
              "سیب زمینی، سبزیجات معطر، چیپس، پنیر، پیاز و جعفری، گوجه، خیارشور، فلفل هالوپینو، سس مخصوص باماهاس، نان باگت، سرویس اضافه به انتخاب شما",
            image:
              "https://cdn.snappfood.ir/641x641/cdn/82/15/3/product_image/zoodfood/60ff0735c16fa.jpg",
            foodRate: 4.6,
            types: [{ id: "small", title: "", price: 69000 }],
          },
          {
            foodId: "0007",
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
            foodId: "0008",
            name: "ساندویچ ژامبون مرغ ویژه (سرد)",
            openText:
              "ژامبون مرغ ۹۰% میکاییلیان، ژامبون مرغ و بیکن تکه ای، پیاز و جعفری، گوجه، خیارشور، سس مخصوص باماهاس، نان باگت، سرویس اضافه به انتخاب شما",
            image:
              "	https://cdn.snappfood.ir/641x641/cdn/82/15/3/product_image/zoodfood/60ff0735b7d8b.jpg",
            foodRate: 4.5,
            types: [
              { id: "small", title: "کوچک", price: 89000 },
              { id: "one", title: "یک نفره", price: 124000 },
            ],
          },
          {
            foodId: "0009",
            name: "ساندویچ مخلوط (سرد)",
            openText:
              "بیکن بره ۹۰% میکاییلیان، بیکن گوشت ۹۰% میکاییلیان، ژامبون مرغ ۹۰% میکاییلیان، ژامبون گوشت ۹۰%، پیاز و جعفری، گوجه، خیارشور، سس مخصوص باماهاس، نان باگت، سرویس اضافه به انتخاب شما",
            image:
              "https://cdn.snappfood.ir/641x641/cdn/82/15/3/product_image/zoodfood/61682686616c1.JPEG",
            foodRate: 4.6,
            types: [
              { id: "small", title: "کوچک", price: 88000 },
              { id: "one", title: "یک نفره", price: 119000 },
            ],
          },
          {
            foodId: "0010",
            name: "ساندویچ بیکن باماهاس (سرد)",
            openText:
              "بیکن بره ۹۰% میکاییلیان، بیکن گوشت ۹۰% میکاییلیان، پیاز و جعفری، گوجه، خیارشور، سس مخصوص باماهاس، نان باگت، سرویس اضافه به انتخاب شما",
            image:
              "	https://cdn.snappfood.ir/641x641/cdn/82/15/3/product_image/zoodfood/6130ef3b050b2.jpg",
            foodRate: 4.5,
            types: [
              { id: "small", title: "کوچک", price: 104000 },
              { id: "one", title: "یک نفره", price: 139000 },
            ],
          },
          {
            foodId: "0011",
            name: "ساندویچ بیکن مخصوص باهاماس (سرد)",
            openText:
              "بیکن بره ۹۰% میکاییلیان، بیکن گوشت ۹۰% میکاییلیان، چیپس، پیاز و جعفری، گوجه، خیارشور، سس مخصوص باماهاس، نان باگت، سرویس اضافه به انتخاب شما",
            image:
              "https://cdn.snappfood.ir/641x641/cdn/82/15/3/product_image/zoodfood/6129cc921a2df.jpg",
            foodRate: 4.4,
            types: [
              { id: "small", title: "کوچک", price: 129000 },
              { id: "one", title: "یک نفره", price: 176000 },
            ],
          },
          {
            foodId: "0012",
            name: "ساندویچ هالوچیز کن (سرد)",
            openText:
              "بیکن بره ۹۰% میکاییلیان، بیکن گوشت ۹۰% میکاییلیان، پنیر مخصوص، هالوپینو، پیاز و جعفری، گوجه، خیارشور، سس مخصوص باماهاس، نان باگت، سرویس اضافه به انتخاب شما",
            image:
              "	https://cdn.snappfood.ir/641x641/cdn/82/15/3/product_image/zoodfood/6129cc9224428.jpg",
            foodRate: 4.0,
            types: [
              { id: "small", title: "کوچک", price: 109000 },
              { id: "one", title: "یک نفره", price: 149000 },
            ],
          },
          {
            foodId: "0013",
            name: "ساندویچ هیولا بیکن (سرد)",
            openText:
              "بیکن بره ۹۰% میکاییلیان، بیکن گوشت ۹۰% میکاییلیان، ژامبون مرغ ۹۰% میکاییلیان، چیپس، هالوپینو، پیاز و جعفری، گوجه، خیارشور، سس مخصوص باماهاس، نان باگت، سرویس اضافه به انتخاب شما",
            image:
              "	https://cdn.snappfood.ir/641x641/cdn/82/15/3/product_image/zoodfood/6129cc922c5ca.jpg",
            foodRate: 4.5,
            types: [
              { id: "small", title: "کوچک", price: 159000 },
              { id: "one", title: "یک نفره", price: 218000 },
            ],
          },
        ],
        id: 2,
        isActive: false,
      },

      pasta: {
        label: "پاستا",
        items: [
          {
            foodId: "0014",
            name: "پاستا با سس آلفردو",
            openText:
              "پاستا، فیله مرغ طعم دار شده، سس آلفردو، سرویس اضافه به انتخاب شما",
            image:
              "https://cdn.snappfood.ir/641x641/cdn/82/15/3/product_image/zoodfood/62bfdc5734af1.jpg",
            foodRate: 3.6,
            types: [
              { id: "small", title: "کوچک", price: 86000 },
              { id: "one", title: "یک نفره", price: 129000 },
            ],
          },
        ],
        id: 3,
        isActive: false,
      },

      salad: {
        label: "سالاد و پیش غذا",
        items: [
          {
            foodId: "0015",
            name: "سالاد سوییسی",
            openText:
              "سیب زمینی، ماست، پیازچه، خیارشور، سس مخصوص باماهاس، دست ساز (یک نفره)",
            image:
              "https://cdn.snappfood.ir/641x641/cdn/82/15/3/product_image/zoodfood/62cbf1767a80b.jpg",
            foodRate: 4.4,
            types: [{ id: "one", title: "", price: 18000 }],
          },
          {
            foodId: "0016",
            name: "ترشی تند هالو",
            openText: "فلفل هالوپینو، ادویه مخصوص باماهاس، دست ساز (یک نفره)",
            image:
              "https://cdn.snappfood.ir/641x641/cdn/82/15/3/product_image/zoodfood/60ff0735cafcf.jpg",
            foodRate: 4.5,
            types: [{ id: "one", title: "", price: 10000 }],
          },
        ],
        id: 4,
        isActive: false,
      },

      drinks: {
        label: "نوشیدنی",
        items: [
          {
            foodId: "0017",
            name: "نوشابه شیشه ای",
            openText: "۲۵۰ میلی لیتر",
            image:
              "https://cdn.snappfood.ir/641x641/cdn/82/15/3/product_image/zoodfood/62bfdc17c982d.jpg",
            foodRate: 4.1,
            types: [
              { id: "coca", title: "کوکاکولا", price: 9500 },
              { id: "fanta", title: "فانتا پرتقالی", price: 9500 },
              { id: "sprite", title: "اسپرایت", price: 9500 },
            ],
          },
          {
            foodId: "0018",
            name: "نوشابه قوطی",
            openText: "۳۳۰ میلی لیتر  ",
            image:
              "https://cdn.snappfood.ir/641x641/cdn/82/15/3/product_image/zoodfood/62bfdc180d3ce.jpg",
            foodRate: 4.3,
            types: [
              { id: "coca", title: "کوکاکولا", price: 10000 },
              { id: "fanta", title: "فانتا پرتقالی", price: 10000 },
              { id: "sprite", title: "اسپرایت", price: 10000 },
            ],
          },
          {
            foodId: "0019",
            name: "آب معدنی کوچک اکساب",
            openText: "۳۰۰ میلی لیتر",
            image:
              "https://cdn.snappfood.ir/641x641/cdn/82/15/3/product_image/zoodfood/60ff079973a62.jpg",
            foodRate: 4.0,
            types: [{ id: "", title: "", price: null }],
          },
        ],
        id: 5,
        isActive: false,
      },
    },
  };
  return (
    <RestaurantInfo.Provider value={restaurantInfo}>
      {props.children}
    </RestaurantInfo.Provider>
  );
}

export default RestaurantInfoProvider;
