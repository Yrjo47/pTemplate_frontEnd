import {createSelector, createEntityAdapter} from '@reduxjs/toolkit'
import { apiSlice } from '../../app/api/apiSlice'

const userAdapter = createEntityAdapter({})

const initialState = userAdapter.getInitialState()

export const usersApiSlice = apiSlice.ingectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => '/users',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            keepUnusedDataFor: 5,
            transformResponse: responseData => {
                const loadedUsers = responseData.map(user => {
                    user.id - user._id
                    return user
                })
                return userAdapter.setAll(initialState, loadedUsers)
            },
            providesTags: (res, err, arg) => {
                if (res?.ids) {
                    return [
                        {type: 'User', id: 'LIST'},
                        ...res.ids.map(id => ({type: 'User', id}))
                    ]
                }
                else return [{type: 'User', id: 'LIST'}]
            }
        }),
    }),
})