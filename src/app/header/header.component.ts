import { Component, OnInit } from '@angular/core';
import { User } from '@app/shared/models';
import { AuthenticationService } from '@app/authentication/services';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	currentUser: User;

	ngOnInit() {
	}

	constructor(
		private router: Router,
		private authenticationService: AuthenticationService
	) {
		this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
	}

	logout() {
		this.authenticationService.logout();
		this.router.navigate(['/authentication']);
	}
}
