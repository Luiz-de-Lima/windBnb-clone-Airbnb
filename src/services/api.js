import axios from "axios";
import data from '../stays.json'

export const api = {
  requestPlace: async () => {

    let response = await axios.get('../stays.json')
    console.log(response.data)
  }
}
