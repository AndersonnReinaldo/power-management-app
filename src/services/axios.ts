import axios from "axios";

export function getAPIClient(ctx?: any) {

  const api = axios.create({
    baseURL:'http://192.168.5.110:3333'
  })

  api.interceptors.request.use(config => {
    console.log(config);

    return config;
  })

  return api;
}