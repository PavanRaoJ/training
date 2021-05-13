
import axios from "axios";


export const getProducts = async (params) => {
    var downloadOptions = {
      method: "GET",
      params,
      url: `${process.env.REACT_APP_API}/Products/`,
    };
    const request = axios(downloadOptions);
  
    return request.then(({ data }) => {
    return data
    });
}
  