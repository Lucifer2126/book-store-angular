import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public name: string = '';
  // public email: string = '';
  // public id: number = 1;
  
  constructor(private route: ActivatedRoute, private router: Router ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParam => {
      this.name = queryParam['name'];
      console.log(queryParam);
    });
    // this.route.queryParams.subscribe(queryParam => {
    //   this.email = queryParam['email'];
    //   console.log(queryParam);
    // });
    // this.route.queryParams.subscribe(queryParam => {
    //   this.id = queryParam['id'];
    //   console.log(queryParam);
    // })
  }

  goToSignup(): void {
    this.router.navigate(['/auth/signup']);
  }

  goToBookDetails(id: number, authorId: number): void {
    this.router.navigate(['/public/book-details', id, 'author', authorId], {
    queryParams: {name: 'Shivaay', email: 'sample@hotmail.com'}, 
  });
  }
}
