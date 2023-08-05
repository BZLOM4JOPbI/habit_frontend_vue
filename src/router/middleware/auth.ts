import { useUserStore, } from "@/stores/user"


const authMiddleware = (to: any, from: any, next: any) => {
    const userStore = useUserStore();

    const isAuth = userStore.token;

    if (to.meta.forAuth) {
        if (isAuth) {
            next();
        } else {
            next({ name: 'SignIn', });
        }
    } else if (to.meta.forGuest) {
        if (isAuth) {
            next({ name: 'index', });
        } else {
            next();
        }
    } else {
        next();
    }
}

export default authMiddleware