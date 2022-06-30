import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Input } from "semantic-ui-react";
import { setAccessToken } from "../../store/actions";

import "./login.scss";

const Login = () => {
  const accessToken = useSelector((state) => state.accessToken);
  const dispatch = useDispatch();

  return (
    <Input
      className="login"
      icon="lock open"
      placeholder="Access token"
      value={accessToken}
      onChange={(e) => dispatch(setAccessToken(e.target.value))}
    />
  );
};

export default Login;
