import axios from "axios";
import Cookies from "js-cookie";
import { useRef } from "react";

type CreateTokenSuapProps = {
  value?: string | null;
  expirationTime: number;
  scope?: string | null;
};

const Token = ({ value, expirationTime, scope }: CreateTokenSuapProps) => {
  const startTime = useRef<number>(new Date().getTime()); // O valor em milissegundos.
  const finishTime = useRef<Date | null>(
    new Date(startTime.current + expirationTime * 1000)
  );

  if (!Cookies.get("suapToken") && value && finishTime.current) {
    Cookies.set("suapToken", value, { expires: finishTime.current });
  } else {
    value = Cookies.get("suapToken");
  }

  if (!Cookies.get("suapTokenExpirationTime") && finishTime.current) {
    Cookies.set("suapTokenExpirationTime", finishTime.current + "", {
      expires: finishTime.current,
    });
  } else {
    finishTime.current = new Date(Cookies.get("suapTokenExpirationTime") || "");
  }
  
  if (!Cookies.get("suapScope") && scope) {
    Cookies.set("suapScope", scope, { expires: finishTime.current });
  } else {
    scope = Cookies.get("suapScope");
  }

  

  const getValue = () => {
    return value;
  };

  const getExpirationTime = () => {
    return finishTime.current;
  };

  const getScope = function () {
    return scope;
  };

  const IsTokenExist = () => {
    if (Cookies.get("suapToken") && value != null) {
      return true;
    }
    return false;
  };

  const revoke = function () {
    value = null;
    startTime.current = new Date().getTime();
    finishTime.current = null;

    if (Cookies.get("suapToken")) {
      Cookies.remove("suapToken");
    }

    if (Cookies.get("suapTokenExpirationTime")) {
      Cookies.remove("suapTokenExpirationTime");
    }

    if (Cookies.get("suapScope")) {
      Cookies.remove("suapScope");
    }
  };
  return { getValue, getExpirationTime, getScope, IsTokenExist, revoke };
};

type clientProps = {
  authHost: string;
  clientID: string;
  redirectURI: string;
  scope: string;
};

export const SuapClient = ({
  authHost,
  clientID,
  redirectURI,
  scope,
}: clientProps) => {
  let resourceURL = authHost + "/api/eu/";
  let authorizationURL = authHost + "/o/authorize/";
  let logoutURL = authHost + "/o/revoke_token/";

  let responseType = "token";
  let grantType = "implict"; // Necessário para utilizar Oauth2 com Javascript

  if (authHost.charAt(authHost.length - 1) == "/") {
    authHost = authHost.substr(0, authHost.length - 1);
  }

  let dataJSON: any;
  let token: {
    getValue: () => string | null | undefined;
    getExpirationTime: () => Date | null;
    getScope: () => string | null | undefined;
    IsTokenExist: () => boolean;
    revoke: () => void;
  };

  const extractToken = () => {
    let match =
      typeof window !== "undefined"
        ? document.location.hash.match(/access_token=(\w+)/)
        : null;
    if (match != null) {
      return !!match && match[1];
    }
    return null;
  };

  let extractScope = function () {
    let match =
      typeof window !== "undefined"
        ? document.location.hash.match(/scope=(.*)/)
        : null;
    if (match != null) {
      return match[1].split("+").join(" ");
    }
    return null;
  };

  let extractDuration = function () {
    let match =
      typeof window !== "undefined"
        ? document.location.hash.match(/expires_in=(\d+)/)
        : null;

    if (match != null) {
      return Number(!!match && match[1]);
    }

    return 0;
  };

  const init = () => {
    token = Token({
      value: extractToken(),
      expirationTime: extractDuration(),
      scope: extractScope(),
    });
    dataJSON = {};
  };

  const getToken = () => {
    return token;
  };
  const getDataJSON = () => {
    return dataJSON;
  };
  const getRedirectURI = () => {
    return redirectURI;
  };

  const isAuthenticated = (): boolean => {
    return token.IsTokenExist();
  };
  const getLoginURL = () => {
    let loginUrl =
      authorizationURL +
      "?response_type=" +
      responseType +
      "&grant_type=" +
      grantType +
      "&client_id=" +
      clientID +
      "&scope=" +
      scope +
      "&redirect_uri=" +
      redirectURI;
    return loginUrl;
  };

  const getRegistrationURL = () => {
    let registrationUrl =
      authHost + "/register/" + "?redirect_uri=" + redirectURI;
    return registrationUrl;
  };

  const getResource = async (scope: string, callback: any) => {
    await axios
      .get(resourceURL, {
        data: { scope: scope },
        headers: {
          Authorization: "Bearer " + token.getValue(),
          Accept: "application/json",
        },
      })
      .then((response) => {
        callback(response);
      })
      .catch((response) => {
        console.log(response);
      });
  };

  const login = () => {
    window.location.href = getLoginURL();
  };

  const logout = () => {
    let bodyFormData = new FormData();
    bodyFormData.append("token", token.getValue()?.toString() || "");
    bodyFormData.append("client_id", clientID + "");
    axios
      .post(logoutURL, bodyFormData)
      .then((response) => {
        token.revoke();
        window.location.href = redirectURI + "";
        return true;
      })
      .catch((response) => {
        alert("Falha na comunicação com o SUAP");
        return false;
      });
  };
  return {
    init,
    login,
    logout,
    getResource,
    getRegistrationURL,
    isAuthenticated,
    getLoginURL,
    getRedirectURI,
    getDataJSON,
    getToken,
  };
};
