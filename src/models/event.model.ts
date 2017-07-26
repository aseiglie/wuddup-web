import { Comment } from './comment.model';
import { Poll } from './poll.model';

export interface Event {
    title: string,
    desc: string,
    dateStart: number,
    dateEnd: number,
    timeStart: number,
    timeEnd: number,
    pic?: string,
    collab?: boolean,
    type?: string,
    comments?: Array<Comment>,
    polls?: Array<Poll>
}



