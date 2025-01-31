import { baseApi } from '../../api/baseApi';

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: '/products',
        method: 'GET',
      }),
    }),
    addProduct: builder.mutation({
      query: (productData: any) => ({
        url: `/products`,
        method: "POST",
        body: productData,
      }),
    })
  }),
});

export const { useAddProductMutation, useGetProductsQuery} = productApi;