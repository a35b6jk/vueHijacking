import observe from './observe'
function defineReactiveData (data, key, value) {
    observe (value)
    Object.defineProperty(data, key, {
        get () {
            console.log('响应式获取', value)
            return value;
        },
        set (newValue) {
            if (newValue === value) return
            console.log('响应式设置', newValue)
            observe(newValue)
            value = newValue
        }
    })
}

export default defineReactiveData