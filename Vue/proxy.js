function proxyData (vm, target, key,) {
    Object.defineProperty (vm, key, {
        get () {
            console.log('数据代理获取')
            return vm[target][key]
        },
        set (newValue) {
            console.log('数据代理设置')
            vm[target][key] = newValue;
        }
    }) 
}

export default proxyData