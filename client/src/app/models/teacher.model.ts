export interface ITeacher {
  id?: string,
  teacherName?: string,
}

export class Teacher implements ITeacher {
  constructor(
    public id?: string,
    public teacherName?: string,
  ) { }
}
