import { Inject, Injectable, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';

const routes: Routes = [{ path: 'heroes', component: HeroesComponent }];
@Injectable({ providedIn: 'root' })
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
