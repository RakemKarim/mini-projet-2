import axios from "axios";

const API_URL = "https://api.disneyapi.dev/character";

export const getCharacters = async () => {
  const response = await axios.get(API_URL);
  return response.data; 
};