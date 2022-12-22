import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { HeaderComponent } from "./header/header.component";
import { AboutComponent } from "./sections/about/about.component";
import { ExpComponent } from "./sections/exp/exp.component";
import { ProjectsComponent } from "./sections/projects/projects.component";
import { SkillsComponent } from "./sections/skills/skills.component";

const routes: Routes = [
  {path: '', component: HeaderComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'experience', component: ExpComponent},
  {path: 'my-projects', component: ProjectsComponent},
  {path: 'about-me', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
