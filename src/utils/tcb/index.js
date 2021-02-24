import cloudbase from "@cloudbase/js-sdk";

const cb = cloudbase.init({
  env: "xiacun-6gd35jvte361355e",
})

const auth = cb.auth({
  persistence: "none"
})

const db = cb.database()

const login = async () => {
  return auth
    .anonymousAuthProvider()
    .signIn()
    .then(res => {
      console.log('登录成功');
    })
    .catch(err => {
      console.log('登录失败' + err);
    })

}

export { cb, auth, db, login }