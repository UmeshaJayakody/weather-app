import { useQuery } from "react-query";
import axios from "axios";

const API_KEY = "87dcf86d8a1d1e7b5717bc396b2b13f4";

const fetchWeather = async (cityId) => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${API_KEY}&units=metric`
  );
  return data;
};

export const useWeather = (cityId) => {
  return useQuery(
    ["weather", cityId],
    () => fetchWeather(cityId),
    { staleTime: 5 * 60 * 1000 } // cache 5 mins
  );
};
