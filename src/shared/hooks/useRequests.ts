import { useState } from "react";

import { URL_USER } from "../constants/urls";
import { ERROR_INVALID_PASSWORD } from "../constants/errorsStatus";
import { NavigateFunction } from "react-router-dom";
import { PathEnum } from "../enums/paths.enum";
// import { useGlobalReducer } from "../../store/reducers/globalReducer/useGlobalReducer";
import ConnectionAPI, { connectionAPIPost, MethodType } from "../connections/connetionAPI";
import { AuthType } from "../types/AuthType";
import { setAuthorizationToken } from "../connections/auth";

export const useRequests = () => {
    const [loading, setLoading] = useState<boolean>(false);
    // const {setNotification, setUser} = useGlobalReducer();

    const request = async <T>(url: string, method: MethodType, saveGlobal?: (object: T) => void, body?: unknown,): 
    Promise<T | undefined> => {
        setLoading(true);
        const data: T | undefined = await ConnectionAPI.connect<T>(url, method, body)
            .then((result) => {
                if(saveGlobal) saveGlobal(result);
                return result
            })
            .catch((error: Error) => {
                // setNotification(error.message, 'error');
                return undefined
            })
        setLoading(false);

        return data
    }

    const authRequest = async (navigate: NavigateFunction, body: unknown): Promise<void> => {
        setLoading(true);

        // await connectionAPIPost<AuthType>(URL_USER, body)
        //     .then((result) => {
        //         setUser(result.user)
        //         setAuthorizationToken(result.access_token)
        //         navigate(PathEnum.HOME)
        //         return result
        //     })
        //     .catch(() => { setNotification(ERROR_INVALID_PASSWORD, 'error') });

        setLoading(false)
    }

    return {
        loading,
        request,
        authRequest
    }
}