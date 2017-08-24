import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [ProjectService]
})
export class ProjectDetailComponent implements OnInit {
  projectToDisplay;
  projectId: string;
  rewards;

  constructor(
    private route: ActivatedRoute, private location: Location, private projectService: ProjectService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
       this.projectId = urlParameters['id'];
     });
    this.projectToDisplay = this.projectService.getProjectById(this.projectId);
    this.rewards = this.projectToDisplay.rewards;
    console.log(this.projectToDisplay.title);
   }

   submitFunding(funding: number) {
     console.log("Your project is now at $" + funding);
   }

}
