/**
 * 防抖函数
 */
const debounce = (func: Function, delay: number) => {
  let timeout: number;
  return function (...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearInterval(timeout);
    timeout = setTimeout(later, delay);
  };
};

export default debounce;
