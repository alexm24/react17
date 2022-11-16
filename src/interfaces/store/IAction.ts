export interface IAction<T> {
    type: string;
    payload: T;
};
export interface IActionType {
    type: string;
};