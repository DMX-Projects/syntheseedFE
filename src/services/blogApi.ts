import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api/" }),
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => "blogs/",
    }),
    getBlogDetail: builder.query({
      query: (slug) => `blogs/${slug}/`,
    }),
  }),
});

export const { useGetBlogsQuery, useGetBlogDetailQuery } = blogApi;
