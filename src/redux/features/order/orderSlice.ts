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
      query: () => ({
        url: "/orders",
        method: "GET"
      })
    }),
    getAllOrders: builder.query({
      query: () => ({
        url: "/orders/get-all-orders",
        method: "GET"
      })
    }),
    verifyOrder: builder.query({
      query: (order_id) => ({
        url: `/orders/verify-order`,
        params: { order_id },
        method: "PATCH",
      }),
    }),
  }),
});

export const { useOrderProductMutation, useVerifyOrderQuery, useGetOrdersQuery, useGetAllOrdersQuery} = orderApi;