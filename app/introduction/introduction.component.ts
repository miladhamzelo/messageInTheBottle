import { Component }  from '@angular/core';
import { Router }     from '@angular/router';

import { AuthService } from 'ng2-ui-auth';
import { Animations }  from '../animations';

import { FacebookMe, FacebookUser } from '../service/facebook-me.service';
import { CacheUser }                from '../service/cache-user.service';

@Component({
  moduleId: module.id,
  selector: 'introduction',
  templateUrl: 'introduction.component.html',
  styleUrls: ['./introduction.component.css'],
  styles: [':host { display: block; }'],
  host: { '[@routeAnimation]': 'true' },
  animations: Animations.fadeIn
})
export class IntroductionComponent {

  constructor(
    private router: Router,
    private auth: AuthService,
    private facebookMe: FacebookMe,
    private cacheUser: CacheUser
  ) {}

  log() {
    this.auth.removeToken();
    this.router.navigate(['/dashboard/bottles']);
  }

  loginWithFacebook() {
    this.auth.authenticate('facebook')
        .subscribe({
          error: (err: any) => console.log(err),
          complete: () => {
            this.facebookMe.getUser().subscribe(
              facebookUser => {
                this.cacheUser.cacheFacebookUser(facebookUser);
                this.router.navigateByUrl('/dashboard/bottles');
              }
            );
          }
        });
  }

  logGodMode() {
    this.router.navigate(['/dashboard/bottles/admin']);
  }
}
