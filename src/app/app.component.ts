import { Component } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  template: `
    template
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
  constructor(){
    of(true).pipe(map(_ => false)).subscribe(console.log);
  }
}
