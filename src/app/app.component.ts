import { Component } from '@angular/core';
import { ImagesService } from '../app/images.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private service: ImagesService) { }

  title = '🍦 Image Search';
  searchTerm = '';
  images = [];
  loading = false;

  onSubmit() {
    this.loading = true;
    this.images = [];
    this.service.search(this.searchTerm)
      .subscribe((result: any) => {
        this.images = result.data;
        this.loading = false;
      });
  }

}
