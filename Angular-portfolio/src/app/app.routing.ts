
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";

import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';


const appRoutes: Routes = [
    {path: "", component: AboutMeComponent},
    {path: "sobre-mi", component: AboutMeComponent},
    {path: "proyectos", component: ProjectsComponent},
    {path: "crear-proyecto", component: CreateComponent},
    {path: "contacto", component: ContactComponent},
    {path: "**", component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
