import { baseApi } from '../../api/baseApi';

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: '/products',
        method: 'GET',
      }),
      providesTags: ['product']
    }),
    getProductDetails: builder.query({
      query: ({ id }: any) => ({
        url: `/products/${id}`,
        method: 'GET',
      }),
    }),
    addProduct: builder.mutation({
      query: (productData: any) => ({
        url: `/products`,
        method: "POST",
        body: productData,
      }),
      invalidatesTags: ['product']
    }),
    deleteProduct: builder.mutation({
      query: ({ id }: any) => ({
        url: `/products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['product']
    }),
    updateProduct: builder.mutation({
      query: ({ formData, id }: { formData: any, id: string }) => ({
        url: `/products/${id}`,
        method: 'PATCH',
        body: formData
      }),
      invalidatesTags: ['product']
    })
  }),
});

export const { useAddProductMutation, useGetProductsQuery, useGetProductDetailsQuery, useDeleteProductMutation, useUpdateProductMutation } = productApi;