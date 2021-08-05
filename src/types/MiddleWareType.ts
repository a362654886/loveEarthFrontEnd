import {
  $CombinedState,
  CombinedState,
  MiddlewareAPI,
  Store,
} from "@reduxjs/toolkit";
import { AuthUser } from "../redux/auth";
import { LoginType } from "./EnumTypes";
import { LoginUser } from "../redux/loginUser";
import { User } from "./User";

export type middleStoreType = MiddlewareAPI<
  any,
  { readonly [$CombinedState]?: undefined } & {
    authState: LoginType;
    loginUserState: User | null;
  }
> & { dispatch: unknown };

export type actionBody =
  | AuthUser
  | LoginUser

export type nextAction = (action: actionBody) => void;
