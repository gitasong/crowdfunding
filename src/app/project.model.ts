export class Project {
  funding: number = 0;
  constructor(public title: string, public owner: string, public description: string, public mission: string, public goal: number, public rewards: string[]) { }
}
