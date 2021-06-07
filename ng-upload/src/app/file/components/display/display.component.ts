import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FileDisplayModel, FileModel } from '../../models/fileModel';
import { AppState } from '../../store/file-state.model';
import { LoadFilesAction } from '../../store/file.actions';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  files: Observable<Array<FileDisplayModel>>;
  loading$: Observable<Boolean>;

  constructor(private store: Store<AppState>) { 

  }

  ngOnInit(): void {
    // this.store.select(store => store.files.list).subscribe((data)=>{this.files=data;});
    this.loading$ = this.store.select(store=>store.files.loading);
    this.files = this.store.select(store=>store.files.list);
    this.store.dispatch(new LoadFilesAction());
  }

}
