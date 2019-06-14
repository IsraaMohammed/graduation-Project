import { course } from './course';

export interface level{
    id?:number;
    levelName?:string;
    courses?:course[];
}