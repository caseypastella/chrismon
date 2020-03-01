import { Redirect } from "react-router-dom";
import React from "react";
import {
  sendResetPasswordLink,
  resetPassword
} from "../components/auth/index.js";

export const attemptSendResetPasswordLink = email => async dispatch => {
  return await sendResetPasswordLink(email);
};

export const attemptResetPassword = (password, token) => async dispatch => {
  return await resetPassword(password, token)
    .then(() => {
      dispatch(<Redirect to="/home" />);
    })
    .catch(dispatch(<Redirect to="`/account/reset/${token}`" />));
};
