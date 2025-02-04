import { baseApi } from '../../api/baseApi';

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    orderProduct: builder.mutation({
      query: (productData: any) => ({
        url: `/orders`,
        method: "POST",
        body: productData,
      }),
      invalidatesTags: ['product']
    }),
  }),
});

export const { useOrderProductMutation } = orderApi;