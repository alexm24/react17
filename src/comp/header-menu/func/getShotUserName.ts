import { IUserAD } from "../../../interfaces";

export const getShotUserName = (user: IUserAD): string => {
    let userName = "";
    const { fullName } = user;
    userName = `${fullName} `;
    return userName;
}