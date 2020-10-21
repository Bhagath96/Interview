import axios from "axios";

export default async function apiRequest(url,data){
    try {
      const response = await axios.get(url, data);
      return response
    } catch (error) {
      console.error(error);
    }
}