import { URL_AUTH_API, URL_LOGIN_API } from "../../Constants/DataBase";
export const LOGIN = "LOGIN";
export const SIGNUP = "SIGNUP";
export const signup = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_AUTH_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });
      const data = await response.json();
      dispatch({
        type: SIGNUP,
        token: data.idToken,
        userId: data.localId,
      });
    } catch (e) {
      console.log({ e });
    }
  };
};
export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_LOGIN_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });

      const data = await response.json();

      dispatch({
        type: LOGIN,
        token: data.idToken,
        userId: data.localId,
      });
    } catch (e) {
      console.log(e);
    }
  };
};
