class Store {
  state;
  rootReducer;

  subscribers = new Map();

  constructor(rootReducer) {
    this.rootReducer = rootReducer;
    this.state = this.rootReducer();
  }

  subscribe(callback) {
    this.subscribers.set(callback, callback);
  }

  unsubscribe(callback) {
    this.subscribers.delete(callback);
  }

  // action = {type: string, payload: any}
  dispatch(action) {
    this.state = this.rootReducer(this.state, action);

    this.subscribers.forEach((_, callback) => {
      callback(this.state);
    });
  }

  getState() {
    return this.state;
  }
}

export const createStore = (function () {
  let store;

  return (rootReducer) => {
    if (!store) {
      store = new Store(rootReducer);
    }

    return store;
  };
})();
