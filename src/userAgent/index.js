export const isWeixin = () => {
  var ua = navigator.userAgent.toLowerCase()
  return ua.match(/MicroMessenger/i) == 'micromessenger'
}
export const isH5 = () => {
  return window.location.pathname.indexOf('/h5') > -1
}
export const isIphone = () => /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)
export const isAndroid = () => /(Android)/i.test(navigator.userAgent)
