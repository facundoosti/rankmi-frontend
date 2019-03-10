import { FamilyGoal } from './family_goal.model';

export class User {
  constructor(
    public id: number,
    public nombre: string,
    public cargo: string,
    public area: string,
    public mundo: string,
    public family_goal: FamilyGoal,
  ) { }
}
