import Dep from './dep'
import { debug } from 'util';

export default class Watcher {
  constructor(vm, expOrFnc, cb) {
    this.vm = vm
    this.cb = cb
    this.expOrFnc = expOrFnc;

    if (typeof expOrFnc === 'function') {
      this.getter = expOrFnc
    } else {
      console.warn("expOrFuc should be function")
      this.getter = function() {}
    }

    this.value = this.get()
  }

  get () {
    // 设置当前target；
    Dep.target = this;
    const vm = this.vm;
    let value;
    try {
      value = this.getter.call(vm, vm)
    } catch (e) {

    } finally {
      // 取消当前target
      Dep.target = null;
    }
    
    return value;
  }

  update () {
    this.run()
  }

  run () {
    const value = this.get()
    if (value !== this.value) {
      this.cb.call(this.vm)
    }
  }

  addDep(dep) {
    dep.addSub(this)
  }
}