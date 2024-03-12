import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e3dbdfd95c7c4ec882a6f008653fa804",
  },
});
