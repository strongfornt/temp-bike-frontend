import { baseApi } from '../../api/baseApi';

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo:any) => ({
        url: '/auth/login',
        method: 'POST',
        body: userInfo,
      }),
    }),
    singIn: builder.mutation({
      query: (userInfo: any) => ({
        url: '/users/register',
        method: "POST",
        body: userInfo,
      }),
    }),
    changePass: builder.mutation({
      query: (payload:any) => ({
          url:'/auth/change-password',
          method: 'PATCH',
          body: payload,
      }) 
  })
  }),
});

export const { useLoginMutation, useSingInMutation, useChangePassMutation} = authApi;
