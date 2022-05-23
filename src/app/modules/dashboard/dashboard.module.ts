import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "../dashboard/dashboard-routing.module";
import { AngularMaterialModule, FormsModule } from '@shared/index';

import { DashboardComponent } from "./dashboard.component";

import { ReactiveFormsModule } from "@angular/forms";
import { SearchComponent } from './components/search/search.component';
import { ResultComponent } from './components/result/result.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

import { PipesModule } from "@shared/pipes/pipes.module";
import { DirectivesModule } from "@shared/directives/directives.module";

@NgModule({
  declarations: [DashboardComponent, SearchComponent, ResultComponent, FavoritesComponent],
  imports: [CommonModule, DashboardRoutingModule, AngularMaterialModule, FormsModule, ReactiveFormsModule, PipesModule, DirectivesModule],
})
export class DashboardModule {}
