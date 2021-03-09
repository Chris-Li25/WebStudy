(function(window) {
    const MyPlugin = {}
        //必须有install()
    MyPlugin.install = function(Vue, options) {
        //添加全局方法或属性
        Vue.myGlobalMethod = function() {
            console.log('Vue函数对象的myGlobalMethod()')
        }

        //添加全局资源
        Vue.directive('my-directive', function(el, binding) {
            el.textContent = 'my-directive---' + binding.value
        })

        //添加实例方法
        Vue.prototype.$myMethod = function() {
            console.log('vm $myMethod()')
        }
    }

    //向外暴露
    window.MyPlugin = MyPlugin
})(window)