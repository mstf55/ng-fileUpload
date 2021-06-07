import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../store/file-state.model';
import { AddItemAction } from '../../store/file.actions';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  message$: Observable<string>
  progress: Observable<number>
  isError$: Observable<boolean>

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.isError$ = this.store.select(store => store.files.isError);
    this.progress = this.store.select(store => store.files.progress);
    this.message$ = this.store.select(store => store.files.message);

  }

  upload(event: any) {
    let files: FileList = event.target.files;
    if (files && files.length > 0) {
      let file: File = files[0];
      this.store.dispatch(new AddItemAction(file));

    }
    event.srcElement.value = null;
  }

}
