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

    if (!response.ok) {
      const errorResponse = await response.json();
      const errorID = errorResponse.error.message;

      let message = "No se ha podido ingresar";
      if (errorID === "EMAIL_NOT_FOUND")
        message = "Este email no se encuentra registrado";

      throw new error(message);
    }

    const data = await response.json();

    dispatch({
      type: LOGIN,
      token: data.idToken,
      userId: data.localId,
    });
  };
};
