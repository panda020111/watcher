import Dep from './dep'

export default class Observer {
  constructor(value) {
    this.value = value
    this.dep = new Dep()
    this.walk(value)
  }

  walk (value) {
    Object.keys(value).forEach((key) => {
      this.convert(key, value[key])
    })
  }

  convert(key, val) {
    defineReactive(this.value, key, val)
  }
}

export function defineReactive(obj, key, value) {
  const dep = new Dep()

  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: () => {
      if (Dep.target) {
        dep.addSub(Dep.target)
      }
      return value
    },
    set: (newValue) => {
      value = observe(newValue)
      dep.notify()
    }
  })
}

export function observe(value) {
  if (!value || typeof value !== 'object') {
    return
  }

  return new Observer(value)
}