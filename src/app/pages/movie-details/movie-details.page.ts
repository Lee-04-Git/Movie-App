import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiResult, MovieService } from 'app/services/movie.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  public movie: any;
  imagebaseURL = environment.images

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    const id: string | null = this.route.snapshot.paramMap.get('id');

    if (id !== null) {
      this.movieService.getMovieDetails(id).subscribe(res => {
        console.log()
        this.movie = res;
      })
    }

  }

  openHomePage() {
    window.open(this.movie.homepage);
  }

}
