import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListAlbumsComponent } from './list-albums/list-albums.component';
import { ArchivesComponent } from './archives/archives.component';
import { AddAlbumComponent } from './add-album/add-album.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'albums', component: ListAlbumsComponent },
  { path: 'archives', component: ArchivesComponent },
  { path: 'add-album', component: AddAlbumComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
