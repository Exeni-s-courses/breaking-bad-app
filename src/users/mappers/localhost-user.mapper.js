import { User } from "../models/user";

/**
 * 
 * @param {Like<User>} localhostUser 
 * @returns {User}
 */
export const localhostUserToModel = (localhostUser) => {

    const {
        first_name,
        last_name
    } = localhostUser;

    return new User({ ...localhostUser, firstName: first_name, lastName: last_name });
}