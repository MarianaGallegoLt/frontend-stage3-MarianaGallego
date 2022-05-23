import { Component } from "@angular/core";
import { MediaService } from "@app-services/media.service";
import { MediaInterface, MediaListResponse } from "@app-models/media.model";
import Swal from "sweetalert2";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent {
  mediaList: MediaInterface[];
  favoriteMedia: MediaInterface[];
  today: Date;

  constructor(private mediaService: MediaService) {
    this.mediaList = [];
    this.favoriteMedia = [];
    this.today = new Date();
  }

  search(movieTitle: string) {
    this.mediaList = [];
    this.mediaService.getMovieList(movieTitle).subscribe(
      (result: MediaListResponse) => {
        if (result.Response)
          this.mediaList = result.data.results;
        else
          Swal.fire('Try other words');
      },
    );
  }

  addToFavorites(favorite: MediaInterface) {
    const alreadyAdded = this.favoriteMedia.findIndex(
      (element) => element.id === favorite.id
    );
    if (alreadyAdded === -1) {
      favorite.registerDate = new Date();
      this.favoriteMedia.push(favorite);
      Swal.fire('Added to favorites');
    }
  }

  deleteFavorite(index: number) {
    this.favoriteMedia.splice(index, 1);
    Swal.fire('Deleted');
  }

  hasResults() {
    return this.mediaList.length > 0;
  }

  hasFavoriteShow() {
    return this.favoriteMedia.length > 0;
  }
}
