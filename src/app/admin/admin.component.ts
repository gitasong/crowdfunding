import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})
export class AdminComponent implements OnInit {
  doneAdding: boolean = false;
  rewards: string[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  submitReward(reward: string) {
    this.rewards.push(reward);
    console.log(this.rewards);
  }

  submitForm(title: string, owner: string, description: string, mission: string, goal: number, rewards: string[]) {
    const newProject: Project = new Project(title, owner, description, mission, goal, rewards);
    this.projectService.addProject(newProject);
  }

}
