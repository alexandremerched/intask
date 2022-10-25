export interface IProject {
  id: string;
  name: string;
  description: string;
  createdDate?: Date;
}

export class Project implements IProject {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public createdDate: Date = new Date()
  ) { }

  static factory(params: IProject) {
    return new Project(
      params.id,
      params.name,
      params.description,
      params.createdDate
    )
  }
}