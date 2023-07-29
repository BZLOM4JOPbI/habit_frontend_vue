import { useUserStore, } from "@/stores/user"


const authMiddleware = (to, from, next) => {
    const userStore = useUserStore();

    const isAuth = userStore.token;

    if (to.meta.forAuth) {
        if (isAuth) {
            next();
        } else {
            next({ name: 'login', });
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