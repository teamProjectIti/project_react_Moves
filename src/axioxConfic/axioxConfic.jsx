import axios from "axios";

const axioxInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/popular",
});
const axioxInstance2 = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",

});
axioxInstance.interceptors.request.use(
  function (config) {
    config.params = {
      api_key: "25265dff521cf0d1e7929aec1d4649b3",
    };
    
    console.log(config);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
axioxInstance2.interceptors.request.use(
  function (config) {
   
    console.log(config);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);


axioxInstance.interceptors.response.use(function(response) {
    return response;
},
function (error) {
    return Promise.reject(error);
  }


);

export {  axioxInstance, axioxInstance2 };