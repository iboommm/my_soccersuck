import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { BoardComponent } from './board/board.component';
import { TopicComponent } from './topic/topic.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "board/:id", component: BoardComponent },
  { path: "topic/:id", component: TopicComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
