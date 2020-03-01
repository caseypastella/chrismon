import http from "../../actions/HttpService";

export const sendResetPasswordLink = email => {
  http.post("http://localhost:3000/account/forgotpassword", { email });
};
export const resetPassword = (password, token) => {
  http.post(`http://localhost:3000/account/resetpassword/${token}`, {
    password
  });
};
