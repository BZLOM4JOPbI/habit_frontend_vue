export function throttle(func: Function, timeout: number): Function  {
    let timer: null | number = null;
    return function (...args: any[]) {
        if (timer) return

        timer = setTimeout(() => {
            func(...args);
            clearTimeout(timer as number | undefined);
            timer = null;
        }, timeout)
    };
}