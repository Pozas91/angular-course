// ng g c recipes/recipes-list/recipe-item --skipTests=true
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
