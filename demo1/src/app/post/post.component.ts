import { Component, OnInit } from '@angular/core';
import { Comments } from '../comments';
import { PostService } from '../post.service';


@Component({
  selector: 'app-post',
  template: `
  <h2>get api </h2>
  <table>
    <tr *ngFor ="let com of listComments">
      <td>{{com.id}}</td>
      <td>{{com.postId}}</td>
      <td>{{com.name}}</td>
      <td>{{com.email}}</td>
      <td>{{com.body}}</td>
    </tr>
  </table>
  `,
  styles: []
})
export class PostComponent implements OnInit {
  listComments: Comments[];

  constructor(private _pService: PostService) { }

  ngOnInit() {
    this._pService.getComments()
    .subscribe(
      data => {
        this.listComments = data;
      }
    );
  

  }

}
