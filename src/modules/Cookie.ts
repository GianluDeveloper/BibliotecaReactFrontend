let cookiePolicyName = "cookiepolicy";
const defaultValue = "true";

export const setCookiePolicyName = (newName: string) => {
  cookiePolicyName = newName;
};

const accepted = (isAccepted: boolean) => {
  if (isAccepted) {
    const expiration = getExpiration(7);
    window.document.cookie = `${cookiePolicyName}=${defaultValue}; SameSite=Strict; expires=${expiration}; path=/`;
  }
};
const getExpiration = (days: number) => {
  const date = new Date();
  const now = date.getTime();

  date.setTime(now + days * 1000 * 60 * 60 * 24);
  return date.toUTCString();
};
export const deleteCookie = () => {
  window.document.cookie = `${cookiePolicyName}=; Max-Age=0;`;
};
export const getCookie = () => {
  const cookies = window.document.cookie;
  let returnState = true;
  for (let cookie of cookies.split(";")) {
    const strippedCookie = cookie.trim();
    const [name] = strippedCookie.split("=");
    if (name === cookiePolicyName) {
      console.log("cookie found");
      returnState = false;
    }
  }
  //   cookies.split(";").forEach((cookie: string) => {
  //     const strippedCookie = cookie.trim();
  //     const [name] = strippedCookie.split("=");
  //     if (name === cookiePolicyName) {
  //         returnState= false;
  //     }
  //   });
  return returnState;
};

export default accepted;
