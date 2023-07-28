import axios, {CreateAxiosDefaults} from "axios";

export const nytApi = axios.create({
   baseURL: process.env.NYT_API_URL,
   params: {
    "api-key": process.env.NYT_API_KEY
   }
} as CreateAxiosDefaults);