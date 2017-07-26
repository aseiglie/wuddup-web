export interface User {
    username: string,
    email: string,
    img: string,
    uid: string,
    createdOn?: string,
    updatedOn?: string,
    lastLogin?: string,
    calendar?: any,
    watching?: Array<User>,
    watchers?: Array<User>
}