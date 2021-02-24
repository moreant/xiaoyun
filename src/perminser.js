import router from '@/router';
import { cb, auth, login } from '@/utils/tcb';

const loginState = auth.hasLoginState()

router.beforeEach(async (to, from) => {
  // 检查登录
  if (!loginState) {
    await login()
  }
})