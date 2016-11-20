import { Component, AfterContentInit } from '@angular/core';
import { Router }                      from '@angular/router';
declare var $:any;
declare var demo:any;

@Component({
  moduleId: module.id,
  selector: 'introduction',
  templateUrl: 'introduction.component.html'
})
export class IntroductionComponent implements AfterContentInit {

  ngAfterContentInit() {
    demo.init();
    demo.checkFullPageBackgroundImage();

    setTimeout(function() {
        // after 1000 ms we add the class animated to the login/register card
        $('.card').removeClass('card-hidden');
    }, 700);
  }

  constructor(
    private router: Router
  ) {}

  log() {
    this.router.navigate(['/dashboard']);
  }
}
