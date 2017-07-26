import { Event } from './event.model';
import { User } from "./user.model";

export interface Calendar {
    creator: User,
    events: Array<Event>,

}