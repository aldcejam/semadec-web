import Cookies from "js-cookie";

export const AdmCookieSuapToken = (finishTime: any, value: any) => {

  if (!Cookies.get("suapToken") && value && finishTime.current) {
    Cookies.set("suapToken", value, { expires: finishTime.current });
  } else {
    value = Cookies.get("suapToken");
  }
  
};
