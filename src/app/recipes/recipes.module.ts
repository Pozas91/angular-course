import {NgModule} from '@angular/core';
import {RecipesComponent} from './recipes.component';
import {RecipesListComponent} from './recipes-list/recipes-list.component';
import {RecipesDetailComponent} from './recipes-detail/recipes-detail.component';
import {RecipeItemComponent} from './recipes-list/recipe-item/recipe-item.component';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RecipeService} from './recipe.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptorService} from '../auth/auth-interceptor.service';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {RecipesRoutingModule} from './recipes-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule
  ],
  providers: [
    RecipeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ]
})
export class RecipesModule {

}
