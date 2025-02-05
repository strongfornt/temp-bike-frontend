import { baseApi } from '../../api/baseApi';

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    orderProduct: builder.mutation({
      query: (productData: any) => ({
        url: `/orders`,
        method: "POST",
        body: productData,
      }),
    }),
    getOrders: builder.query({
      query: () => "/orders",
    }),
    verifyOrder: builder.query({
      query: (order_id) => ({
        url: `/orders/verify-order/${order_id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useOrderProductMutation, useVerifyOrderQuery, useGetOrdersQuery} = orderApi;