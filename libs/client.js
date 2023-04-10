import {createClient} from "microcms-js-sdk"

export const client =createClient({
  serviceDomain:"nextjs-microblog",
  apiKey:process.env.API_KEY,
})