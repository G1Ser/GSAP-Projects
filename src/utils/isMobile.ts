/**
 * 判断当前是否为移动设备
 * @returns {boolean} 如果是移动设备返回 true，否则返回 false
 */
export function isMobile(): boolean {
  // 检查是否在浏览器环境中
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return false;
  }

  // 通过用户代理字符串检测移动设备
  const userAgent = navigator.userAgent || (window as any).opera || '';

  // 移动设备的用户代理模式
  const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;

  // 检查用户代理是否匹配移动设备
  const isMobileUserAgent = mobileRegex.test(userAgent);

  // 检查屏幕宽度（可选的额外检查）
  const isMobileScreen = window.innerWidth <= 768;

  // 检查是否为触摸设备
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  // 综合判断：用户代理匹配移动设备 或者 (屏幕较小且支持触摸)
  return isMobileUserAgent || (isMobileScreen && isTouchDevice);
}

export default isMobile;
