import Vue from './instance/vue'

const vm = new Vue({
  data: {
    msg: 'hello',
    b: 2
  }
})

debugger
vm.$data.msg = "hello world"



// app.$watch("a", ()=>console.log("哈哈"))

// console.log('data===> ', app._data)
// setTimeout(()=>{
//   app.a = 4
// },1000)

// setTimeout(()=>{
//   app.a = 5
// },2000)
