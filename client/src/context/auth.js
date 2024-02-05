import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  //default axios
  // axios.defaults.headers.common["Authorization"] = auth?.token;
  const axiosInstance = axios.create({
    baseURL: baseUrl, // Replace with your actual API base URL
  });

  // Set the authorization header for the Axios instance
  axiosInstance.defaults.headers.common["Authorization"] = auth?.token;


  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        ...auth,
        user: parseData.user,
        token: parseData.token,
      });
    }
    //eslint-disable-next-line
  }, []);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
