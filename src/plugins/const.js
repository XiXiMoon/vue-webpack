import config from 'config'
import CONST_CONFIG from 'service/const'

const CONST_DEFAULT_CONFIG = config[process.env.NODE_ENV+"Config"].CONST_DEFAULT_CONFIG;    //const默认设置

console.log('CONST_CONFIG', Array.isArray(CONST_CONFIG))

class MakeConst {
    constructor(options) {
        this.const = {}
        this.constBuilder(options)
    }


    constBuilder({
    	sep = '/',
    	config = {}
    }) {
        console.log('config', config)
    	Object.keys(config).map(namespace => {
    		this._constSingleBuilder({namespace, sep, config: config[namespace]})
    	})
    }

    _constSingleBuilder({
    	namespace, 
    	sep = '/',
    	config = []
    }) {
        console.log('config', config)
        config.forEach( cst => {
            let {name, value} = cst
            let constName = `${namespace.toUpperCase()}${sep}${name}`
            Object.defineProperty(this.const, constName, { value })            
        })
        
    }
}

let a = new MakeConst({
	config: CONST_CONFIG,
	...CONST_DEFAULT_CONFIG
})['const']

console.log('a', a)

export default a

