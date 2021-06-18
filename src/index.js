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
                    name: 'kk',
                    use: 'll'
                }
            },
            school: ['pp', 'uu']
        }
    }
}) 

console.log(vm.title)