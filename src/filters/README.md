## filter-global.js为全局过滤器，一半放很多地方用到的
## XXXX.s.js为局部过滤器，单独到单文件中按需引入

### 过滤器常用于一些常见的文本格式化，使用在双花括号的差值表达式中和v-bind中

#### 过滤器分全局过滤器和局部过滤器：
##### 全局过滤器定义方式：
``` 
Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})
```

##### 局部过滤器(单文件中)定义方式：
``` 
filters: {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}
```

#### 过滤器使用：
``` 
//可串联
{{ message | filterA | filterB }}   //filterA 被定义为接收单个参数的过滤器函数，表达式 message 的值将作为参数传入到函数中。然后继续调用同样被定义为接收单个参数的过滤器函数 filterB，将 filterA 的结果传递到 filterB 中。

//过滤器是函数，可接收参数
{{ message | filterA('arg1', arg2) }}   //filterA 被定义为接收三个参数的过滤器函数。其中 message 的值作为第一个参数，普通字符串 'arg1' 作为第二个参数，表达式 arg2 的值作为第三个参数
```


