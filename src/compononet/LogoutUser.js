import React from "react";
import { useData, SET_USER } from "../context";
import { useNavigate } from "react-router";
import { logoutUserLocal } from "../utils";

const LogoutUser = ({ ...props }) => {
  const navigate = useNavigate();
  const {
    state: { user },
    dispatch,
  } = useData();

  const logoutUser = () => {
    dispatch({ type: SET_USER, payload: null });
    logoutUserLocal();
    navigate("/");
  };

  return (
    <>
      <button {...props} onClick={() => logoutUser()}>
        Logout
      </button>
    </>
  );
};

export default LogoutUser;
