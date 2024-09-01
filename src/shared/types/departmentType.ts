import { QuestionType } from "./questionType";

export interface DepartmentType {
    id?: number,
    name: string,
    description: string,
    questions: QuestionType[]
}