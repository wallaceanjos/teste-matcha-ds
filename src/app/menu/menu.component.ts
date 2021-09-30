import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  themeToggle:boolean = false;


    themeToggler(){
        this.themeToggle =! this.themeToggle;
        if (this.themeToggle == true){
            document.body.className = document.body.className.replace("matcha-light-theme","matcha-dark-theme");
        } else {
            document.body.className = document.body.className.replace("matcha-dark-theme","matcha-light-theme");
        }
    }

}
