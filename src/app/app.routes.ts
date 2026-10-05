import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { TemplateForm } from './template-form/template-form';
import { ReactiveForm } from './reactive-form/reactive-form';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'template-form', component: TemplateForm },
  { path: 'reactive-form', component: ReactiveForm },
  { path: '**', redirectTo: ''