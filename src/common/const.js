export function debounce(func, delay = 100) {
  let timer = null;
  return function(...args) {
    if (timer) {
      clearTimeout(timer);
    } else {
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    }
  };
}
