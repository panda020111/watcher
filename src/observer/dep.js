export default class Dep {
  constructor () {
    // subscriber就是watcher的实例；
    this.subs = []
  }

  addSub (sub) {
    this.subs.push(sub)
  }

  depend() {
    if (Dep.target) {
      // 给当前dep添加watcher；
      Dep.target.addDep(this)
    }
  }

  // 数据更新之后执行；
  notify () {
    this.subs.forEach((sub) => {
      sub.update()
    })
  }
}

Dep.target = null