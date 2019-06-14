import { Photo } from './Photo';

export interface user{
    id?: number,
    Image?: string, //photo url
    Username?: string ,
    Email?:string,
    Password?:string,
    ConfirmPassword?:string,
    photos?:Photo[]
}