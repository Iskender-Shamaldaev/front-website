import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const contactService: any = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://cms-aksoft.onrender.com/', // Your API base URL
    prepareHeaders: (headers) => {
      // Retrieve the bearer token from your state or wherever it's stored
      const token = process.env.API_TOKEN; // Example function to select token from Redux state
      if (token) {
        // Add the bearer token to the headers
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getContacts: builder.query<any, any>({
      query: () => '/api/contact-uses',
    })
  }),
})
export default contactService;

export const {useGetContactsQuery} = contactService;
