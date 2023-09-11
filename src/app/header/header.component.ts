import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorage } from '../services/TokenStorage.service';
import { AuthenticationService } from '../services/AuthenticationService.service';
import { CartService } from '../services/CartService.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cartListCount;
  userLoggedIn;
  id;
  cartList;
  isDropdownOpen = false;
  constructor(
    public router: Router, private tokenStorageService: TokenStorage, public authenticationService: AuthenticationService, private cartService: CartService) { }
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
  onGetCartListCount() {
    this.cartService.onGetAllCartItemByCustomerIdService().subscribe(data => {
      this.cartList = data;
      this.cartListCount = this.cartList.length;
    });
  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.isDropdownOpen) {
      // The dropdown is already closed
      return;
    }

    // Check if the click event target is not inside the dropdown
    const dropdownElement = document.querySelector('.dropdown');
    if (!dropdownElement || !dropdownElement.contains(event.target as Node)) {
      this.isDropdownOpen = false; // Close the dropdown
    }
  }

  onLogout() {

    this.tokenStorageService.signOut();
    this.router.navigate(['/']);
  }
}
