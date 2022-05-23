import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MediaInterface } from "@app-models/media.model";

@Component({
  selector: "app-favorites",
  templateUrl: "./favorites.component.html",
  styleUrls: ["./favorites.component.scss"],
})
export class FavoritesComponent {
  @Input() favorites: MediaInterface[];
  @Output() deleteFavoriteEmitter = new EventEmitter<number>();
  constructor() {
    this.favorites = [];
  }

  removeFavorite(index: number) {this.deleteFavoriteEmitter.emit(index);}

}
