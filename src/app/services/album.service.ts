import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from 'src/app/model/albummodel';
import { Photo } from 'src/app/model/photomodel';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.baseUrl}/albums`);
  }

  getArchivedAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.baseUrl}/albums?archived=1`);
  }

  addAlbum(album: Album): Observable<Album> {
    return this.http.post<Album>(`${this.baseUrl}/albums`, album);
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/albums/${id}`);
  }

  getPhotosByAlbum(idAlbum: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseUrl}/photos?idAlbum=${idAlbum}`);
  }
}
