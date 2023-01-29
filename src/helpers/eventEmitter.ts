export const eventEmitter = {
  _events: {} as Record<string, Array<(data: any) => any>>,
  dispatch (event: string, data: any) {
    if (this._events[event] == null) return
    this._events[event].forEach(callback => callback(data))
  },
  subscribe (event: string, callback: (data: any) => any) {
    if (this._events[event] == null) this._events[event] = []
    this._events[event].push(callback)
  },
  unsubscribe (event: string) {
    if (this._events[event] == null) return
    delete this._events[event]
  }
}
