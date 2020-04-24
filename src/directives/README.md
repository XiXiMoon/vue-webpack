### 自定义指令常用于需要对普通 DOM 元素进行底层操作

#### 自定义指令分全局自定义指令和局部自定义指令：
##### 全局自定义指令定义方式：
``` 
// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})
```

##### 局部自定义指令(单文件中)定义方式：
``` 
directives: {
  focus: {
    // 指令的定义
    inserted: function (el) {
      el.focus()
    }
  }
}
```

#### 自定义指令使用：
``` 
<input v-focus>
```


#### 一个自定义指令对象可以提供的钩子函数有(可选)：
##### 1、bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
##### 2、inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)
##### 3、update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新
##### 4、componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用
##### 5、unbind：只调用一次，指令与元素解绑时调用。

#### 钩子函数参数有：
##### 1、el：指令所绑定的元素，可以用来直接操作 DOM。
##### 2、binding：一个对象，包含以下属性
###### 2.1、name：指令名，不包括 v- 前缀。
###### 2.2、value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
###### 2.3、oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用
###### 2.4、expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
###### 2.5、arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"
###### 2.6、modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }
##### 3、vnode：Vue编译生成的虚拟节点
##### 4、oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用

#### 钩子函数参数案例：
``` 
<div id="hook-arguments-example" v-demo:foo.a.b="message"></div>

Vue.directive('demo', {
  bind: function (el, binding, vnode) {
    var s = JSON.stringify
    el.innerHTML =
      'name: '       + s(binding.name) + '<br>' +
      'value: '      + s(binding.value) + '<br>' +
      'expression: ' + s(binding.expression) + '<br>' +
      'argument: '   + s(binding.arg) + '<br>' +
      'modifiers: '  + s(binding.modifiers) + '<br>' +
      'vnode keys: ' + Object.keys(vnode).join(', ')
  }
})

new Vue({
  el: '#hook-arguments-example',
  data: {
    message: 'hello!'
  }
})

//结果为：
name: "demo"
value: "hello"
expression: "message"
argument: "foo"
modifiers: {"a": true, "b": true}
vnode keys: tag, data, children, text, elm, ns, context, fnContext, fnOptions, fnScopeId, key, componentOptions, componentInstance, parent, raw, isStatic, isRootInsert, isComment, isCloned, isOnce, asyncFactory, asyncMeta, isAsyncPlaceholder
```

#### 动态指令参数案例：
```
//场景为：把该元素固定在距离页面顶部 200 像素的位置
<div id="baseexample">
  <p>Scroll down the page</p>
  <p v-pin="200">Stick me 200px from the top of the page</p>
</div>

Vue.directive('pin', {
  bind: function (el, binding, vnode) {
    el.style.position = 'fixed'
    el.style.top = binding.value + 'px'
  }
})

new Vue({
  el: '#baseexample'
})
```

```
//场景为：我们需要把元素固定在左侧而不是顶部又该怎么办呢？这时使用动态参数就可以非常方便地根据每个组件实例来进行更新
<div id="dynamicexample">
  <h3>Scroll down inside this section ↓</h3>
  <p v-pin:[direction]="200">I am pinned onto the page at 200px to the left.</p>
</div>

Vue.directive('pin', {
  bind: function (el, binding, vnode) {
    el.style.position = 'fixed'
    var s = (binding.arg == 'left' ? 'left' : 'top')
    el.style[s] = binding.value + 'px'
  }
})

new Vue({
  el: '#dynamicexample',
  data: function () {
    return {
      direction: 'left'
    }
  }
})
```

#### 函数简写：
##### 在 bind 和 update 时触发相同行为，而不关心其它的钩子时，可以简写为：
```
Vue.directive('color-swatch', function (el, binding) {
  el.style.backgroundColor = binding.value
})
```


#### 对象字面量：
##### 如果指令需要多个值，可以传入一个 JavaScript 对象字面量。记住，指令函数能够接受所有合法的 JavaScript 表达式
```
<div v-demo="{ color: 'white', text: 'hello!' }"></div>

Vue.directive('demo', function (el, binding) {
  console.log(binding.value.color) // => "white"
  console.log(binding.value.text)  // => "hello!"
})
```





