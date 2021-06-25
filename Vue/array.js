import { ARR_METHODS } from './config'
import observe from './observe'
var originArrayMethods = Array.prototype,
    arrMethods = Object.create(originArrayMethods);

ARR_METHODS.map(function(m) {
    arrMethods[m] = function () {
        var arg = Array.prototype.slice.call(arguments),
            rt = originArrayMethods[m].apply(this, arg);
        var newArr;
        console.log('数组新方法')
        switch (m) {
            case 'push': 
            case 'unshift':
                newArr = arg;
                break;
            case 'splice':
                newArr = arg(2);
                break
            default:
                break
        }
        newArr && observe(newArr)
        return rt
    }
})

export {
    arrMethods
}