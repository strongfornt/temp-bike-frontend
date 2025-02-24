import { baseApi } from '../../api/baseApi';

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: (filter:any) => ({
        url: '/admin/get-all-users',
        method: 'GET',
        params:filter
      }),
      providesTags: ['user']
    }),
    updateStatus: builder.mutation({
      query: ({updateStatus, userID}) => ({
        url: `/admin/update-user-status/${userID}`,
        method: "PATCH",
        body: updateStatus,
      }),
      invalidatesTags: ['user']
    })
  }),
});

export const { useGetAllUserQuery, useUpdateStatusMutation} = userApi;