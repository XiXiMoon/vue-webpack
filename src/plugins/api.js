import axios from './http'

import { assert } from 'utils/tools'
import config from 'config'
import API_CONFIG from 'service/api'    //service中的API请求列表
import _pick from 'lodash/pick'
import _assign from 'lodash/assign'
import _isEmpty from 'lodash/isEmpty'

console.log('API_CONFIG', API_CONFIG)

const MOCK_DEFAULT_CONFIG = config[process.env.NODE_ENV+"Config"].MOCK_DEFAULT_CONFIG;    //API默认设置


class MakeApi {
    constructor(options) {
        this.api = {}
        this.apiBuilder(options)
    }

    apiBuilder({
    	sep = '|',
    	config = {},
    	mock = false, 
    	debug = false,
    	mockBaseURL = ''
    }) {
    	Object.keys(config).map(namespace => {
    		this._apiSingleBuilder({
                namespace, 
                mock, 
                mockBaseURL, 
                sep, 
                debug, 
                config: config[namespace]
            })
    	})
    }
    _apiSingleBuilder({
    	namespace, 
    	sep = '|',
    	config = {},
    	mock = false, 
    	debug = false,
    	mockBaseURL = ''
    }) {
        config.forEach( api => {
            const {name, desc, params, method, mockEnable, path, mockPath, subCode } = api
            const isMock = process.env.NODE_ENV === 'dev' ? (mock && !mockEnable) : false
            const url = isMock ? mockPath : path
            const baseURL = isMock && mockBaseURL

            debug && assert(name, `${url} :接口name属性不能为空`)
            debug && assert(url.indexOf('/') === 0, `${url} :接口路径path，首字符应为/`)

            Object.defineProperty(this.api, `${namespace}${sep}${name}`, {
                value(outerParams, outerOptions) {
                    const _data = _isEmpty(outerParams) ? params : _pick(_assign({}, params, outerParams), Object.keys(params))
                    const _options = isMock ? {url, desc, baseURL, method, subCode} : {url, desc, method, subCode}
                    return axios(_normoalize(_assign(_options, outerOptions), _data))
                }
            })      
        })
    }       
}

function _normoalize(options, data) {
    if (options.method === 'POST') {
        options.data = data
    } else if (options.method === 'GET') {
        options.params = data
    }
    return options
}

let a = new MakeApi({
	config: API_CONFIG,
	...MOCK_DEFAULT_CONFIG
})['api']

console.log('a', a)

export default a

