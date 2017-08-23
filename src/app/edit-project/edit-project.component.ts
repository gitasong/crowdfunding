import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project.model';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  @Input() selectedProject;

  constructor() { }

  ngOnInit() {
  }

}
