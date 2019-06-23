import { resource } from './resources';

export interface course{
id?:number;
courseName? :string;
checked?:boolean;
grade?:number;
resources?:resource[];
}
