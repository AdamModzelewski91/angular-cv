import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { HeaderComponent } from "./header/header.component";
import { AboutComponent } from "./sections/about/about.component";
import { ExpComponent } from "./sections/exp/exp.component";
import { ProjectsComponent } from "./sections/projects/projects.component";
import { SkillsComponent } from "./sections/skills/skills.component";

const routes: Routes = [
  {path: '', component: HeaderComponent, data: { animation: 'headerPage' }},
  {path: 'skills', component: SkillsComponent, data: { animation: 'skillsPage' }},
  {path: 'experience', component: ExpComponent, data: { animation: 'expPage' }},
  {path: 'my-projects', component: ProjectsComponent, data: { animation: 'myProjectsPage' }},
  {path: 'about-me', component: AboutComponent, data: { animation: 'aboutMePage' }},
  {path: 'contact', component: ContactComponent, data: { animation: 'contactPage' }},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
