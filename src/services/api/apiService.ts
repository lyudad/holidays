import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from '../../utils/types';

const BASE_URL = 'http://localhost:3030/';

const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getUseById: builder.query<IUser, string>({
      query: (id) => `user/${id}`,
    }),
    getAllUsers: builder.query<IUser, []>({
      query: () => 'user',
    }),
    postLoginUser: builder.query<IUser, string>({
      query: () => 'auth/login',

    }),
  }),
});

export default userApi;
