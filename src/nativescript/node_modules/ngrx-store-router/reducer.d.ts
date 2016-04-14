import { Reducer } from '@ngrx/store';
export interface RouterState {
    init?: boolean;
    url: string;
    navigating?: boolean;
}
export declare const RouterActions: {
    init: string;
    navigated: string;
    navigating: string;
};
export declare const routerReducer: Reducer<Object>;
