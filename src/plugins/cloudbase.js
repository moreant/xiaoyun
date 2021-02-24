
import tcb from 'tcb-js-sdk'

const login = auth => {
  const loginState = auth.hasLoginState();
  if (!loginState) {
    auth.anonymousAuthProvider().signIn()
  }
}

const cb = tcb.init({
  env: (process.env.VUE_APP_TCB_ID).trim(),
})

const auth = cb.auth({
  persistence: "none"
});

login(auth)

const db = cb.database()

export { cb, db, auth }