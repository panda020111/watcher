import Watcher from '../observer/watcher'
import { observe } from '../observer'

let uid = 0;
export default class Vue {
  constructor(options = {}) {
    const vm = this
    vm._uid = uid++
    vm.$options = options
    vm.$data = options.data

    // 数据绑定;
    this.initData(vm)
    this.initWatcher(vm)
  }

  initData(vm) {
    let data = vm.$options.data
    // 将data绑定到vm对象上；
    const keys = Object.keys(data)
    let i = keys.length
    observe(data)
    // while(i--) {
    //   vm[keys[i]] = data[keys[i]]
    // }
  }
  
  _update(vm) {
    console.log('in vm update~~' + this.$data.msg)
  }

  initWatcher(vm) {
    const cb = () => {
      console.log('watcher call back')
    }

    const expFunc = () => {
      vm._update()
    }

    new Watcher(this, expFunc, cb);
  }
}