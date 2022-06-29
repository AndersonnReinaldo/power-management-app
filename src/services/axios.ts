import axios from "axios";

export function getAPIClient(ctx?: any) {

  const host = {
    production:'https://power-management-api.herokuapp.com',
    local:'http://192.168.5.110:3333'
  }

  const api = axios.create({
    baseURL:host.production
  })

  api.interceptors.request.use(config => {
    console.log(config);

    return config;
  })

  return api;
}