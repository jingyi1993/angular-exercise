import { Component, OnInit, AfterViewInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';




@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  posts;
  postsArr = [];
  start = 0;
  end = 4;
  loadText:boolean = false;
  // num;


  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getAllPosts()
      .once('value')
      .then(snapshot => {
        console.log(snapshot.val());
        this.posts = snapshot.val();
        // this.num = Math.floor(Math.random()*10);
        // console.log(this.num);


      });
  }

  loadMoreHandler() {
    // this.start += 4;
    this.end += 4;

  }
  loadMoreTextHandler() {
    this.loadText = true;
  }

  // transfer (obj) {
  //   if (obj) {
  //     for (var elem of obj) {
  //       this.postsArr.push(elem);
  //     }
  //     console.log(this.postsArr);
  //   }
  // }

}
