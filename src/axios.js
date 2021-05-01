import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://us-central1-eclone-2468f.cloudfunctions.net/api"
  // "http://localhost:5001/eclone-2468f/us-central1/api"
})
export default instance