export interface Question {
  Id?: number;
  Body?: string;
  Type?: string;
  ModelAnswer?: string;
  Course?: any;
  AnswerList?: any[];
  Answers?: any[];
  like?: boolean;
}
