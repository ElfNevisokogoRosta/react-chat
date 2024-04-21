import {axiosRequest} from "../apiAxios.ts";

const refreshToken = async () => {
  return await axiosRequest.get('auth/refresh_token',).then((res) =>
    res.data).catch((err) => err.message)
}
export default refreshToken