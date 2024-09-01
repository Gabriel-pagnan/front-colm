import { UserType } from "./userType";

export interface AuthType {
    access_token: string;
    user: UserType;
}