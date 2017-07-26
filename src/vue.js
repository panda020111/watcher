import Observer from './observer'
import Vue from './instance/vue'

const app = new Vue({
  data: {
    a: 1,
    b: 2
  }
})

app.$watch("a", ()=>console.log("哈哈"))

console.log('data===> ', app._data)
setTimeout(()=>{
  app.a = 4
},1000)

setTimeout(()=>{
  app.a = 5
},2000)
