import { configureStore, createSlice } from "@reduxjs/toolkit";

const TAX = 0.09;

const orderItemIdGenerator = function (foodId, foodType, foodSpecials) {
  const orderId = [foodId, foodType];

  const specialsArr = Object.keys(foodSpecials);

  specialsArr.forEach((specialItem) => orderId.push(specialItem));

  return orderId.join("");
};

const cartInitialState = {
  items: {},
  totalCounts: 0,
  totalPrice: 0,
  totalDiscount: 0,
  totalTax: 0,
  totalProfit: 0,
  totalPay: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addToCart: (state, action) => {
      const orderData = {
        ...action.payload.foodData,
        specials: action.payload.specials,
      };

      const orderItemId = orderItemIdGenerator(
        orderData.id,
        orderData.typeId,
        orderData.specials
      );

      const foundedOrder = state.items[orderItemId];

      if (!foundedOrder) {
        const specialItemsTotalPrice = Object.values(orderData.specials).reduce(
          (acc, cur) => acc + cur[1],
          0
        );

        state.items[orderItemId] = {
          orderItemCount: 1,

          orderFoodName: `${orderData.name} ${orderData.foodType}`,

          orderSpecialItems: Object.values(orderData.specials),

          orderFoodDiscountPercentage: orderData.discount,

          orderItemOriginalPrice:
            orderData.originalPrice + specialItemsTotalPrice,

          orderItemDiscountedPrice:
            orderData.discountedPrice + specialItemsTotalPrice,
        };

        state.totalCounts++;

        state.totalPrice += state.items[orderItemId].orderItemOriginalPrice;

        state.totalDiscount +=
          (orderData.originalPrice * orderData.discount) / 100;

        state.totalTax +=
          state.items[orderItemId].orderItemDiscountedPrice * TAX;

        state.totalProfit += state.totalDiscount - state.totalTax;

        state.totalPay =
          state.totalPrice - state.totalDiscount + state.totalTax;
      }

      if (foundedOrder) {
        console.log("there is only one");

        foundedOrder.orderItemCount++;

        foundedOrder.orderItemOriginalPrice +=
          foundedOrder.orderItemOriginalPrice /
          (foundedOrder.orderItemCount - 1);

        foundedOrder.orderItemDiscountedPrice +=
          foundedOrder.orderItemDiscountedPrice /
          (foundedOrder.orderItemCount - 1);

        state.totalCounts++;

        state.totalPrice +=
          state.items[orderItemId].orderItemOriginalPrice /
          state.items[orderItemId].orderItemCount;

        state.totalDiscount +=
          (orderData.originalPrice * orderData.discount) / 100;

        state.totalTax +=
          (state.items[orderItemId].orderItemDiscountedPrice /
            state.items[orderItemId].orderItemCount) *
          TAX;

        state.totalProfit += state.totalDiscount - state.totalTax;

        state.totalPay =
          state.totalPrice - state.totalDiscount + state.totalTax;
      }
    },

    removeFromCart: (state, action) => {
      const orderData = {
        ...action.payload.foodData,
        specials: action.payload.specials,
      };

      const orderItemId = orderItemIdGenerator(
        orderData.id,
        orderData.typeId,
        orderData.specials
      );

      const foundedOrder = state.items[orderItemId];

      if (foundedOrder.orderItemCount === 1) {
      }

      if (foundedOrder.orderItemCount > 1) {
        foundedOrder.orderItemCount--;

        foundedOrder.orderItemOriginalPrice -=
          foundedOrder.orderItemOriginalPrice /
          (foundedOrder.orderItemCount + 1);

        foundedOrder.orderItemDiscountedPrice -=
          foundedOrder.orderItemDiscountedPrice /
          (foundedOrder.orderItemCount + 1);

        state.totalCounts--;

        state.totalPrice -=
          state.items[orderItemId].orderItemOriginalPrice /
          state.items[orderItemId].orderItemCount;

        state.totalDiscount -=
          (orderData.originalPrice * orderData.discount) / 100;

        state.totalTax -=
          (state.items[orderItemId].orderItemDiscountedPrice /
            state.items[orderItemId].orderItemCount) *
          TAX;

        state.totalProfit -= state.totalDiscount - state.totalTax;

        state.totalPay =
          state.totalPrice - state.totalDiscount + state.totalTax;
      }
    },
    clearAll: (state) => {
      state.items = {};
      state.totalCounts = 0;
      state.totalPrice = 0;
      state.totalDiscount = 0;
      state.totalTax = 0;
      state.totalProfit = 0;
      state.totalPay = 0;
    },
  },
});

const store = configureStore({
  reducer: cartSlice.reducer,
});

export const cartActions = cartSlice.actions;

export default store;
