import { Routes } from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import {WorkProjectsComponent} from "./work-projects/work-projects.component";
import {ContactComponent} from "./contact/contact.component";

export const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: "mainpage", component: MainPageComponent},
  {path: "munkaim", component: WorkProjectsComponent},
  {path: "kapcsolat", component: ContactComponent},
  {path: '**', redirectTo: 'page-not-found', pathMatch: 'full'},
];
