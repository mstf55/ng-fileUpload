import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { FileModel } from '../../models/fileModel';

@Component({
  selector: 'app-table-paginated',
  templateUrl: './table-paginated.component.html',
  styleUrls: ['./table-paginated.component.css']
})
export class TablePaginatedComponent implements AfterViewInit {

  @Input() files: FileModel[];
  @Input() type: string;

  displayedColumns: string[] = ['name', 'size', 'uploadDate'];
  dataSource = new MatTableDataSource<FileModel>(null);
  dateFormat = 'dd/MM/yyyy hh:mm:ss';


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  constructor() {
  }
  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<FileModel>(this.files);
    this.dataSource.paginator = this.paginator;
  }

}
