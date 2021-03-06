import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppMainComponent } from './app-main/app-main.component';
import { AuthComponent } from './auth/auth.component';
import { ContactComponent } from './contactForm/contact.component';
import { PicturesComponent } from './pictures/pictures.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: AppMainComponent },
  { path: 'pictures', component: PicturesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'auth', component: AuthComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
