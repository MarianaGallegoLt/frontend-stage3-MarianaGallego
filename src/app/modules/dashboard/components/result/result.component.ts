import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup} from '@angular/forms';
import { MediaInterface } from '@app-models/media.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  
  @Input() mediaList: MediaInterface[];
  @Output() addToFavoritesEmitter = new EventEmitter<MediaInterface>();

  dataSource: MediaInterface[];
  mediaForm: FormGroup;
  favorite: MediaInterface;

  constructor(private fb: FormBuilder) {
    this.dataSource = [];
    this.mediaList = [];
    this.favorite = {} as MediaInterface;
    this.mediaForm = this.fb.group({
      media: this.fb.array([]),
    });
  }
  
  ngOnInit(): void {
    this.dataSource = this.mediaList;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['mediaList'].currentValue) {
      this.dataSource = changes['mediaList'].currentValue;
      this.getMedia.clear();
      this.dataSource.forEach((element) => {
        this.getMedia.push(this.addMedia(element));
      });
    }
  }

  get getMedia() {
    return this.mediaForm.get("media") as FormArray;
  }

  addMedia(media: MediaInterface) {
    return this.fb.group({
      title:   [media.title],
      type:    [media.type],
      year:    [media.year],
      comment: ['']
    });
  }

  addToFavorite(index: number) {
    this.favorite = {
      id: this.dataSource[index].id,
      poster: this.dataSource[index].poster,
      title: this.getMedia.at(index).value.title,
      type: this.getMedia.at(index).value.type,
      year: this.getMedia.at(index).value.year,
      comment: this.getMedia.at(index).value.comment
    };
    this.addToFavoritesEmitter.emit(this.favorite);
  }
}
