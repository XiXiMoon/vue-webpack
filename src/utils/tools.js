export function assert(condition, msg) {
    if (!condition) throw new Error(`[Apior] ${msg}`)
}

export const utils = {
    extend: function(target) {
        for (var i = 1, len = arguments.length; i < len; i++) {
            for (var prop in arguments[i]) {
                if (arguments[i].hasOwnProperty(prop)) {
                    target[prop] = arguments[i][prop]
                }
            }
        }
    
        return target
    }
}