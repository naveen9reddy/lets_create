import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const rapidApiKey = import.meta.env.VITE_RAPID_API_SUMMARY_KEY;


export const summaryApi =  createApi({
    reducerPath : 'summaryApi',
    baseQuery : fetchBaseQuery({
        baseUrl : 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders : (headers) =>{
            headers.set('X-RapidAPI-Key', rapidApiKey);
            headers.set('X-RapidAPI-Host','article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        }
        
    }),
    endpoints : (builder) => ({
        getSummary : builder.query({
            query: (params) => `/summarize?url=${encodeURIComponent(params.summaryUrl)}&length=9`
        })
    })
});

export const {useLazyGetSummaryQuery} = summaryApi;