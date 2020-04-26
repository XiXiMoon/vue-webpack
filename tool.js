const utils = {
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

export default utils