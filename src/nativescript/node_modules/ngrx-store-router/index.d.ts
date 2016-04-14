import { Provider } from 'angular2/core';
declare const routerMiddleware: (Provider[] | Provider)[];
export { RouterSubscriber } from './subscriber';
export { routerReducer, RouterState, RouterActions } from './reducer';
export { routerMiddleware };
