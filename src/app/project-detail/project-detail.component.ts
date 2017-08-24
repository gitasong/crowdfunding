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
  rewards: string[];

  constructor(
    private route: ActivatedRoute, private location: Location, private projectService: ProjectService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
       this.projectId = urlParameters['id'];
     });
    this.projectService.getProjectById(this.projectId).subscribe(dataLastEmittedFromObserver => {
      this.projectToDisplay = dataLastEmittedFromObserver;
      var rewards = this.projectToDisplay.rewards;
    })
   }

   submitFunding(funding: number) {
     this.projectToDisplay.funding += funding;
     console.log(this.projectToDisplay.funding);
   }

}
