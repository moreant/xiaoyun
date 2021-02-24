import cloudbase from "@cloudbase/js-sdk";

const login = auth => {
  const loginState = auth.hasLoginState();
  if (!loginState) {
    auth.anonymousAuthProvider().signIn()
  }
}

const cb = cloudbase.init({
  env: "xiacun-6gd35jvte361355e",
})

const auth = cb.auth({
  persistence: "none"
});

login(auth)

// 得先登录在获取database
const db = cb.database()

export { cb, db, auth }