import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorage } from '../services/TokenStorage.service';
import { AuthenticationService } from '../services/AuthenticationService.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cartListCount;
  userLoggedIn;
  id;
  cartList
  constructor(
    public router: Router, private tokenStorageService: TokenStorage, public authenticationService: AuthenticationService) { }
  ngOnInit() {
    this.userLoggedIn = !!this.tokenStorageService.getToken(); //checking if the token is not null
    if (this.userLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.id = user.id;
      // this.onGetCartListCount();
      // this.cartService.cartListCountChange.subscribe(() => {
      //   this.onGetCartListCount();
      // });
    }

  }
  // onGetCartListCount() {
  //   this.cartService.onGetAllCartItemByCustomerIdService().subscribe(data => {
  //     this.cartList = data;
  //     this.cartListCount = this.cartList.length;
  //   });
  // }
  onLogout() {

    this.tokenStorageService.signOut();
    this.router.navigate(['/']);
  }
}
