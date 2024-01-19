import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { environment } from 'environments/environment';
import { MovieService } from '../../services/movie.service';
import { log } from 'console';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  public movies: Array<any> = [];
  public currentPage = 1;
  imagebaseURL = environment.images;

  constructor(private readonly movieService: MovieService, private readonly loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.loadMovies();
  }

  

  public loadMovies = async (event?: InfiniteScrollCustomEvent) => {
      const loading = await this.loadingCtrl.create({
        message: 'Loading..',
        spinner: 'bubbles',
      });

      console.log("load");

      await loading.present();
  
      this.movieService.getTopRatedMovies(this.currentPage).subscribe((res: any) => {
        loading.dismiss();
        this.movies.push(...res.results);
        console.log(res);

        event?.target.complete();
      });
  }



  loadMore(event: any) {
    this.currentPage++;
    this.loadMovies(event);
  }

}