// export interface jobProfile{
//     id?:number,
//     image?: string,
//     name?: string,
//     description?: string,

// }

import { userJobProfile } from './userJobProfile';
import { level } from './level';

export interface jobProfile{
    id?:number;
    name?: string;
    description?: string;
    image?: string;
   userJobProfile?:userJobProfile[];
    levels?:level[];


}