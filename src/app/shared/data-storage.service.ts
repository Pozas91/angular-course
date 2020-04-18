import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {map, tap} from 'rxjs/operators';
import * as fromApp from '../store/app.reducer';
import {Store} from '@ngrx/store';
import * as RecipesActions from '../recipes/store/recipe.actions';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private store: Store<fromApp.AppState>
  ) {
  }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();

    this.http.put(
      'https://curso-angular-4aa37.firebaseio.com/recipes.json',
      recipes
    ).subscribe(response => {
      console.log(response);
    });
  }
}
