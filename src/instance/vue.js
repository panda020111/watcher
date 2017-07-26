import Watcher from '../watcher'
import { observe } from '../observer'

export default class Vue {
  constructor(options = {}) {
    this.$options = options
    let data = this._data = this.$options.data
    Object.keys(data).forEach((key) => this._proxy(key))
    this._watcher = observe(this._data)
  }

  $watch(expOrFnc, cb) {
    new Watcher(this, expOrFnc, cb)
  }

  _proxy(key) {
    const self = this
    Object.defineProperty(self, key, {
      configurable: true,
      enumerable: true,
      get: function proxyGetter () {
        return self._data[key]
      },
      set: function proxySetter (val) {
        self._data[key] = val
      }
    })
  }
}