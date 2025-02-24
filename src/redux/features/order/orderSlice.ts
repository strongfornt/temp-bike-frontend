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
      query: (filter:any) => ({
        url: "/orders",
        method: "GET",
        params: filter
      }),
      providesTags: ['orders']
    }),
    getAllOrders: builder.query({
      query: (filter:any) => ({
        url: "/orders/get-all-orders",
        method: "GET",
        params:filter
      }),
      providesTags: ['orders']
    }),
    verifyOrder: builder.query({
      query: (order_id) => ({
        url: `/orders/verify-order`,
        params: { order_id },
        method: "PATCH",
      }),
    }),
    updateOrderStatus: builder.mutation({
      query: (updateData) => ({
        url: `/admin/update-order-status/${updateData?.orderId}`,
        method: "PATCH",
        body: {orderStatus: updateData?.key}
      }),
      invalidatesTags: ['orders']
    }),
    updateDeliveryDate: builder.mutation({
      query: (updateData) => ({
        url: `/admin/update-order-estimate-delivery-date/${updateData?.orderId}`,
        method: "PATCH",
        body: updateData
      }),
      invalidatesTags: ['orders']
    }),
  }),
});

export const { useOrderProductMutation, useVerifyOrderQuery, useGetOrdersQuery, useGetAllOrdersQuery, useUpdateDeliveryDateMutation, useUpdateOrderStatusMutation} = orderApi;