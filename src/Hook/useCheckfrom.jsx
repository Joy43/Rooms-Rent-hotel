import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
const AxiosChexkfrom = axios.create({
  baseURL: "http://localhost:5000",
});

const useFrom = () => {
  return AxiosChexkfrom;
};

export default useFrom;
