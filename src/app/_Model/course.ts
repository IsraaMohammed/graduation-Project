import { resource } from './resources';

export interface course{
id?:number;
courseName? :string;
grade?:number;
resources?:resource[];
checked?:boolean;
}
