import { baseApi } from '../../api/baseApi';

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo:any) => ({
        url: '/auth/login',
        method: 'GET',
        body: userInfo,
      }),
    }),
    singIn: builder.mutation({
      query: (userInfo: any) => ({
        url: '/users/register',
        method: "POST",
        body: userInfo,
      })
    })
  }),
});

export const { useLoginMutation, useSingInMutation} = authApi;
