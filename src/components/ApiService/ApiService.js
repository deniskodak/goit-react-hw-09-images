import axios from "axios";
const API_KEY = "21310703-eb2542faa873a37e647429bbc";
const BASE_URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&per_page=12&key=${API_KEY}`;

const ApiService = async (keyword, page) => {
  const url = `${BASE_URL}&q=${keyword}&page=${page}`;

  const response = await axios.get(url);

  if (response.status > 206) {
    throw Error;
  }

  return response.data;
};

export default ApiService;
