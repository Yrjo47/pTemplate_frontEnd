import {createAPI, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createAPI({
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001'}),
    tagTypes: ['Note', 'User'],
    endpoints: builder => ({})
})