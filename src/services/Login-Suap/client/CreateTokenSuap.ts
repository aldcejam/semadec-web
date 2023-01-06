import Cookies from "js-cookie";
import { useRef } from "react";

type CreateTokenSuapProps = {
  value?: string | null;
  expirationTime: number;
  scope?: string | null;
};

export const CreateTokenSuap = ({ value, expirationTime, scope }: CreateTokenSuapProps) => {
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

  const getValue = ()=> {
    return value;
  };

  const getExpirationTime = ()=> {
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
