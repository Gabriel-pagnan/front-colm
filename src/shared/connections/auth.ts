import { NavigateFunction, redirect } from "react-router-dom";
import { AUTHORIZATION_KEY } from "../constants/authorizationConstants";
import { UserTokenType } from "../types/UserTokenType";
import { getItemStorage, removeItemStorage, setItemStorage } from "./storageProxy";
import { PathEnum } from "../enums/paths.enum";
import { connectionAPIGet } from "./connetionAPI";
import { URL_USER } from "../constants/urls";

export const unsetAuthorizationToken = () => removeItemStorage(AUTHORIZATION_KEY);

export const setAuthorizationToken = (token?: string) => {
    if (token) setItemStorage(AUTHORIZATION_KEY, token)
};

export const getUser = (): UserTokenType | undefined => {
    const token = getAuthorizationToken();
    const tokenSlited = token?.split('.');

    if (tokenSlited && tokenSlited.length > 1) {
        return JSON.parse(window.atob(tokenSlited[1]));
    }
};

export const getAuthorizationToken = () => getItemStorage(AUTHORIZATION_KEY);

export const verifyLoggedIn = async () => {
    const token = getAuthorizationToken();

    if (!token) {
        return redirect(PathEnum.LOGIN);
    }

    const user = await connectionAPIGet(URL_USER).catch(() => {
        unsetAuthorizationToken();
        return redirect(PathEnum.LOGIN);
    });

    if (!user) return redirect(PathEnum.LOGIN);
    return null;
}

export const logout = (navigate: NavigateFunction) => {
    unsetAuthorizationToken();
    navigate(PathEnum.LOGIN)
}