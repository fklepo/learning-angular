import {ListenerCallback, UnsubsribeCallback} from './listener';

export class Store<T> {
  private _state: T;
  private _listeners: ListenerCallback[] = [];

  constructor(private reducer: any, initialState: T) {
    this._state = initialState;
  }

  state(): T {
    return this._state;
  }

  dispatch(action: any) {
    this._state = this.reducer(this._state, action);
    this._listeners.forEach(listener => listener());
  }

  subscribe(listener: ListenerCallback): UnsubsribeCallback {
    this._listeners.push(listener);
    return () => {
      this._listeners = this._listeners.filter(l => l !== listener);
    };
  }
}
