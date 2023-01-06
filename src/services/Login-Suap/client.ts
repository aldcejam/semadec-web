import axios from "axios";
import { TokenSuap } from "./TokenSuap";

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
    token = TokenSuap({
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
