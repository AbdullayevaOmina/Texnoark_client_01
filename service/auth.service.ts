import http from "@/api/interceptors";
import { setDataFromCookie } from "@/helpers/cookie";
import { SignIn, SignUp } from "@/types/auth-types";

export const login = async (data: SignIn) => {
  try {
    const response = await http.post("/auth/sign-in", data);
    console.log(response);

    if (response.status === 201) {
      const { access_token, refresh_token } = response?.data?.data?.tokens;
      const { email, first_name, last_name, id, phone_number } =
        response?.data?.data?.data;
      setDataFromCookie("access_token", access_token);
      setDataFromCookie("refresh_token", refresh_token);
      setDataFromCookie("first_name", first_name);
      setDataFromCookie("last_name", last_name);
      setDataFromCookie("user_id", id);
      setDataFromCookie("phone_number", phone_number);
      setDataFromCookie("email", email);
    }
    return response.status;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const register = async (data: SignUp) => {
  try {
    const response = await http.post("/auth/user/sign-up", data);
    return response.status;
  } catch (error) {
    console.error("Register error:", error);
    throw error;
  }
};
