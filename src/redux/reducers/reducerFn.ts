import { actionBody } from "../../types/MiddleWareType";

interface SimpleKeyValueObject {
  [key: string]: any;
}

export const mapArray = (
  type: string,
  handlers: SimpleKeyValueObject
): string | undefined => {
  for (const key in handlers) {
    if (key == type) {
      return key;
    }
  }
};

export const runHandler = <T>(
  state: T,
  action: actionBody,
  handler: (state: T, action: actionBody) => T
): T => handler(state, action);

export const createReducer = <T>(
  state: T,
  action: actionBody,
  handlers: SimpleKeyValueObject
): T => {
  const key = mapArray(action.type, handlers);
  if (key) {
    return runHandler<T>(state, action, handlers[key]);
  }
  return state;
};
