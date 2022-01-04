import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-artigo-list',
  templateUrl: './artigo-list.component.html',
  styleUrls: ['./artigo-list.component.css']
})
export class ArtigoListComponent implements OnInit {

  ELEMENT_DATA: Post[] = [
    {
    id: 1,
    titulo: "Texto do Post",
    texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam lacu.",
    createdAt:'02/03/1990',
    updatedAt: '02/03/1990'
    }
  ]
  
  displayedColumns: string[] = ['id', 'titulo', 'texto','createdAt', 'updatedAt', 'acoes'];
  dataSource = new MatTableDataSource<Post>(this.ELEMENT_DATA);
  
  constructor() { }

  ngOnInit(): void {
  }


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

