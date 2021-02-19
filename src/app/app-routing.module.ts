import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { BoardService } from './shared/services/board.service';

const routes: Routes = [
  {path:'', component: BoardComponent},
  {path:'contacts', component: ContactListComponent},
  {path:'add-contacts', component: ContactFormComponent},
  {path:'login', component: LoginFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
