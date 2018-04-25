import Dep from './dep'

export default class Observer {
  constructor(value) {
    this.value = value
    this.walk(value)
  }

  walk (value) {
    const keys = Object.keys(value)
    for (let i=0; i<keys.length; i++) {
      defineReactive(value, keys[i], value[keys[i]])
    }
  }
}

export function defineReactive(obj, key, value) {
  
  const dep = new Dep()

  const property = Object.getOwnPropertyDescriptor(obj, key);
  const getter = property && property.get;
  const setter = property && property.set;

  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: () => {
      // 调用数据是，才会把dep添加进去；
      const val = getter ? getter.call(obj): value;
      if (Dep.target) {
        dep.addSub(Dep.target)
      }
      return val
    },
    set: (newValue) => {
      // 新的value可能是个object所以需要中心observe
      if (setter) {
        setter.call(obj, newValue)
      } else {
        value = newValue
      }
      observe(newValue)
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