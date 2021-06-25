import Vue from "Vue"
const vm = new Vue({
    el: '#app',
    data () {
        return {
            title: '标题',
            students: [
                {
                    name: '小明',
                    class: '1'
                },
                {
                    name: '小红',
                    class: '2'
                }
            ],
            teacher: {
                'bb': {
                    name: 'aa',
                    use: 'cc'
                },
                'cc': {
                    name1s: 'kk',
                    use1: 'll'
                }
            },
            school: ['pp', 'uu']
        }
    }
}) 
vm.students.push({
    name: 'aa',
    class: 'cc'
})
// vm.teacher = {
//     'aa': 111
// }
console.log(vm.students)
// console.log(vm.students)