import { useEffect } from "react";
import { useAuth } from "../store/auth";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Logout = () => {
  const { LogoutUser } = useAuth();

  useEffect(() => {
    LogoutUser();
    toast.success("Log Out Successful");
  }, [LogoutUser]);

  return <Navigate refresh="true" to="/" />;
};
