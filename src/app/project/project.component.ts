import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  projects: Project[] = [
    new Project("The Manual Cocktail Collection", "Craighton Berman", "Elevate your home cocktail experience with a sculptural set of frosted decanters that feature an integrated dosing jigger.", 75000, 1),
    new Project("Kaksori!", "Solano Film Collective", "A feature documentary film about the traveling musicians of rural South Korea.", 15000, 2),
    new Project("Pocket Popcorn Machine", "THE Dylan Lewis", "Make some delicious popcorn in your pocket it's sooooo easy", 20000, 3),
    new Project("Ten Thousand foot slip n slide", "Dylan lewis again", "Literally slide to inifnity", 30000, 4)
  ];

  goToDetailPage(clickedProject: Project) {
  this.router.navigate(['projects', clickedProject.id]);
};

}
