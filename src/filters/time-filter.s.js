/**
 * 秒、毫秒（时长）格式化为时分秒(中文)
 * @param {*} value 
 * @param {*} isMs 
 * @param {*} dft 
 */
const timeLongFormat_zh  = (value, isMs=false, dft='--')  => {
    let total = parseInt(value);
    if(!isNaN(total)) {
        if (isMs) {
            total = total / 1000;
        }
        let hours = parseInt(total / 3600);
        let minutes = parseInt((total % 3600) / 60);
        let seconds = parseInt((total % 3600) % 60);
        let h = hours == 0 ? "" : `${hours}时`;
        let m = minutes == 0 ? "" : `${minutes}分`;
        let s = seconds == 0 ? "" : `${seconds}秒`;
        return h + m + s;
    }else{
        return dft;
    }
}

export {
    timeLongFormat_zh
}