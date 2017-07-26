import Dep from './observer/dep'

export default class Watcher {
  constructor(vm, expOrFnc, cb) {
    this.vm = vm
    this.cb = cb
    this.expOrFnc = expOrFnc;
    this.value = this.get()
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

  get () {
    Dep.target = this;
    const value = this.vm._data[this.expOrFnc]
    Dep.target = null;
    return value;
  }

}