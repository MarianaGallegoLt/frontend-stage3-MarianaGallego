import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface IContentType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Output() searchEmitter = new EventEmitter<string>();
  
  movieForm: FormGroup;
  options: IContentType[] =  [
    {value: 'movies', viewValue: 'movies'},
    {value: 'series', viewValue: 'series'},
    {value: 'episodes', viewValue: 'episodes'},
  ]

  constructor(private fb: FormBuilder) {
    this.movieForm = this.fb.group({
      option: ['', Validators.required],
      title: ["", Validators.required],
      year: [{value: '', disabled: true}, [Validators.required, , Validators.minLength(4)]],
    });
  }

  get getTitle() {
    return this.movieForm.get("title");
  }

  get getOption() {
    return this.movieForm.get("option");
  }

  isDisabled() {
    if(this.getOption?.value == 'series')
      this.movieForm.controls['year'].enable();
    else
      this.movieForm.controls['year'].disable();
  }

  search() {
    this.searchEmitter.emit(this.getTitle!.value);
  }

}
