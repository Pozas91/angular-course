// ng g c recipes/recipes-list --skipTests=true
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
