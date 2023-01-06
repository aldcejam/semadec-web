import Cookies from "js-cookie";

type CreateTokenSuapProps = {
    finishTime: any,
    ModifierFinishTimeCurrent: any
}
export const AdmCookieSuapTokenExpirationTime = (
  { finishTime,ModifierFinishTimeCurrent }: CreateTokenSuapProps 
) => {
  if (!Cookies.get("suapTokenExpirationTime") && ModifierFinishTimeCurrent) {
    Cookies.set("suapTokenExpirationTime", finishTime.current + "", {
      expires: finishTime.current,
    });
  } else {
    const ala = new Date(Cookies.get("suapTokenExpirationTime") || "")
    ModifierFinishTimeCurrent(
      ala
    );
  }
};
