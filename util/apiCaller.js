import axiosInstance from "axios";

export const makeAxiosRequest = async (
  baseURL,
  params,
  headers,
  method,
  data
) => {
  const options = {
    baseURL,
    headers,
    method,
  };

  try {
    const res = await axiosInstance(options);
    return res.data;
  } catch (err) {
    console.log("trying err", err.response.data);
  }
};
