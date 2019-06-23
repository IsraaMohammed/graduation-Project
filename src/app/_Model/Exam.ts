
import { examAnswerList } from './examAnswerList';

export interface Exam {
    id?: number;
    body?: string;
    type?: string;
    modelAnswer?: string;

    answers?: examAnswerList[];
} 