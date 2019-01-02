/**
 * 校验1开头的11位手机号码
 */
export default function checkCommonMobile(mobile) {
    let reg = /^[1][0-9]{10}$/;
    return reg.test(mobile);
};